<template>
    <div class="heartbeat-layout flex flex-col justify-center items-center">
        <div class="flex flex-col mb-5 items-center">
            <div class="flex mb-5 items-center">
                <img
                    src="/assets/images/icons/heartbeat-icon.svg"
                    alt="eobo"
                    width="40"
                />
                <div
                    class="text-4xl ml-3 font-bold my-4 text-black font-antonia"
                >
                    EOBO {{ $t("heartbeat.heartbeat") }}
                </div>
            </div>
            <div class="text-lg text-center">{{ $t("heartbeat.description") }}</div>
        </div>

        <div class="page-wrapper">
            <div id="feed" class="feed" ref="feed">
                <HeartbeatItem
                    v-for="(item, index) in items"
                    :key="index"
                    :item="item"
                ></HeartbeatItem>
            </div>
        </div>
    </div>
</template>

<script>
import HeartbeatItem from "./HeartbeatItem.vue";
import SkeletonLoader from "~/components/_common/skeleton-loader/SkeletonLoader.vue";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";

export default {
    data() {
        return {
            items: [
                {
                    image: "https://pbs.twimg.com/profile_images/1641186477563600897/Yx-bMv18_400x400.jpg",
                    createdAt: "2023-12-31 23:55",
                    comment: "Omg filled up my bags on dope levels frens 😎",
                    content:
                        "<span class='font-bold'>@shibetoshinakamoto</span> got <span class='font-bold'>2.345.666,66 EOBO</span> for <span class='font-bold'>443,55 USDT</span>",
                    point: 2500,
                },
                {
                    image: "https://pbs.twimg.com/profile_images/1642588521813753862/ArnJ4KC3_400x400.jpg",
                    createdAt: "2024-01-02 12:44",
                    comment: "Buying the diiip 🔥",
                    content:
                        "<span class='font-bold'>@garygensler</span> swapped <span class='font-bold'>1 ETH</span> for <span class='font-bold'>2.443,55 USDT</span>",
                    point: 2500,
                },
                {
                    image: "https://pbs.twimg.com/profile_images/1222646977332174849/xWcD6t_Q_400x400.jpg",
                    createdAt: "2024-01-07 07:11",
                    comment: "Spidey diggin' eobo vibez! 🎈",
                    content:
                        "<span class='font-bold'>@spiderman</span> got <span class='font-bold'>2.345.666,66 EOBO</span> for <span class='font-bold'>443,55 USDT</span>",
                    point: 2500,
                },
                {
                    image: "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg",
                    createdAt: "2024-01-21 14:27",
                    comment: "This is just a dream, but still ☁️☁️☁️",
                    content:
                        "<span class='font-bold'>@elonmusk</span> got <span class='font-bold'>1 EOBO</span> for <span class='font-bold'>0,00 USDT</span>",
                    point: 2500,
                },
            ],
            page: 1,
        };
    },
    components: {
        HeartbeatItem: HeartbeatItem,
        InfiniteLoading,
        SkeletonLoader,
    },

    mounted() {
        setInterval(() => {
            this.animateFeed();
        }, 1500);
    },
    methods: {
        animateFeed() {
            const theFeed = this.$refs.feed;
            if (theFeed != null) {
                // Moving items
                const myItems = theFeed.querySelectorAll(".item");
                for (let i = 0; i < myItems.length; i++) {
                    myItems[0].classList.add("moving");
                }

                // Prepend new item
                const theItem = this.items[3];

                this.items.unshift(theItem);
                if (this.items.length > 5) this.items.pop();
                // Timeout
                setTimeout(() => {
                    for (let i = 0; i < myItems.length; i++) {
                        myItems[i].classList.remove("animate");
                        myItems[i].classList.remove("moving");
                    }
                }, 300);
            }
        },

        async load($state) {
            console.log("loading...");
            const result = await this.fetchLeaderBoardInfo(this.page);

            try {
                if (result.length < 5) {
                    this.leaderboards.push(...result);
                    $state.complete();
                } else {
                    items;
                    this.leaderboards.push(...result);
                    $state.loaded();
                    this.items;
                }
            } catch (error) {
                console.log(error);
                $state.error();
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.heartbeat-layout {
    position: relative;
    z-index: 10;
    border-radius: 12px;
    padding: 24px 0px;
    padding-bottom: 0;
    max-width: 720px;
    margin: 0 auto;

    &__skeleton-loader {
        height: 100px;
        margin-bottom: 6px;
        width: calc(100vw - 40px);

        @include xs {
            width: 435px;
        }
        @include sm {
            width: 600px;
        }
    }

    .feed {
        border-radius: 20px;
        overflow-y: hidden;
        background: #f4f4f4;
        height: 420px;
        @include xs {
            height: 540px;
        }
    }

    // Feed Item
    .item {
        position: relative;
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 10px;
        // background: lighten(#0c111b, 7.5%);
        margin-bottom: 2px;
        transform-orgin: top;
        transition: all 0.4s ease-in-out;

        &.animate {
            opacity: 0;
            // background: lighten(#0c111b, 14%);
            animation: animate-in 0.4s ease forwards;
        }

        &.moving {
            animation: moving 0.4s ease forwards;
        }

        &:after {
            display: block;
            content: "";
            width: 3px;
            height: 100%;
            // background: linear-gradient(to bottom, rgba(#0c111b, 0), $purple);
            position: absolute;
            top: 0;
            left: 0;
        }
    }

    // Page Components
    .page-wrapper {
        border-radius: 20px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        max-width: 900px;
        background: #f4f4f4;
        width: 90%;

        float: left;
        width: 100%;
        clear: both;
        margin: 0;

        padding: 6px 6px 0 6px;
        @include xs {
            padding: 30px 30px 0 30px;
        }
    }
    // Typography
    h5 {
        font-size: 16px;
        font-weight: 700;
        margin: 0 0 3px 0;
        padding: 0;
        line-height: 1;
    }

    p {
        font-size: 14px;
        font-weight: 500;
        margin: 0;
        padding: 0;
        line-height: 1;
        color: lighten(#0c111b, 45%);
    }

    // Scrollbars
    ::-webkit-scrollbar {
        width: 14px;
        height: 14px;
        // background: #0c111b;
    }
    ::-webkit-scrollbar-button {
        width: 3px;
        height: 0px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 50px;
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: lighten(#0c111b, 15%);
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
    }
    ::-webkit-scrollbar-thumb:active {
        background: darken(#0c111b, 5%);
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
    }
    ::-webkit-scrollbar-track {
        // background: #0c111b;
        border: 0px none #ffffff;
        border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
        // background: #0c111b;
    }
    ::-webkit-scrollbar-track:active {
        // background: #0c111b;
    }
    ::-webkit-scrollbar-corner {
        background: transparent;
    }
    // Animations
    @keyframes animate-in {
        0% {
            opacity: 0;
            transform: translate3d(-50px, -25px, 0);
        }
        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }

    // Animations
    @keyframes moving {
        0% {
            opacity: 0;
            transform: translate3d(0, -100%, 0);
        }
        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
}
</style>

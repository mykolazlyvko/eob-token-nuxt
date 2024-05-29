<template>
    <div class="heartbeat-item mb-4 item">
        <div
            class="flex items-center heartbeat-item__right"
            style="width: 100%"
        >
            <img
                :src="item.image"
                class="w-16 h-16 sm:w-24 sm:h-24 mr-2 sm:mr-3 rounded-full"
            />

            <div class="heartbeat-item_wrapper">
                <div
                    class="item-content flex flex-row xs:items-center xs:justify-between w-full"
                >
                        <p class="text-gray-300 heartbeat-item__date">
                            {{ item.createdAt }}
                        </p>
                        <span
                            class="heart-bp nowrap inline-block self-start bg-blue-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                            >+ {{ item.point }} BP</span
                        >
                </div>

                <div
                    class="item-content flex flex-col xs:flex-row xs:items-center xs:justify-between w-full"
                >
                    <div class="heartbeat-item__content">
                        <div
                            v-html="item.content"
                            class="my-1 nowrap heartbeat-item__info"
                        ></div>
                        <div class="flex items-center">
                            <svg
                                class="heartbeat-item__commenticon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="11.5"
                                    cy="11.5"
                                    r="11.5"
                                    fill="#E3F6FF"
                                />
                                <g clip-path="url(#clip0_2304_1221)">
                                    <path
                                        d="M11.9996 7.17377C14.7566 7.17377 17 8.94461 17 11.121C17 12.3495 16.2822 13.4898 15.031 14.2494C14.8368 14.3669 14.7034 14.5619 14.6632 14.7848C14.5398 15.4733 14.7057 16.1986 14.9532 16.8262C14.1277 16.4343 13.277 15.8324 12.6018 15.2545C12.4354 15.1123 12.2133 15.0528 11.9974 15.0677H11.9964C9.2421 15.0677 7 13.2973 7 11.1207C7 8.94461 9.24262 7.17377 11.9996 7.17377Z"
                                        fill="black"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2304_1221">
                                        <rect
                                            width="10"
                                            height="10"
                                            fill="white"
                                            transform="matrix(-1 0 0 1 17 7)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>

                            <div class="ml-2 text-gray-400 nowrap heartbeat-item__info">
                                {{ item.comment }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object,
        rank: Number,
    },
};
</script>
<style lang="scss">
.nowrap {
    text-wrap: nowrap;
}
.heart-bp {
    margin-left: auto;
    font-size: 11px;
    @include xs {
        font-size: 14px;
    }
}
.heartbeat-item__right {
    width: 100%;
}
.heartbeat-item_wrapper {
    width: 75%;
    @include sm {
        width: 100%;
    }
}
.heartbeat-item {
    width: 100%;
    .item-content {
        overflow: hidden;
    }
    &____commenticon {
        min-width: 24px;
    }
    &__content {
        width: 100%;
    }
    &__date {
        font-size: 0.9rem;
    }
    &__info {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    &__left {
        border-radius: 12px;
        background-color: #e3f6ff;
        color: #194459;
        font-size: 20px;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 56px;
        box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.05);
    }
    &__right {
        border-radius: 12px;
        background-color: white;
        box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.05);
        padding: 8px 14px;
        width: calc(100vw - 100px);

        @include xs {
            width: 380px;
        }
        @include sm {
            padding: 16px 24px;
        }
    }
    &__bulletin {
        width: 12px;
        height: 12px;
        border-radius: 100%;
        background-color: #e60029;
    }
    &__text-gray {
        color: #55636a;
    }
}
</style>
<template>
    <div
        class="bg-white rounded-2xl py-8 px-3 xs:py-12 xs:px-12 flex flex-col items-center xs:min-w-[390px] z-10 participate-box"
    >
        <p
            class="title-font font-bold text-2xl xs:text-3xl uppercase text-center"
        >
            {{ $t("pre-register.gathering") }}
            <span class="text-gray-400">
                {{ $t("general.airdrop") }}
            </span>
        </p>
        <button
            v-if="userInfo.point && userInfo.point > 0"
            class="eobo-btn flex items-center uppercase mt-6"
            @click="onPreRegister"
        >
            {{ $t("general.check_my_ranking") }}
        </button>
        <button
            v-else-if="userInfo.publicAddress"
            class="eobo-btn flex items-center uppercase mt-6"
            @click="onPreRegister"
        >
            {{ $t("general.my_referrals") }}
        </button>
        <button
            v-else
            class="eobo-btn flex items-center uppercase mt-6"
            @click="onPreRegister"
        >
            <img
                src="/assets/images/icons/eobo-icon.svg"
                alt=""
                class="mr-2 bounce"
                width="24"
                height="24"
            />
            {{ $t("general.participate") }}
        </button>

        <div class="my-7">
            <SkeletonLoader v-if="!value" class="w-64 h-5" />
            <transition name="state-fade" mode="out-in" v-else>
                <p
                    :key="value"
                    class="pre-register-text-red text-xs xs:text-base font-bold text-center xs:whitespace-nowrap"
                >
                    {{ value }}
                </p>
            </transition>
        </div>

        <div class="flex items-center justify-between w-full">
            <div class="flex flex-col items-center">
                <p class="title-font uppercase font-extrabold">
                    1.{{ $t("general.invite") }}
                </p>
                <div class="participate-box__item-box">
                    <img
                        src="/assets/images/homepage/eobo-invite.svg"
                        alt="Invite"
                    />
                </div>
            </div>
            <div class="flex flex-col items-center">
                <p class="title-font uppercase font-extrabold">
                    2.{{ $t("general.earn_bp") }}
                </p>
                <div class="participate-box__item-box">
                    <img
                        src="/assets/images/homepage/eobo-bp.svg"
                        alt="Invite"
                    />
                </div>
            </div>
            <div class="flex flex-col items-center">
                <p class="title-font uppercase font-extrabold">
                    3.{{ $t("general.rewards") }}
                </p>
                <div class="participate-box__item-box">
                    <img
                        src="/assets/images/homepage/participate-rewards.svg"
                        alt="Invite"
                    />
                </div>
            </div>
        </div>
        <p class="font-bold text-black mt-6 text-sm xs:text-base">
            {{ $t("general.golly") }}
            <a
                href="https://eobo.gitbook.io/eobo/the-gathering-referrals"
                class="learnmore"
                >{{ $t("general.learn_more") }}</a
            >
        </p>
    </div>
</template>

<script>
import useUIStore from "~/stores/ui";
import useUserStore from "~/stores/user";
import useGlobalStore from "~/stores/global";
import SkeletonLoader from "~/components/_common/skeleton-loader/SkeletonLoader.vue";

export default {
    data() {
        return {
            statement: "",
            handle: 0,
            index: 0,
            value: "",
        };
    },
    components: {
        SkeletonLoader,
    },
    setup() {
        const store = useUIStore();
        const userStore = useUserStore();
        const globalStore = useGlobalStore();
        const { updateActiveModal } = store;
        const { fetchLastJoinedUsers, getDateDiffer } = globalStore;
        const userInfo = computed(() => userStore.getUserInfo);
        const lastJoinedUsers = computed(() => globalStore.getLastJoinedUsers);

        return {
            updateActiveModal,
            fetchLastJoinedUsers,
            getDateDiffer,
            userInfo,
            lastJoinedUsers,
        };
    },
    methods: {
        async onPreRegister() {
            this.updateActiveModal("PreRegisterModal");
            useRouter().push({ query: { gathering: null } });
        },
    },
    async mounted() {
        await this.fetchLastJoinedUsers();
        var that = this;
        if (this.lastJoinedUsers.length)
            this.value =
                " 🎈 " +
                this.lastJoinedUsers[0].userName +
                " " +
                `${this.$t("pre-register.just_joined")}` +
                " " +
                this.getDateDiffer(this.lastJoinedUsers[0].createdAt);
        else this.value = "You're the first one!";

        this.handle = setInterval(() => {
            if (that.lastJoinedUsers.length) {
                that.index++;
                that.index = that.index % that.lastJoinedUsers.length;
                that.value =
                    " 🎈 " +
                    this.lastJoinedUsers[that.index].userName +
                    " " +
                    `${this.$t("pre-register.just_joined")}` +
                    " " +
                    this.getDateDiffer(
                        this.lastJoinedUsers[that.index].createdAt
                    );
            }
        }, 2000);
    },
    unmounted() {
        clearInterval(this.handle);
    },
};
</script>

<style lang="scss">
.participate-box {
    // margin-top: 120px;
    width: calc(100vw - 50px);
    @media (min-width: 410px) {
        width: 400px;
    }

    &__item-box {
        background-color: white;
        border-radius: 15px;
        box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.05);
        width: 94px;
        height: 76px;
        padding-bottom: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.pre-register-text-red {
    color: #ff002e;
}

.pre-register-text-bluedark {
    color: #205773;
}

.pre-register-description {
    span {
        color: #47c2ff;
    }
}
.learnmore {
    text-decoration: underline;
    &:hover {
        color: #333;
    }
}
.state-fade-enter-active {
    transition: all 0.5s ease;
}

.state-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.state-fade-enter,
.state-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}
</style>

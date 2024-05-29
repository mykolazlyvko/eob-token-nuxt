<template>
    <div class="community-layout">
        <div>
            <BurnBar />
            <Leaderboard class="mt-24" />
        </div>
        <div class="eobo-layout">
            <div class="grid grid-cols-1 md:grid-cols-2 community-layout__grid">
                <div
                    class="flex flex-col items-center md:items-end md:mr-auto justify-center"
                >
                    <h2 class="text-2xl lg:text-3xl font-bold text-center">
                        {{ $t("community.join_community") }}
                    </h2>

                    <div class="flex items-center mt-4 sm:mt-6">
                        <a
                            href="https://x.com/eobotech"
                            target="_blank"
                            class="mr-3 w-8 sm:w-12 hover:opacity-50"
                        >
                            <img
                                src="/assets/images/external_logos/social-icon-x-black.svg"
                                alt="twitter"
                            />
                        </a>
                        <a
                            href="https://t.me/eobotech"
                            target="_blank"
                            class="w-8 sm:w-12 hover:opacity-50"
                        >
                            <img
                                src="/assets/images/external_logos/social-icon-telegram-black.svg"
                                alt="telegram"
                            />
                        </a>
                    </div>
                </div>
                <div class="flex justify-center">
                    <img
                        src="/assets/images/homepage/frens.png"
                        alt="Community"
                        class="-mb-6 md:-mb-7 lg:-mb-8 max-w-sm md:max-w-lg mt-8 md:mt-0 w-11/12 xs:w-auto"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useUIStore from "~/stores/ui";
import useUserStore from "~/stores/user";
import Leaderboard from "~/components/_homepage/leaderboard/Leaderboard.vue";
import BurnBar from "~/components/_homepage/burnbar/BurnBar.vue";

export default {
    name: "Community",
    components: {
        BurnBar,
        Leaderboard,
    },
    setup() {
        const store = useUIStore();
        const userStore = useUserStore();
        const { updateActiveModal } = store;
        const userInfo = computed(() => userStore.getUserInfo);

        return { updateActiveModal, userInfo };
    },
    methods: {
        onPreRegister() {
            this.updateActiveModal("PreRegisterModal");
            useRouter().push({ query: { gathering: null } });
        },
    },
};
</script>

<style lang="scss" scoped>
.community-layout {
    position: relative;
    &__grid {
        direction: rtl;

        div {
            direction: ltr;
        }
    }
}
.cloud-layout {
    background-image: url("/assets/images/homepage/token-supply-bg.svg");
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>

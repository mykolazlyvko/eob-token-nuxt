<template>
    <div class="leaderboard-layout">
        <div
            class="eobo-layout flex flex-col items-center mt-12 mb-12 relative"
        >
            <img
                src="/assets/images/homepage/leaf2.svg"
                alt="Leaf"
                class="w-12 xs:w-16 md:w-auto left-0 xs:left-10 sm:left-16 absolute -mt-8 md:-mt-12"
            />
            <h2
                class="title-font text-3xl md:text-4xl font-bold text-center uppercase max-w-3xl"
            >
                {{ $t("banner.leaderboard_title") }}
            </h2>

            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
            >
                <SkeletonLoader
                    v-if="!leaderboardInfo.length"
                    v-for="i in 6"
                    v-bind:key="i"
                    class="w-64 h-16"
                />
                <LeaderItem
                    v-else
                    v-for="(item, index) in leaderboardInfo.slice(0, 6)"
                    :info="item"
                    :rank="index + 1"
                    v-bind:key="index"
                />
            </div>

            <div class="flex">
                <button
                    class="eobo-black-btn mt-24 mb-6 mr-3"
                    @click="updateActiveModal('TopLeaderBoardModal')"
                >
                    {{ $t("banner.view_leaderboard") }}
                </button>
                <button
                    class="eobo-btn mt-24 mb-6 ml-3"
                    @click="showPreRegister()"
                >
                    {{ $t("general.participate") }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import useUIStore from "~/stores/ui";
import useUserStore from "~/stores/user";
import LeaderItem from "./LeaderItem.vue";
import SkeletonLoader from "~/components/_common/skeleton-loader/SkeletonLoader.vue";

export default {
    name: "LeaderBoard",
    components: {
        LeaderItem,
        SkeletonLoader,
    },
    setup() {
        const userStore = useUserStore();
        const uiStore = useUIStore();
        const { updateActiveModal } = uiStore;
        const { fetchTopLeaderBoard } = userStore;
        const leaderboardInfo = computed(() => userStore.getLeaderBoardInfo);
        return {
            leaderboardInfo,
            updateActiveModal,
            fetchTopLeaderBoard,
        };
    },
    methods: {
        showPreRegister() {
            this.updateActiveModal("PreRegisterModal");
            useRouter().push({ query: { gathering: null } });
        }
    },
    async mounted() {
        await this.fetchTopLeaderBoard();
    },
};
</script>

<style lang="scss" scoped>
.leaderboard-layout {
    padding-top: 40px;
    @media (min-width: 900px) {
        padding-top: 60px;
    }
}
</style>

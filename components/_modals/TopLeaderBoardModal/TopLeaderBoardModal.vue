<template>
    <div class="leaderboard-modal m-4 xs:m-8 lg:mx-12 lg:my-9 relative">
        <h2
            class="text-2xl xs:text-3xl title-font font-bold uppercase text-center w-full py-4 mb-6 text-gray-700 sticky top-0 bg-white"
        >
            {{ $t("general.leaderboard") }}
        </h2>
        <div class="flex justify-center">
            <InfiniteLoading @infinite="load" v-if="!comments.length" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <SkeletonLoader
                v-if="!comments.length"
                v-for="i in 6"
                v-bind:key="i"
                class="w-64 h-16"
            />
            <LeaderItem
                v-else
                v-for="(item, index) in comments"
                :info="item"
                :rank="index + 1"
                v-bind:key="index"
            />
        </div>
        <div class="flex justify-center mt-3">
            <InfiniteLoading @infinite="load" v-if="comments.length" />
        </div>
    </div>
</template>

<script>
import LeaderItem from "~/components/_homepage/leaderboard/LeaderItem.vue";
import useUserStore from "~/stores/user";
import SkeletonLoader from "~/components/_common/skeleton-loader/SkeletonLoader.vue";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";

export default {
    setup() {
        const userStore = useUserStore();
        const { fetchLeaderBoardInfo } = userStore;
        return {
            fetchLeaderBoardInfo,
        };
    },
    components: {
        LeaderItem,
        InfiniteLoading,
        SkeletonLoader,
    },
    data() {
        return {
            page: 1,
            comments: [],
        };
    },
    methods: {
        async load($state) {
            console.log("loading...");
            const result = await this.fetchLeaderBoardInfo(this.page);

            try {
                if (result.length < 10) {
                    this.comments.push(...result);
                    $state.complete();
                } else {
                    this.comments.push(...result);
                    $state.loaded();
                    this.page++;
                }
            } catch (error) {
                console.log(error);
                $state.error();
            }
        },
    },
};
</script>

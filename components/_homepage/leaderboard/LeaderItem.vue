<template>
    <div class="flex items-center mx-6">
        <img :src="info.image" alt="User" class="rounded-full w-20" />
        <div class="ml-4">
            <div
                class="text-xl xs:text-2xl md:text-xl lg:text-2xl font-extrabold flex items-center"
            >
                <!-- <img
                    src="/assets/images/icons/gold-medal.png"
                    class="w-6 mr-1"
                    alt="1"
                    
                />
                <img
                    src="/assets/images/icons/silver-medal.png"
                    class="w-6 mr-1"
                    alt="1"
                    v-else-if="rank == 2"
                />
                <img
                    src="/assets/images/icons/bronze-medal.png"
                    class="w-6 mr-1"
                    alt="1"
                    v-else-if="rank == 3"
                /> -->
                <span class="rank-label"> #{{ rank }} </span>
                {{ info.userName }} 
                <img
                    v-if="info.isVerifiedX"
                    src="/assets/images/icons/verified-icon.svg"
                    width="24"
                    height="24"
                    class="ml-2"
                    alt="Verified on X"
                />
                <span v-if="rank == 1" class="ml-3">👑</span>
            </div>

            <p class="text-sm lg:text-base text-gray-600 w-max mt-2">
                Joined {{ getDateDiffer(info.createdAt) }}
            </p>
            <p class="text-sm lg:text-base font-extrabold w-max">
                {{ info.point }} Burn Points
            </p>
            <p class="text-sm lg:text-base w-max">
                {{ formatWallet(info.publicAddress) }}
            </p>
        </div>
    </div>
</template>

<script>
import useGlobalStore from "~/stores/global";

export default {
    name: "LeaderBoardItem",
    setup() {
        const globalStore = useGlobalStore();
        const { getDateDiffer } = globalStore;
        return { getDateDiffer };
    },
    props: {
        info: Object,
        rank: Number,
    },
    methods: {
        formatWallet(addr) {
            const formattedAddr = addr.substring(0,4) + '...' + addr.substring(38);
            return formattedAddr;
        }
    }
};
</script>

<style lang="scss">
.rank-label,
.verified {
    background: #e3f6ff;
    padding: 0 9px;
    font-size: 12px;
    border-radius: 30px;
    display: inline-block;
    margin-right: 6px;
}
</style>

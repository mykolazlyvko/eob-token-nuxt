<template>
    <div class="burnbar-layout relative">
        <h3
            class="text-4xl font-bold text-center title-font uppercase mb-6 mt-48"
        >
            {{ $t("banner.burn_target") }}
        </h3>
        <div class="burnbar">
            <div class="burned" :style="`width: ${percentage}%`"></div>
            <span>{{ percentage }}%</span>
        </div>
        <p class="mt-6 font-bold text-center">
            {{
                $t("banner.burned", {
                    burned: formatNumber(bp),
                    goal: formatNumber(goal),
                })
            }}
        </p>
    </div>
</template>

<script>
import useUserStore from "~/stores/user";

export default {
    setup() {
        const userStore = useUserStore();
        const { fetchTotals } = userStore;
        return {
            fetchTotals,
        };
    },
    data() {
        return {
            bp: 0,
            goal: 5000000,
            percentage: 0,
        };
    },
    methods: {
        async fetch() {
            const fetch = await this.fetchTotals();

            try {
                if (fetch.totalPoints) {
                    this.bp = fetch.totalPoints;
                    const c = Math.round((this.bp / this.goal) * 100);
                    this.percentage = c >= 100 ? 100 : c;
                } else {
                }
            } catch (error) {
                console.log(error);
            }
        },
        formatNumber(number) {
            return number.toLocaleString("en-UK", {
                maximumSignificantDigits: 3,
            });
        },
    },
    mounted() {
        this.fetch();
    },
};
</script>

<style lang="scss" scoped>
.burnbar-layout {
    width: 80%;
    margin: 0 auto;
}

.burnbar {
    background-color: rgba(232, 232, 233, 0.7);
    height: 80px;
    border-radius: 12px;
    width: 100%;
    position: relative;
    border: #efefef 1px solid;

    @include xs {
        border: none;
    }

    span {
        position: absolute;
        right: 24px;
        top: 22px;
        font-size: 24px;
        opacity: 0.5;
    }
}

.burned {
    background-color: #ff002e;
    height: 80px;
    border-radius: 12px;
    position: absolute;
    top: 0;
    left: 0;
}
</style>

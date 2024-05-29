<template>
    <div class="token-supply-layout">
        <div class="eobo-layout">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="block md:hidden">
                    <SupplyDetail />
                </div>
                <div
                    class="flex mt-12 sm:mt-32 justify-center md:justify-start"
                >
                    <div class="flex flex-col items-center mt-20 mr-4 xs:mr-8">
                        <p
                            class="token-supply-layout__earn-amount text-6xl xs:text-7xl"
                        >
                            50%
                        </p>
                        <p
                            class="token-supply-layout__earn-text text-lg xs:text-xl text-center"
                            v-html="$t('tokenSupply.earn_burn')"
                        ></p>
                    </div>
                    <img
                        src="/assets/images/homepage/token-supply-chart.svg"
                        alt=""
                    />
                    <div class="flex flex-col items-center mt-72 ml-4 xs:ml-8">
                        <p
                            class="token-supply-layout__liquidity-amount text-6xl xs:text-7xl mt-10"
                        >
                            50%
                        </p>
                        <div
                            class="token-supply-layout__liquidity-text text-lg xs:text-xl flex items-center justify-center"
                        >
                            {{ $t("tokenSupply.guarded") }}
                        </div>
                        <p
                            class="token-supply-layout__liquidity-text text-lg xs:text-xl text-center"
                        >
                            {{ $t("tokenSupply.lp_listings") }}
                        </p>
                    </div>
                </div>
                <div class="hidden md:block">
                    <SupplyDetail />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SupplyDetail from "./SupplyDetail.vue";

export default {
    name: "TokenSupply",
    components: { SupplyDetail },
};
</script>

<style lang="scss" scoped>
.token-supply-layout {
    background-image: url("/assets/images/homepage/token-supply-bg.svg");
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 250px;
    padding-bottom: 100px;
    margin-top: -180px;

    &__earn-amount {
        color: #ff002e;
        font-family: "Bebas Neue", sans-serif;
    }

    &__earn-text {
        color: #55636a;
        line-height: 1.35rem;
        font-family: "Bebas Neue", sans-serif;
    }

    &__liquidity-amount {
        color: #194459;
        font-family: "Bebas Neue", sans-serif;
    }

    &__liquidity-text {
        color: #55636a;
        line-height: 1.35rem;
        font-family: "Bebas Neue", sans-serif;
    }
}
</style>

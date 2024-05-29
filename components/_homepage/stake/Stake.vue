<template>
    <div class="stake-layout">
        <div class="eobo-layout flex flex-col items-center">
            <h1
                class="title-font text-3xl sm:text-4xl font-bold text-white text-center uppercase"
            >
                {{ $t("stake.title") }}
            </h1>
            <p
                class="text-white text-base sm:text-2xl font-normal mt-3 text-center"
            >
                {{ $t("stake.description") }}
            </p>

            <div
                class="bg-white rounded-2xl pt-3 pb-5 px-9 text-gray-800 uppercase text-4xl sm:text-6xl title-font font-bold mt-10 sm:mt-16"
            >
                {{ $t("general.stake") }} $eobo
            </div>
            <img
                src="/assets/images/homepage/stake-dash.svg"
                alt=""
                class="mt-3 xs:mt-5 stake-layout__dash"
            />
            <div class="flex items-center">
                <div class="flex flex-col items-center">
                    <p
                        class="stake-layout__text-blue text-7xl sm:text-8xl title-font"
                    >
                        10%
                    </p>
                    <p
                        class="title-font text-base sm:text-xl text-white uppercase w-24 text-center"
                    >
                        {{ $t("stake.rewards_apy") }}
                    </p>
                </div>
                <p
                    class="text-lg sm:text-2xl text-white opacity-70 uppercase stake-layout__upto w-max"
                >
                    {{ $t("stake.up_to") }}
                </p>
                <div class="flex flex-col items-center">
                    <p
                        class="stake-layout__text-blue text-7xl sm:text-8xl title-font"
                    >
                        10%
                    </p>
                    <p
                        class="title-font text-base sm:text-xl text-white uppercase w-28 text-center"
                    >
                        {{ $t("stake.donation_apy") }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.stake-layout {
    position: relative;
    background-color: #333;
    padding-top: 60px;
    padding-bottom: 50px;
    @media (min-width: 900px) {
        padding-bottom: 40px;
        padding-top: 70px;
    }

    &__dash {
        @media (max-width: 600px) {
            width: 80%;
        }
    }

    &__text-blue {
        color: #47c2ff;
        font-family: "Bebas Neue", sans-serif;
    }

    &__upto {
        margin-bottom: 65px;
        margin-left: 115px;
        margin-right: 135px;
        @media (max-width: 640px) {
            margin-bottom: 60px;
            margin-left: 150px;
            margin-right: 130px;
        }

        @media (max-width: 600px) {
            margin-bottom: 60px;
            margin-left: calc(40vw - 90px);
            margin-right: calc(40vw - 110px);
        }
    }
}
</style>

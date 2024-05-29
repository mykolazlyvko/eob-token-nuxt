<template>
    <div>
        <img src="/assets/images/homepage/supply-icon.svg" alt="" />
        <h2 class="text-4xl xs:text-5xl font-bold title-font uppercase mt-8">
            {{ $t("tokenSupply.the_token") }}
        </h2>
        <p
            class="text-xl xs:text-2xl md:text-xl lg:text-2xl text-gray-400 uppercase mt-5"
        >
            {{ $t("general.total_supply") }}
        </p>
        <p class="text-3xl xs:text-4xl md:text-3xl lg:text-4xl uppercase mb-12">
            1 billion $EOBO
        </p>
        <div v-if="false">
            <div class="flex items-center mt-8">
                <div class="token-supply-layout__list-icon"></div>
                <p
                    class="token-supply-layout__text-gray uppercase text-base xs:text-xl md:text-base lg:text-xl xl:text-2xl"
                >
                    {{ $t("tokenSupply.desc1") }}
                </p>
            </div>
            <div class="flex items-center">
                <div class="token-supply-layout__list-icon"></div>
                <p
                    class="token-supply-layout__text-gray uppercase text-base xs:text-xl md:text-base lg:text-xl xl:text-2xl"
                >
                    {{ $t("tokenSupply.desc2") }}
                </p>
            </div>
            <div class="flex items-center">
                <div class="token-supply-layout__list-icon"></div>
                <p
                    class="token-supply-layout__text-gray uppercase text-base xs:text-xl md:text-base lg:text-xl xl:text-2xl"
                >
                    {{ $t("tokenSupply.desc3") }}
                </p>
            </div>
            <div class="flex items-center mb-5 lg:mb-8">
                <div class="token-supply-layout__list-icon"></div>
                <p
                    class="token-supply-layout__text-gray uppercase text-base xs:text-xl md:text-base lg:text-xl xl:text-2xl"
                >
                    {{ $t("tokenSupply.desc4") }}
                </p>
            </div>
        </div>

        <a
            href="https://docs.eobo.tech/"
            target="_blank"
            class="token-supply-layout__text-gray text-base xs:text-xl md:text-base lg:text-xl xl:text-2xl border-b border-b-gray-600"
            >{{ $t("general.read_more") }}</a
        >
    </div>
</template>

<style lang="scss" scoped>
.token-supply-layout {
    &__list-icon {
        background-color: #55636a;
        border-radius: 100%;
        width: 6px;
        height: 6px;
        margin-right: 10px;
    }

    &__text-gray {
        color: #55636a;
    }
}
</style>

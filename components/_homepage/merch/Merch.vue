<template>
    <div class="merch-layout">
        <div class="eobo-layout">
            <div class="block lg:flex justify-between">
                <div>
                    <h2 class="text-3xl xs:text-4xl font-bold title-font">
                        {{ $t("merch.title") }}
                    </h2>
                    <p
                        class="merch-layout__text-gray mt-4 xs:mt-6 text-base xs:text-xl lg:text-base xl:text-xl w-full xs:w-[400px] lg:w-64 xl:w-[400px]"
                        v-html="$t('merch.description')"
                    ></p>
                </div>
                <div class="flex justify-center mt-12 lg:mt-0">
                    <img
                        src="/assets/images/homepage/merch-white.png"
                        alt="merch"
                    />
                </div>
            </div>
            <div class="flex justify-center mt-4">
                <img
                    src="/assets/images/homepage/merch-black.png"
                    alt="merch"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.merch-layout {
    padding-top: 30px;

    @include sm {
        padding-top: 60px;
    }

    &__text-gray {
        color: #565353;
    }
}
</style>

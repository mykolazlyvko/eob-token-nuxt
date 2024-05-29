<template>
    <div class="coming-soon-layout">
        <div class="eobo-layout flex flex-col items-center relative">
            <img
                src="/assets/images/homepage/logo-subtract.svg"
                alt="logo"
                class="absolute left-10 xs:left-20 sm:left-28 -mt-3 sm:-mt-4 w-10 sm:w-12"
            />
            <h2 class="text-white text-3xl font-bold title-font uppercase">
                EOBO {{ $t("general.heartbeat") }}
            </h2>
            <p class="text-white uppercase mt-2 mb-4">
                {{ $t("banner.coming_soon") }}
            </p>
            <img
                src="/assets/images/homepage/heartbeat.png"
                alt="Coming Soon"
                width="750"
                class="hidden sm:block"
            />
            <img
                src="/assets/images/homepage/heartbeat-mobile.png"
                alt="Coming Soon"
                class="block sm:hidden mt-10"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.coming-soon-layout {
    position: relative;
    display: block;
    padding-top: 90px;
    padding-bottom: 30px;
    background-color: #333;
    @media (min-width: 900px) {
        display: none;
        padding-top: 60px;
        padding-bottom: 30px;
    }
}
</style>

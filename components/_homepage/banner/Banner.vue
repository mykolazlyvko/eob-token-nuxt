<template>
    <div class="banner-layout">
        <div class="eobo-layout">
            <img
                src="/assets/images/homepage/cloud-left.svg"
                class="clouds-1"
                alt="eobo"
            />
            <img
                src="/assets/images/homepage/cloud-right.svg"
                class="clouds-2"
                alt="eobo"
            />
            <!-- Header -->
            <Header />

            <div
                v-if="showMovie"
                class="movie-overlay"
                :style="{ display: showMovie ? 'flex' : 'none' }"
                @click="toggleMovie(true)"
            >
                <!-- <div class="movie"> -->
                <!-- Your movie embed code here or video tag -->
                <iframe
                    width="80%"
                    height="540"
                    :src="movieSrc"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
                <!-- </div> -->
            </div>

            <!-- Banner Content -->
            <div class="grid mt-24 banner-layout__banner-grid relative">
                <div class="banner-layout__banner-description relative">
                    <div class="flex flex-col items-center md:items-start">
                        <img
                            src="/assets/images/homepage/eobo-red.png"
                            alt="eobo"
                            class="eobo-logo"
                        />
                    </div>
                    <div class="flex flex-col items-start banner-layout__talk">
                        <h2
                            class="title-font font-bold text-4xl xs:text-5xl lg:text-6xl uppercase mt-6"
                        >
                            {{ $t("banner.earn_text") }}
                        </h2>
                    </div>
                    <p
                        class="mt-10 text-xl text-gray-700 max-w-l text-center md:text-left"
                        v-html="$t('banner.eobo_description')"
                    ></p>
                    <div class="flex mt-5">
                        <a href="https://litepaper.eobo.tech/" target="_blank">
                            <button
                                class="eobo-btn eobo-black-btn mr-6 font-nunito text-white font-bold py-2 px-4 rounded-full"
                            >
                                {{ $t("general.litepaper") }}
                            </button>
                        </a>
                        <button
                            @click="toggleMovie(false)"
                            class="eobo-btn font-nunito text-white font-bold py-2 px-4 rounded-full"
                        >
                            &#9658; &nbsp; {{ $t("general.watch_movie") }}
                        </button>
                    </div>
                    <div class="flex mt-12">
                        <a
                            href="https://t.me/eobotech"
                            target="_blank"
                            class="mr-1 xs:mr-2 sm:mr-3 w-10 h-10 hover:opacity-50"
                        >
                            <img
                                src="/assets/images/external_logos/social-icon-telegram.svg"
                                alt="telegram"
                            />
                        </a>
                        <a
                            href="https://x.com/eobotech"
                            target="_blank"
                            class="mr-1 xs:mr-2 sm:mr-3 w-10 h-10 hover:opacity-50"
                        >
                            <img
                                src="/assets/images/external_logos/social-icon-x.svg"
                                alt="twitter"
                            />
                        </a>
                        <a
                            href="#soon"
                            target="_blank"
                            class="cursor-not-allowed banner-layout__external-logo-div opacity-50 w-10 h-10 flex rounded-full justify-center items-center mr-1 xs:mr-2 sm:mr-3"
                        >
                            <img
                                class="w-6 h-6"
                                src="/assets/images/external_logos/dextools.png"
                                alt="Dextools"
                            />
                        </a>
                        <a
                            href="#"
                            class="cursor-not-allowed banner-layout__external-logo-div opacity-50 w-10 h-10 flex rounded-full justify-center items-center mr-1 xs:mr-2 sm:mr-3"
                        >
                            <img
                                class="w-6 h-6"
                                src="/assets/images/external_logos/coinmarketcap.png"
                                alt="Coinmarketcap"
                            />
                        </a>
                        <a
                            href="#"
                            class="cursor-not-allowed banner-layout__external-logo-div opacity-50 w-10 h-10 flex rounded-full justify-center items-center"
                        >
                            <img
                                class="w-6 h-6"
                                src="/assets/images/external_logos/coingecko.png"
                                alt="Coingecko"
                            />
                        </a>
                    </div>
                </div>
                <CrowdSale class="banner-layout__crowdsale" />
                <div class="banner-layout__boys">
                    <div
                        class="banner-layout__pre-register-layout z-10 relative"
                    >
                        <img
                            src="/assets/images/homepage/boys.gif"
                            class="-mb-12 md:-mt-24"
                            alt="eobo boys"
                        />
                    </div>
                </div>
            </div>

            <Features></Features>

            <div class="token-distribution mb-36">
                <h2
                    class="title-font text-3xl md:text-4xl font-bold text-center uppercase max-w-3xl"
                >
                    {{ $t("banner.supply_title") }}
                </h2>
                <img
                    src="/assets/images/homepage/distribution-2.svg"
                    class="token-distribution__image"
                    alt="eobo token distribution"
                />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 tvl-panel mb-10">
                <div class="col-span-1 mt-4 md:mt-0 flex flex-col items-center">
                    <div class="text-gray-600 text-xl">TVL</div>
                    <div class="text-black font-extrabold text-2xl">$ 0.00</div>
                </div>
                <div class="col-span-1 mt-4 md:mt-0 flex flex-col items-center">
                    <div class="text-gray-600 text-xl">24H VOLUME</div>
                    <div class="text-black font-extrabold text-2xl">$ 0.00</div>
                </div>
                <div class="col-span-1 mt-4 md:mt-0 flex flex-col items-center">
                    <div class="text-gray-600 text-xl">GIFTED</div>
                    <div class="text-black font-extrabold text-2xl">$ 0.00</div>
                </div>
            </div>
            <Heartbeat></Heartbeat>
        </div>
    </div>
</template>

<script>
import Header from "~/components/_common/Header.vue";
import Features from "../features/Features.vue";
import Heartbeat from "../heartbeat/Heartbeat.vue";
import CrowdSale from "../crowdsale/CrowdSale.vue";

export default {
    name: "Banner",
    components: { Header, Features, Heartbeat, CrowdSale },
    data() {
        return {
            showMovie: false,
            movieSrc: null
        };
    },
    methods: {
        hoverImage(e) {
            e.target.setAttribute(
                "src",
                "/assets/images/homepage/participate-bg1.png"
            );
        },
        unhoverImage(e) {
            e.target.setAttribute(
                "src",
                "/assets/images/homepage/participate-bg.png"
            );
        },
        toggleMovie(stop) {
            if(stop) {
                this.movieSrc = null;
                this.showMovie = false;
            } else {
                this.movieSrc = "https://www.youtube.com/embed/vSwGE7iB3F0?si=K_2OPRT8tfv4vIwW&autoplay=1";
                this.showMovie = true;
            }
        }
    },
};
</script>

<style lang="scss" scoped>

.tvl-panel {
    position: relative;
}
.movie-overlay {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(30px);
    justify-content: center;
    align-items: center;
    z-index: 99;
}

.movie iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.token-distribution {
    z-index: 10;
    position: relative;
    h2 {
        margin: 0 auto;
        margin-bottom: 60px;
    }
    &__image {
        width: 100%;
        margin: 30px auto;
        @include sm {
            max-width: 800px;
        }
    }
}


.root:hover {
    opacity: 0.5;
}

.bg-go-to-app {
    background-color: #ff002e;
}
.bouncy {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
}

.clouds-1 {
    position: fixed;
    left: -200px;
    animation: clouds-1 120s ease-in infinite;
}
.clouds-2 {
    position: fixed;
    animation-delay: 15s;
    right: 0;

    animation: clouds-2 90s ease-in infinite;
}

.balloon {
    animation: balloon 25s ease-in infinite;
}

.bouncy:hover {
    cursor: pointer;
    animation-name: bouncy;
    -moz-animation-name: bouncy;
}

@keyframes bouncy {
    0%,
    100%,
    20%,
    50%,
    80% {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
    }
    40% {
        -webkit-transform: translateY(-30px);
        -ms-transform: translateY(-30px);
        transform: translateY(-30px);
    }
    60% {
        -webkit-transform: translateY(-15px);
        -ms-transform: translateY(-15px);
        transform: translateY(-15px);
    }
}

@keyframes clouds-1 {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-100vw);
    }
}

@keyframes clouds-2 {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(100vw);
    }
}

@keyframes balloon {
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(100vh);
        opacity: 0;
    }
}

@keyframes float {
    0% {
        transform: translatey(0px);
    }
    50% {
        transform: translatey(-20px);
    }
    100% {
        transform: translatey(0px);
    }
}

@keyframes float-participate {
    0% {
        transform: translatey(0);
    }
    50% {
        transform: translatey(-30px);
    }
    100% {
        transform: translatey(0);
    }
}

.eobo-logo {
    transform: translatey(0px);
    animation: float 6s ease-in-out infinite;
    max-width: 280px;
    @include sm {
        max-width: 320px;
    }
}

.docs {
    span {
        display: none;
        margin-left: 6px;
    }
    &:hover {
        span {
            display: inline;
        }
    }
}

.banner-layout {
    background-image: url("/assets/images/homepage/bg.png");
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;

    @include sm {
        background-attachment: fixed;
    }
    &__banner-description {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: 900px) {
            align-items: flex-start;
        }
        p {
            text-align: center;
            @media (min-width: 900px) {
                text-align: start;
            }
        }
    }
    &__talk {
        @media (min-width: 900px) {
            margin-left: 0px;
        }
    }
    &__external-logo-div {
        background-color: rgba(243, 243, 243, 0.5);
    }
    &__earn-title {
        font-size: 24px;
        text-align: center;
        @include sm {
            font-size: 32px;
            letter-spacing: 3px;
        }
    }
    &__banner-grid {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        @media (min-width: 900px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }
    &__pre-register-space {
        height: 330px;
        @include xs {
            height: 400px;
        }
        @media (min-width: 900px) {
            display: none;
        }
    }
    &__participate-bg {
        position: absolute;
        right: 50px;
        top: 0;
        transform: translatey(0px);
        animation: float-participate 2s ease-in-out;
        &:hover {
            top: -130px;
            @media (min-width: 900px) {
                top: -93px;
            }
        }
        @media (min-width: 480px) {
            right: calc(50% - 140px);
        }
        @media (min-width: 900px) {
            right: 60px;
        }
    }
    &__boys {
        z-index: 10;
        position: relative;
        justify-content: center;
        pointer-events: none;
        width: 80%;
        @media (min-width: 900px) {
            bottom: -90px;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            position: unset;
        }
    }
    &__coming-soon {
        display: none;
        @media (min-width: 900px) {
            display: flex;
        }
    }
    &__partner-desktop {
        display: none;
        @media (min-width: 900px) {
            display: block;
        }
    }
    &__partner-mobile {
        display: block;
        @media (min-width: 900px) {
            display: none;
        }
    }
    .eobo-layout {
        padding-bottom: 0;
    }
    &__crowdsale {
        @media (min-width: 900px) {
            position: absolute;
            right: 0;
            z-index: 20;
        }
    }
}

#flip {
    height: 70px;
    overflow: hidden;
}

#flip > div > div {
    color: #fff;
    padding: 0 12px;
    height: 70px;
    margin-bottom: 70px;
    display: inline-block;
    background: #000;
    border-radius: 6px;
}

#flip div:first-child {
    animation: flipper 5s linear infinite;
}

@keyframes flipper {
    0% {
        margin-top: -420px;
    }
    5% {
        margin-top: -280px;
    }
    33% {
        margin-top: -280px;
    }
    38% {
        margin-top: -140px;
    }
    66% {
        margin-top: -140px;
    }
    71% {
        margin-top: 0px;
    }
    99.99% {
        margin-top: 0px;
    }
    100% {
        margin-top: -420px;
    }
}

@media (max-width: 1024px) {
    #flip {
        height: 60px;
    }

    #flip > div > div {
        padding: 0 12px;
        height: 55px;
        margin-bottom: 55px;
    }

    #flip div:first-child {
        animation: flipper 5s linear infinite;
    }

    @keyframes flipper {
        0% {
            margin-top: -220px;
        }
        5% {
            margin-top: -165px;
        }
        33% {
            margin-top: -165px;
        }
        38% {
            margin-top: -110px;
        }
        66% {
            margin-top: -110px;
        }
        71% {
            margin-top: 0px;
        }
        99.99% {
            margin-top: 0px;
        }
        100% {
            margin-top: -220px;
        }
    }
}

@media (max-width: 480px) {
    #flip {
        height: 50px;
    }

    #flip > div > div {
        padding: 0 12px;
        height: 45px;
        margin-bottom: 45px;
    }

    #flip div:first-child {
        animation: flipper 5s linear infinite;
    }

    @keyframes flipper {
        0% {
            margin-top: -270px;
        }
        5% {
            margin-top: -180px;
        }
        33% {
            margin-top: -180px;
        }
        38% {
            margin-top: -90px;
        }
        66% {
            margin-top: -90px;
        }
        71% {
            margin-top: 0px;
        }
        99.99% {
            margin-top: 0px;
        }
        100% {
            margin-top: -270px;
        }
    }
}

.divider {
    color: #55636a;
    font-weight: 700;
}
</style>

<template>
    <div class="partner-layout relative">
        <Carousel
            :itemsToShow="1.5"
            :breakpoints="breakpoints"
            :autoplay="1500"
            :wrapAround="true"
        >
            <Slide
                v-for="(path, i) in paths"
                :key="i"
                class="w-56 px-3 flex justify-center items-center"
            >
                <img :src="path" class="desaturate" />
            </Slide>
        </Carousel>
    </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

export default {
    name: "App",
    data() {
        return {
            breakpoints: {
                220: {
                    itemsToShow: 1,
                    snapAlign: "center",
                },
                440: {
                    itemsToShow: 2,
                    snapAlign: "center",
                },
                660: {
                    itemsToShow: 3,
                    snapAlign: "center",
                },
                880: {
                    itemsToShow: 4,
                    snapAlign: "start",
                },
                1100: {
                    itemsToShow: 5,
                    snapAlign: "start",
                },
                1300: {
                    itemsToShow: 6,
                    snapAlign: "start",
                },
            },
            paths: [
                "/assets/images/partners/1.svg",
                "/assets/images/partners/2.svg",
                "/assets/images/partners/3.svg",
                "/assets/images/partners/4.svg"
            ],
        };
    },
    components: {
        Carousel,
        Slide,
    },
};
</script>

<style lang="scss" scoped>
.partner-layout {
    opacity: 0.7;
}
.desaturate {
    filter: grayscale(1);
    -webkit-filter: grayscale(100%);
    -moz-filter:    grayscale(100%);
    -ms-filter:     grayscale(100%);
    -o-filter:      grayscale(100%);
    opacity: 0.8;
}
</style>

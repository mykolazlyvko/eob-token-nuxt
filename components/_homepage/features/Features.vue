<template>
    <div class="features mb-36">
        <div
            class="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
            <FeatureCard
                v-for="(item, index) in features"
                :icon="item.icon"
                :title="item.title"
                :description="item.description"
                :soon="item.soon"
                :blur="item.blur"
                v-bind:key="index"
            />

        </div>
        <Carousel
            :itemsToShow="1"
            :autoplay="2000"
            :wrapAround="true"
        >
            <Slide
                v-for="(path, i) in paths"
                :key="i"
                class="flex justify-center items-center"
            >
                <img :src="path" class="carousel-slide" />
            </Slide>
            <template #addons>
              <Pagination />
            </template>
        </Carousel>

    </div>
</template>

<script>
import FeatureCard from "./FeatureCard.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

export default {
    name: "Features",
    components: { FeatureCard, Carousel, Slide, Pagination },
    data() {
        return {
            features: [
                { 
                    icon: '/assets/images/icons/swap.svg', 
                    title: this.$t('features.swap_title'), 
                    description: this.$t('features.swap_description'),
                    soon: true  
                },
                { 
                    icon: '/assets/images/icons/staking.svg', 
                    title: this.$t('features.staking_title'), 
                    description: this.$t('features.staking_description'),
                    soon: false 
                },
                { 
                    icon: '/assets/images/icons/quickpay.svg', 
                    title: this.$t('features.quickpay_title'), 
                    description: this.$t('features.quickpay_description'),
                    soon: true 
                },
                { 
                    icon: '/assets/images/icons/heartbeat.svg', 
                    title: this.$t('features.heartbeat_title'), 
                    description: this.$t('features.heartbeat_description'),
                    soon: false  
                },
                { 
                    icon: '/assets/images/icons/farms.svg', 
                    title: this.$t('features.farms_title'), 
                    description: this.$t('features.farms_description'),
                    soon: true
                },
                { 
                    icon: '/assets/images/icons/gifts.svg', 
                    title: this.$t('features.gifts_title'), 
                    description: this.$t('features.gifts_description'),
                    soon: true  
                },
            ],
            paths: [
                "/assets/images/homepage/swap-mockup.png",
                "/assets/images/homepage/dash-mockup.png",
                "/assets/images/homepage/staking-mockup.png",
            ],
        };
    },
};
</script>
<style lang="scss" scoped>
.features {
    .grid {
        margin: 90px auto 180px auto;
        max-width: 960px;
    }
}
.carousel-slide {
    display: block;
    width: 100%;
    margin: 0 auto;
    max-width: 980px;
    border-radius: 12px;
}
</style>


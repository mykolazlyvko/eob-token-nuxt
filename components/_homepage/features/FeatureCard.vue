<template>
    <div 
        v-tilt="{ speed: 500, perspective: 1200 }"
        class="feature-card"
        :class="blur ? 'blur' : null"
    >
        <h3
            class="flex text-4xl font-bold title-font uppercase mb-6"
        >
            <img :src="icon" :alt="title" class="mr-3" />
            <span>{{ title }}</span>
        </h3>
        <p class="mt-6">
            {{ description }}
        </p>
        <small class="soon" v-if="soon">SOON</small>
    </div>
</template>

<script>

export default {
    name: "FeatureCard",
    data() {
        return {};
    },
    props: {
        icon: String,
        title: String,
        description: String,
        soon: Boolean,
        blur: Boolean
    },
};
</script>

<style lang="scss" scoped>
.feature-card {
    margin: 0 auto;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
    width: 100%;
    max-width: 380px;
    padding: 36px 24px;
    position: relative;
    transform-style: preserve-3d;
    
    .soon {
        position: absolute;
        right: 18px;
        top: 18px;
        text-transform: uppercase;
        font-size: 12px;
        color: #55636A;
        font-family: $main-font;
    }

    &:hover {
        background-color: #333;
        color: #fff;
    }
}
</style>

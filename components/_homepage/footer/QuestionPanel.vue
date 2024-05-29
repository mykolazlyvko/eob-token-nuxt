<script setup>
import { ref } from "vue";
const props = defineProps({
    title: { type: String, required: true },
});
const showPanel = ref(false);
const togglePanel = (event) => {
    showPanel.value = !showPanel.value;
};
</script>

<template>
    <div class="w-full">
        <button
            @click.prevent="togglePanel"
            class="px-1 xs:px-5 pt-6 w-full flex items-center"
        >
            <img
                src="/assets/images/icons/plus-icon.svg"
                alt="+"
                v-if="showPanel"
            />
            <img src="/assets/images/icons/minus-icon.svg" alt="-" v-else />
            <p
                class="text-xl xs:text-2xl text-white text-start font-bold ml-3 xs:ml-5"
            >
                {{ title }}
            </p>
        </button>
        <transition name="fade">
            <div class="p-4 pl-12 xs:pl-14" v-if="showPanel">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<style lang="scss" scoped>
.fade-enter-active {
    transition: all 0.3s ease-out;
}

.fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>

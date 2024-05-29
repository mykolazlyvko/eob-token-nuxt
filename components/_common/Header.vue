<template>
    <div class="flex items-center">
        <a href="/" class="root" style="position: relative"
            ><img
                src="/assets/images/logos/logo-eobo-balloon.svg"
                alt="eobo"
            />
        </a>
        <div class="ml-auto flex items-center">
            <a
                href="https://docs.eobo.tech/"
                target="_blank"
                class="docs mr-6"
                style="position: relative"
                >📜 <span>docs</span></a
            >
            <a
                href="https://gleam.io/Czcd0/-eobo-250k-giveaway-competition"
                class="opacity-50 cursor-not-allowed buy-btn uppercase text-white rounded-full font-bold py-2 px-4 mr-1"
                target="_blank"
                >🐉 WIN $250K</a
            >
            <LanguageSelect />
        </div>
    </div>
</template>

<script>
import LanguageSelect from "~/components/_common/language-select/LanguageSelect.vue";

export default {
    name: "Header",
    components: { LanguageSelect },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
    .buy-btn {
        pointer-events: none;
        background-color: #ff002e;
        z-index: 10;
        &:hover {
            opacity: 0.7;
        }
    }
</style>
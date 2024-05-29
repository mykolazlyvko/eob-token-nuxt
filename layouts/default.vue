<template>
    <main>
        <slot />
        <button
            class="music-btn fixed right-2 bottom-2 backdrop-blur-lg bg-gray-400 rounded-full px-3 py-2 font-bold flex items-center opacity-70 hover:opacity-30"
            @click="onClickMusicBtn"
        >
            <img
                src="/assets/images/icons/play-icon.svg"
                alt=">"
                v-if="!isPlaying"
                class="w-4 h-4 mr-1"
            />
            <img
                src="/assets/images/icons/pause-icon.svg"
                alt=">"
                v-else
                class="w-4 h-4 mr-1"
            />
            {{ $t("general.music") }}
        </button>
    </main>
</template>

<script>
export default {
    data() {
        return {
            audioFile: null,
            isPlaying: false,
        };
    },
    methods: {
        onClickMusicBtn() {
            if (this.isPlaying) this.audioFile.pause();
            else {
                this.audioFile.loop = true;
                this.audioFile.play();
            }
            this.isPlaying = !this.isPlaying;
        },
    },
    mounted() {
        this.audioFile = new Audio("/assets/audios/eobo_theme.mp3");
    },
};
</script>

<style lang="scss">
.music-btn {
    z-index: 1000;
}
</style>

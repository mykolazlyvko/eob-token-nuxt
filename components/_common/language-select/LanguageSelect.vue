<template>
    <div class="language-select" @blur="open = false">
        <div class="selected flex justify-center" @click="open = !open">
            {{ selected.value }}
            <img
                src="/assets/images/icons/ChevronUp-icon.svg"
                class="ml-2"
                alt=">"
                v-if="open"
            />
            <img
                src="/assets/images/icons/ChevronDown-icon.svg"
                class="ml-2"
                alt=">"
                v-else
            />
        </div>

        <div class="items" :class="{ selectHide: !open }">
            <div
                v-for="(option, i) of options"
                :key="i"
                @click="switchTo(option)"
                class="text-center"
            >
                {{ option.value }}
            </div>
        </div>
        <div
            class="modal"
            :class="{ selectHide: !open }"
            @click="open = false"
        ></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [
                { key: "en", value: "English" },
                { key: "zh", value: "简体中文" },
                { key: "ja", value: "日本語" },
                { key: "ko", value: "한국어" },
                //{ key: "vn", value: "Tiếng Việt" },
                { key: "id", value: "Bahasa" },
                { key: "es", value: "Español" },
            ],
            selected: { key: "en", value: "English" },
            open: false,
        };
    },
    methods: {
        switchTo(option) {
            this.selected = option;
            this.open = false;
            this.$i18n.setLocale(option.key);
        },
    },
    mounted() {
        this.selected = this.options.find(
            (option) => option.key === this.$i18n.locale
        );
    },
};
</script>

<style lang="scss" scoped>
.modal {
    z-index: 80;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    place-items: center;
    background: transparent;
}
.language-select {
    position: relative;
    text-align: left;
    outline: none;
    height: 47px;
    line-height: 47px;
    z-index: 90;
    .selected {
        position: inherit;
        z-index: 90;
        width: 100px;
        background-color: transparent;
        border-radius: 6px;
        color: black;
        font-weight: 700;
        cursor: pointer;
        &:hover {
            opacity: 0.4;
        }
    }
    .items {
        z-index: 90;
        width: 180px;
        color: black;
        border-radius: 8px;
        position: absolute;
        background-color: white;
        left: -50px;
        right: 0;
        &:after {
            position: absolute;
            content: "";
            top: -19px;
            left: 80px;
            width: 0;
            height: 0;
            border: 10px solid transparent;
            border-color: transparent transparent white transparent;
        }
        div {
            color: black;
            border-radius: 8px;
            cursor: pointer;
            user-select: none;
            &:hover {
                background-color: lightgray;
            }
        }
    }
}
.selectHide {
    display: none;
}
</style>

<template>
    <div class="footer-layout">
        <div class="eobo-layout flex flex-col items-center">
            <h2
                class="text-3xl xs:text-4xl uppercase title-font text-white font-bold mb-16"
            >
                {{ $t("footer.faq") }}
            </h2>
            <div class="footer-layout__divider w-full"></div>
            <div v-for="index in 7" :key="index" class="w-full">
                <QuestionPanel :title="$t('footer.question' + index)">
                    <p
                        class="text-base xs:text-xl footer-layout__accordion-detail pl-4 xs:pl-5 text-white"
                    >
                        {{ $t("footer.answer" + index) }}
                    </p>
                </QuestionPanel>
                <div class="footer-layout__divider w-full mt-4"></div>
            </div>

            <img
                src="/assets/images/logos/logo-eobo-vr.svg"
                alt="logo"
                class="mt-24 w-16 xs:w-20"
            />
            <div
                class="flex flex-col items-center w-full mt-8 xs:mt-12 text-sm xs:text-base"
            >
                <div class="footer-layout__text-gray sm:ml-3 text-center">
                    <a href="/terms-and-conditions" class="hover:opacity-50">{{
                        $t("footer.term_conditions")
                    }}</a>
                    |
                    <a href="/privacy-policy" class="hover:opacity-50">{{
                        $t("footer.privacy_policy")
                    }}</a>
                    |
                    <a href="https://docs.eobo.tech" class="hover:opacity-50">{{
                        $t("footer.docs")
                    }}</a>
                    |
                    <a href="mailto:balloon@eobo.tech" class="hover:opacity-50"
                        >balloon@eobo.tech</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import QuestionPanel from "./QuestionPanel.vue";

export default {
    name: "Footer",
    components: {
        QuestionPanel,
    },
};
</script>

<style lang="scss" scoped>
.footer-layout {
    position: relative;
    background-color: #333;
    padding-top: 70px;

    &__divider {
        border-top: 1px solid white;
    }

    &__accordion-detail {
        border-left: 5px solid #ff002e;
    }

    &__text-gray {
        color: #b7b7b7;
        a {
            text-decoration: underline;
        }
    }
}
</style>

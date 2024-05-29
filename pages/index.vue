<template>
    <div class="home-layout">
        <Header />
        <Banner />
        <Stake />
        <Community />
        <Footer />
    </div>
</template>

<script>
import Banner from "../components/_homepage/banner/Banner.vue";
import Stake from "../components/_homepage/stake/Stake.vue";
import Community from "../components/_homepage/community/Community.vue";
import Header from "~/components/_common/Header.vue";
import Footer from "~/components/_homepage/footer/Footer.vue";
import useUIStore from "~/stores/ui";
import useUserStore from "~/stores/user";
import { useRoute } from "vue-router";

export default {
    name: "Home",
    components: {
        Banner,
        Stake,
        Community,
        Footer
    },
    setup() {
        const store = useUIStore();
        const userStore = useUserStore();
        const route = useRoute();
        const { updateActiveModal } = store;
        const { getAuthInfo, fetchReferrerUserName, setReferrerCode } =
            userStore;
        const snackbar = useSnackbar();

        return {
            updateActiveModal,
            getAuthInfo,
            fetchReferrerUserName,
            setReferrerCode,
            route,
            snackbar,
        };
    },
    async mounted() {
        if (this.route.query.hasOwnProperty("gathering")) {
            await this.getAuthInfo();
            this.updateActiveModal("PreRegisterModal");
            if (this.route.query.error) {
                this.snackbar.add({
                    type: "error",
                    text: this.route.query.error,
                });
            }
            useRouter().push({ query: { gathering: null } });
        }
        if (this.route.query.fren) {
            this.setReferrerCode(this.route.query.fren);
            await this.fetchReferrerUserName(this.route.query.fren);
            await this.getAuthInfo();
            this.updateActiveModal("PreRegisterModal");
            useRouter().push({ query: { gathering: null } });
        }
    },
};
</script>

<style lang="scss" scoped>
.home-layout {
    background: #fff;
}
</style>

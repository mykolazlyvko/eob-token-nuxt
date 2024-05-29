<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
    <Modal v-if="activeModal" />
    <NuxtSnackbar />
</template>

<script>
import Modal from "~/components/_modals/Modal.vue";
import useUIStore from "~/stores/ui";
import useUserStore from "~/stores/user";

export default {
    setup() {
        const store = useUIStore();
        const userStore = useUserStore();
        const activeModal = computed(() => store.getActiveModal);
        const userInfo = computed(() => userStore.getUserInfo);
        const { getAuthInfo, logOut } = userStore;
        return { activeModal, userInfo, getAuthInfo, logOut };
    },
    components: { Modal },
    async mounted() {
        await this.getAuthInfo();
    },
};
</script>

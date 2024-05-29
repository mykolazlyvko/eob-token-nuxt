import { defineStore } from "pinia";

const useUIStore = defineStore("ui", {
    state: () => ({
        activeModal: "",
    }),
    getters: {
        getActiveModal: (state) => state.activeModal,
    },
    actions: {
        updateActiveModal(payload) {
            this.activeModal = payload;
        },
    },
});

export default useUIStore;

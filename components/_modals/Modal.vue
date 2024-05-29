<template>
    <div tabindex="-1" class="modal" aria-modal="true" role="dialog">
        <div class="modal__inner">
            <button
                ref="close"
                class="modal__close"
                @click="
                    updateActiveModal('');
                    useRouter().push({ query: {} });
                "
            >
                <img
                    src="/assets/images/icons/close-icon.svg"
                    class="w-5 h-5"
                    alt="close"
                />
            </button>
            <component :is="activeModal" v-if="activeModal" />
        </div>
    </div>
</template>

<script>
import useUIStore from "~/stores/ui";
import PreRegisterModal from "./PreRegisterModal/PreRegisterModal.vue";
import TopLeaderBoardModal from "./TopLeaderBoardModal/TopLeaderBoardModal.vue";
export default {
    setup() {
        const store = useUIStore();
        const activeModal = computed(() => store.getActiveModal);
        const { updateActiveModal } = store;

        return { activeModal, updateActiveModal };
    },
    name: "Modal",
    components: {
        PreRegisterModal,
        TopLeaderBoardModal,
    },
};
</script>

<style lang="scss" scoped>
.modal {
    z-index: 95;
    position: fixed;
    top: 0;
    padding: 0 5px;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(#171a45, 0.05);
    backdrop-filter: blur(30px);
    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1);

    @include xs {
        padding: 0px 15px;
    }

    &__close {
        cursor: pointer;
        position: sticky;
        z-index: 96;
        top: 24px;
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding-right: 24px;
    }

    &__inner {
        position: relative;
        max-height: 95vh;
        overflow-y: auto;
        background: white;
        border-radius: 16px;
        box-shadow: 0px 2px 6px rgba(19, 52, 77, 0.15);
        @include sm {
            border-radius: 24px;
        }
    }
}
</style>

<template>
    <div
        class="pre-register-modal__code-box rounded-3xl mt-3 px-4 xs:px-7 pt-3"
    >
        <p
            class="pre-register-modal__gray-text text-center sm:text-start sm:text-lg font-bold"
        >
            {{ $t("pre-register.personal_code_description") }}
        </p>
        <div class="flex items-center mt-3 w-full">
            <p class="font-bold text-2xl xs:text-3xl sm:text-4xl title-font">
                {{ userInfo.referralCode }}
            </p>
            <p
                class="pre-register-modal__gray-title font-bold title-font text-xl xs:text-2xl uppercase ml-auto"
            >
                {{ $t("general.ranking") }}: #{{ userInfo.rank }}
            </p>
            <p
                class="pre-register-modal__gray-title font-bold title-font text-xl xs:text-2xl uppercase ml-2 md:ml-5"
            >
                BP: {{ userInfo.point }}
            </p>
        </div>
        <div class="flex-col sm:flex-row flex items-center mt-4">
            <div
                class="pre-register-modal__code-input rounded-lg px-3 py-1.5 xs:py-3 xs:px-4 w-full flex items-center justify-between"
            >
                <p class="md:text-lg pre-register-modal__gray-title">
                    {{ referralUrl }}
                </p>
                <img
                    src="/assets/images/icons/copy-icon.svg"
                    alt="copy"
                    class="cursor-pointer w-5 md:w-6 hover:opacity-50"
                    @click="copyToClipboard(referralUrl)"
                />
            </div>
        </div>
        <ShareNetwork
            v-for="network in networks"
            :key="network.network"
            class="share-button"
            :network="network.network"
            :style="{ backgroundColor: network.color }"
            :url="referralUrl"
            :description="$t('pre-register.share_title')"
            :title="$t('pre-register.share_text')"
            twitter-user="eobotech"
            hashtags="eobo"
        >
            <img
                :src="'/assets/images/icons/' + network.icon"
                class="network-icon"
            />
            <span>{{ network.name }}</span>
        </ShareNetwork>
    </div>
</template>

<script>
import useUserStore from "~/stores/user";

export default {
    setup() {
        const snackbar = useSnackbar();
        const userStore = useUserStore();
        const userInfo = computed(() => userStore.getUserInfo);
        return { snackbar, userInfo };
    },
    data() {
        return {
            referralUrl:
                useRuntimeConfig().public.BASE_APP_URL +
                "?fren=" +
                this.userInfo.referralCode,
            networks: [
                {
                    network: "twitter",
                    name: "X",
                    icon: "x-icon.svg",
                    color: "#000000",
                },
                {
                    network: "telegram",
                    name: "Telegram",
                    icon: "telegram-icon.svg",
                    color: "#53a3e4",
                },
                {
                    network: "whatsapp",
                    name: "WhatsApp",
                    icon: "whatsapp-icon.svg",
                    color: "#25d366",
                },
                {
                    network: "reddit",
                    name: "Reddit",
                    icon: "reddit-icon.svg",
                    color: "#ff4500",
                },
                {
                    network: "facebook",
                    name: "Facebook",
                    icon: "facebook-icon.svg",
                    color: "#1877f2",
                },
                //{ network: 'linkedin', name: 'LinkedIn', icon: '', color: '#007bb5' },
                //{ network: 'quora', name: 'Quora', icon: 'lab la-quora', color: '#a82400' },
                //{ network: 'line', name: 'Line', icon: 'lab la-line', color: '#00c300' },
                //{ network: 'weibo', name: 'Weibo', icon: 'lab la-weibo', color: '#e9152d' },
                //{ network: 'vk', name: 'VK', icon: 'lab la-vk', color: '#4a76a8' },
                //{ network: 'email', name: 'Email', icon: 'la la-envelope', color: '#333333' },
            ],
        };
    },
    methods: {
        async copyToClipboard(text) {
            try {
                await navigator.clipboard.writeText(text);
                this.snackbar.add({
                    type: "success",
                    text: `${this.$t(
                        "pre-register.copy_to_clipboard_success"
                    )}`,
                });
            } catch ($e) {
                this.snackbar.add({
                    type: "error",
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.pre-register-modal {
    &__gray-title {
        color: #55636a;
    }
    &__gray-text {
        color: #666;
    }
    &__code-box {
        border: 1px solid #ccc;
    }
    &__code-input {
        border: 1px solid #55636a;
    }
}

.network-icon {
    width: 16px;
    height: 16px;
    display: inline;
}

.share-button {
    display: inline-block;
    margin: 12px 3px;
    padding: 3px 6px;
    text-decoration: none;
    font-size: 13px;
    color: #fff;
    border-radius: 3px;
    span {
        font-weight: bold;
        padding: 0 8px;
    }
    &:hover {
        opacity: 0.5;
    }
}
</style>

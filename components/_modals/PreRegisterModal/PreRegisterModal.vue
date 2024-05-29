<template>
    <div class="pre-register-modal p-4 xs:p-8 lg:px-12 lg:py-9">
        <div class="flex items-center">
            <p
                class="pre-register-modal__text-blue uppercase font-semibold text-sm mr-4"
            >
                {{ $t("pre-register.step_of", { step: step }) }}
            </p>

            <div
                :class="
                    step == 1
                        ? 'pre-register-modal__current-step'
                        : 'pre-register-modal__step'
                "
                class="w-10 h-1 sm:w-16 xs:h-[6px] md:w-24 sm:h-2 rounded-lg mr-2"
            ></div>

            <div
                :class="
                    step == 2
                        ? 'pre-register-modal__current-step'
                        : 'pre-register-modal__step'
                "
                class="w-10 h-1 sm:w-16 xs:h-[6px] md:w-24 sm:h-2 rounded-lg mr-2"
            ></div>

            <div
                :class="
                    step == 3
                        ? 'pre-register-modal__current-step'
                        : 'pre-register-modal__step'
                "
                class="w-10 h-1 sm:w-16 xs:h-[6px] md:w-24 sm:h-2 rounded-lg mr-2"
            ></div>
            <div
                :class="
                    step == 4
                        ? 'pre-register-modal__current-step'
                        : 'pre-register-modal__step'
                "
                class="w-10 h-1 sm:w-16 xs:h-[6px] md:w-24 sm:h-2 rounded-lg"
            ></div>
        </div>
        <div class="flex items-center mt-5" v-if="referrerUserName">
            <img src="/assets/images/logos/logo-eobo-balloon.svg" alt="logo" />
            <p
                class="text-base sm:text-xl ml-4 mr-1"
                v-html="
                    $t('pre-register.invite_statement', {
                        referrer: referrerUserName,
                        referralCode: referralCode,
                    })
                "
            ></p>
            <div
                class="pre-register-modal__bonus-bp-rect text-sm ml-auto flex items-center justify-center h-7 w-[67.5px]"
            >
                + 50 BP
            </div>
        </div>
        <h2
            class="title-font text-xl xs:text-2xl sm:text-4xl font-bold uppercase mt-5 text-center"
        >
            <span class="pre-register-modal__gray-title">{{
                $t("pre-register.join")
            }}</span>
            {{ $t("pre-register.gathering") }}
        </h2>

        <div class="flex items-center mt-3 lg:mt-4">
            <div class="pre-register-modal__step-circle title-font">1</div>
            <p
                class="ml-1 sm:ml-4 md:ml-6 pre-register-modal__gray-text text-sm xs:text-base md:text-xl font-bold mt-1 leading-4 text-center sm:text-start sm:leading-none xs:w-[150px] sm:w-[180px] md:w-[230px]"
            >
                {{ $t("pre-register.connect_your_wallet") }}
            </p>
            <button
                class="ml-auto text-xs xs:text-sm lg:text-base pre-register-modal__link min-w-[130px] w-[130px] xs:w-[180px] md:w-[220px] uppercase text-center"
                :disabled="userInfo.publicAddress"
                v-if="userInfo.publicAddress != ''"
            >
                {{
                    userInfo.publicAddress
                        ? userInfo.publicAddress.substring(0, 6) +
                          "..." +
                          userInfo.publicAddress.substring(
                              userInfo.publicAddress.length - 4
                          )
                        : $t("pre-register.connect_wallet")
                }}
            </button>
            <button
                class="ml-auto text-xs xs:text-sm lg:text-base justify-center min-w-[130px] w-[130px] xs:w-[180px] md:w-[220px] uppercase pre-register-modal__link"
                v-else
                @click="handleConnectWallet"
                :disabled="userInfo.publicAddress != ''"
            >
                <img
                    src="/assets/images/icons/wallet.svg"
                    class="w-4 sm:w-6 mr-0.5 xs:mr-1 sm:mr-2"
                    alt="Web3"
                />
                {{ $t("pre-register.connect") }}
            </button>

            <img
                src="/assets/images/icons/check-icon.svg"
                alt="check"
                class="ml-1 sm:ml-2 md:ml-6 w-6 sm:w-8"
                :class="!userInfo.publicAddress && 'opacity-20'"
            />
        </div>
        <div class="flex items-center mt-2">
            <div class="pre-register-modal__step-circle title-font">2</div>
            <p
                class="ml-1 sm:ml-4 md:ml-6 pre-register-modal__gray-text text-sm xs:text-base md:text-xl font-bold mt-1 leading-4 text-center sm:text-start sm:leading-none xs:w-[150px] sm:w-[180px] md:w-[230px]"
            >
                {{ $t("pre-register.add_x_account") }}
            </p>
            <button
                class="text-xs xs:text-sm lg:text-base uppercase py-1 pre-register-modal__link min-w-[130px] w-[130px] xs:w-[180px] md:w-[220px] ml-auto"
                :disabled="!(step == 2 && !userInfo.xId)"
                @click="twitterOAuth"
                target="__blank"
            >
                <img
                    src="/assets/images/icons/x-icon.svg"
                    class="w-4 sm:w-5 mr-0.5 xs:mr-1 sm:mr-2"
                    alt="twitter"
                />
                {{ $t("pre-register.link") }}
            </button>
            <img
                src="/assets/images/icons/check-icon.svg"
                alt="check"
                class="ml-1 sm:ml-2 md:ml-6 w-6 sm:w-8"
                :class="!userInfo.xId && 'opacity-20'"
            />
        </div>
        <div class="flex items-center mt-2">
            <div class="pre-register-modal__step-circle title-font">3</div>
            <p
                class="ml-1 sm:ml-4 md:ml-6 pre-register-modal__gray-text text-sm xs:text-base md:text-xl font-bold mt-1 leading-4 text-center sm:text-start sm:leading-none xs:w-[150px] sm:w-[180px] md:w-[230px]"
            >
                {{ $t("pre-register.join_telegram") }}
            </p>
            <button
                class="text-xs xs:text-sm lg:text-base uppercase py-1 pre-register-modal__link min-w-[130px] w-[130px] xs:w-[180px] md:w-[220px] ml-auto"
                @click="finishRegister('telegram')"
                :disabled="!(!userInfo.joinedTG & (step == 3))"
            >
                <img
                    src="/assets/images/icons/telegram-icon.svg"
                    class="w-4 sm:w-5 mr-0.5 xs:mr-1 sm:mr-2"
                    alt="tg"
                />
                {{ $t("pre-register.join") }}
            </button>
            <img
                src="/assets/images/icons/check-icon.svg"
                alt="check"
                class="ml-1 sm:ml-2 md:ml-6 w-6 sm:w-8"
                :class="!userInfo.joinedTG && 'opacity-20'"
            />
        </div>
        <div class="flex items-center mt-2">
            <div class="pre-register-modal__step-circle title-font">4</div>
            <p
                class="ml-1 sm:ml-4 md:ml-6 pre-register-modal__gray-text text-sm xs:text-base md:text-xl font-bold mt-1 leading-4 text-center sm:text-start sm:leading-none xs:w-[150px] sm:w-[180px] md:w-[230px]"
            >
                {{ $t("pre-register.follow_x", { channel: "@eobotech" }) }}
            </p>
            <button
                class="text-xs xs:text-sm lg:text-base uppercase py-1 pre-register-modal__link min-w-[130px] w-[130px] xs:w-[180px] md:w-[220px] ml-auto"
                @click="finishRegister('x')"
                :disabled="!(!userInfo.joinedX && step == 4)"
            >
                <img
                    src="/assets/images/icons/x-icon.svg"
                    class="w-4 sm:w-5 mr-0.5 xs:mr-1 sm:mr-2"
                    alt="X"
                />
                {{ $t("pre-register.follow") }}
            </button>
            <img
                src="/assets/images/icons/check-icon.svg"
                alt="check"
                class="ml-1 sm:ml-2 md:ml-6 w-6 sm:w-8"
                :class="!userInfo.joinedX && 'opacity-20'"
            />
        </div>
        <ReferralCodeSection v-if="userInfo.point > 0" />
        <div
            v-else
            class="pre-register-modal__teaser rounded-3xl mt-3 px-4 py-2"
        >
            <p class="text-center sm:text-start font-bold">
                {{ $t("pre-register.personal_code_teaser") }}
            </p>
        </div>
        <div class="w-full flex justify-center mt-3">
            <button
                v-if="userInfo.publicAddress"
                class="mx-auto eobo-text-red border-b border-red-600 font-bold wipe"
                @click="wipeMyAccount"
            >
                {{ $t("pre-register.wipe_my_account") }}
            </button>
        </div>
    </div>
</template>

<script>
import ReferralCodeSection from "./ReferralCodeSection.vue";
import useUserStore from "~/stores/user";
import useGlobalStore from "~/stores/global";
import { useRoute } from "vue-router";
import { axiosService } from "~/services/axiosService";
import Swal from "sweetalert2";
import { mainnet, goerli } from "viem/chains";

import {
    createWeb3Modal,
    useWeb3Modal,
    defaultWagmiConfig,
} from "@web3modal/wagmi/vue";
import {
    createConfig,
    http,
    watchAccount,
    readContract,
    switchChain,
    disconnect,
    reconnect,
    getChainId,
    writeContract,
    waitForTransactionReceipt,
} from "@wagmi/core";

export default {
    setup() {
        const projectId = useRuntimeConfig().public.WAGMI_PROJECT_ID;
        const chains = [mainnet, goerli];

        const metadata = {
            name: "eobo",
            description: "Welcome to the $EOBO Crowdsale!",
            url: useRuntimeConfig().public.BASE_APP_URL,
            icons: ["https://eobo.tech/eobo-icon-200.pngs"],
        };

        const wagmiConfig = defaultWagmiConfig({
            chains,
            projectId,
            metadata,
            transports: {
                [mainnet.id]: http(
                    useRuntimeConfig().public.MAINNET_NODE_ENDPOINT
                ),
                [goerli.id]: http(
                    useRuntimeConfig().public.TESTNET_NODE_ENDPOINT
                ),
            },
        });

        createWeb3Modal({
            wagmiConfig,
            projectId,
            chains,
            defaultChain: mainnet,
        });
        const snackbar = useSnackbar();
        const modal = useWeb3Modal();
        const userStore = useUserStore();
        const globalStore = useGlobalStore();
        const userInfo = computed(() => userStore.getUserInfo);
        const referrerUserName = computed(() => userStore.getReferrerUserName);
        const referralCode = computed(() => userStore.getReferrerCode);
        const error = computed(() => userStore.getError);
        const { login, getAuthInfo, deleteUser, logOut } = userStore;
        const { fetchLastJoinedUsers } = globalStore;
        const route = useRoute();
        return {
            modal,
            snackbar,
            userInfo,
            error,
            referralCode,
            referrerUserName,
            wagmiConfig,
            route,
            login,
            getAuthInfo,
            fetchLastJoinedUsers,
            deleteUser,
            logOut,
        };
    },
    components: {
        ReferralCodeSection,
    },
    data() {
        return {
            step: 1,
            referrerCode: "",
            isConnecting: false,
        };
    },
    watch: {
        userInfo(info) {
            if (!info.address) {
                this.step = 2;
            }
        },
    },
    methods: {
        async wipeMyAccount() {
            Swal.fire({
                title: `${this.$t("general.are_you_sure")}`,
                text: `${this.$t("pre-register.wipe_account_description")}`,
                imageUrl:
                    useRuntimeConfig().public.BASE_APP_URL +
                    "assets/images/homepage/eobo-bird.svg",
                imageHeight: 120,
                showCancelButton: true,
                confirmButtonColor: "#47c2ff",
                cancelButtonColor: "#ff002e",
                confirmButtonText: `${this.$t("pre-register.confirm_delete")}`,
                cancelButtonText: `${this.$t("general.cancel")}`,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await this.deleteUser();
                    this.logOut();
                    if (this.error)
                        this.snackbar.add({
                            type: "error",
                            text: this.error,
                        });
                }
            });
        },
        async finishRegister(value) {
            if (value == "telegram") {
                await axiosService.post(
                    useRuntimeConfig().public.BASE_API_URL +
                        "auth/updateJoinSocial",
                    { social: "telegram" }
                );
                await this.getAuthInfo();
                const link = "https://t.me/eobotech";
                const a = document.createElement("a");
                a.setAttribute("href", link);
                a.setAttribute("target", "_blank");
                a.click();
                this.step = 4;
                return;
            } else {
                const link = "https://x.com/eobotech";
                const a = document.createElement("a");
                a.setAttribute("href", link);
                a.setAttribute("target", "_blank");
                a.click();
            }

            if (this.userInfo.joinedTG && this.step == 4) {
                try {
                    const result = await axiosService.get(
                        useRuntimeConfig().public.BASE_API_URL +
                            "auth/finishRegister"
                    );

                    if (result.data == "success") {
                        await this.getAuthInfo();
                        await this.fetchLastJoinedUsers();
                    } else {
                        this.snackbar.add({
                            type: "error",
                            text: result.data,
                        });
                    }
                } catch (e) {
                    this.snackbar.add({
                        type: "error",
                        text: e,
                    });
                }
            }
        },
        async handleConnectWallet() {
            this.isConnecting = true;
            this.modal.open();
        },
        async loginWithWallet() {
            this.isConnecting = false;
            const chainId = getChainId(this.wagmiConfig);
            await switchChain(this.wagmiConfig, {
                chainId: Number(useRuntimeConfig().public.CROWDSALE_NETWORK_ID),
            });

            // if (chainId != 1) await switchChain({ chainId: 1 });

            await this.login(this.referrerCode);
            if (!this.error && this.userInfo.publicAddress) {
                this.step = 2;

                if (this.userInfo.xId) this.step = 3;

                if (this.userInfo.point > 0 || this.userInfo.joinedTG)
                    this.step = 4;

                this.snackbar.add({
                    type: "success",
                    text: `${this.$t("pre-register.login_success")}`,
                });
            } else
                this.snackbar.add({
                    type: "error",
                    text: this.error,
                });
        },
        twitterOAuth() {
            window.location.href = `${
                useRuntimeConfig().public.BASE_API_URL
            }auth/twitter?token=${localStorage.getItem("EOBO_TOKEN")}`;
        },
        discordOAuth() {
            window.location.href = `${
                useRuntimeConfig().public.BASE_API_URL
            }auth/discord?token=${localStorage.getItem("EOBO_TOKEN")}`;
        },
    },
    async mounted() {
        if (this.userInfo.publicAddress) this.step = 2;

        if (this.userInfo.xId) this.step = 3;

        if (this.userInfo.point > 0 || this.userInfo.joinedTG) this.step = 4;

        this.referrerCode = this.route.query.fren;
    },
};
</script>
<style lang="scss" scoped>
.pre-register-modal {
    &__link {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 32px;
        font-weight: 800;
        background-color: #ff002e;
        color: #fff;
        padding: 8px 0px;
        @include sm {
            padding: 10px 0px;
        }
        @include md {
            padding: 12px 0px;
        }
        &:hover {
            opacity: 0.7;
        }
        &:disabled {
            opacity: 0.3;
            cursor: not-allowed;
        }
        img {
            margin-right: 6px;
        }
    }
    &__text-blue {
        color: #399bcc;
    }
    &__bonus-bp-rect {
        background-color: #e3f6ff;
        border-radius: 5px;
        color: #194459;
        font-weight: 700;
    }
    &__current-step {
        background-color: #399bcc;
    }
    &__step {
        background-color: #e3f6ff;
    }
    &__gray-title {
        color: #55636a;
    }
    &__gray-text {
        color: #666;
        text-align: left;
        font-size: 12px;
        @include sm {
            font-size: 16px;
        }
    }
    &__step-circle {
        background-color: #f6f6f6;
        border-radius: 100%;
        width: 30px;
        height: 30px;
        min-width: 30px;
        min-height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
        @include sm {
            font-size: 16px;
            width: 40px;
            height: 40px;
        }
    }
    &__teaser {
        color: #47c2ff;
        border: 1px solid #55636a;
    }
}

.wipe {
    text-transform: uppercase;
    font-size: 10px;
}
</style>

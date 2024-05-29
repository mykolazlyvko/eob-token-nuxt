import { defineStore } from "pinia";
import { axiosService } from "~/services/axiosService";
import { getAccount, signMessage } from "@wagmi/core";

const useUserStore = defineStore("user", {
    state: () => ({
        userInfo: {
            publicAddress: "",
        },
        error: "",
        referrerUserName: "",
        referrerCode: "",
        leaderboardInfo: [],
    }),
    getters: {
        getUserInfo: (state) => state.userInfo,
        getError: (state) => state.error,
        getReferrerUserName: (state) => state.referrerUserName,
        getReferrerCode: (state) => state.referrerCode,
        getLeaderBoardInfo: (state) => state.leaderboardInfo,
    },
    actions: {
        async deleteUser() {
            try {
                await axiosService.get(
                    useRuntimeConfig().public.BASE_API_URL + "auth/deleteUser"
                );
            } catch (e) {
                this.error = e.message;
            }
        },
        logOut() {
            if (
                this.userInfo.publicAddress &&
                localStorage.getItem("EOBO_TOKEN")
            ) {
                localStorage.removeItem("EOBO_TOKEN");
                this.userInfo = { publicAddress: "" };
                window.location.reload();
            }
        },
        async fetchTopLeaderBoard() {
            const result = await this.fetchLeaderBoardInfo(1);
            this.leaderboardInfo = result;
        },
        async fetchLeaderBoardInfo(page) {
            try {
                const result = await axiosService.get(
                    useRuntimeConfig().public.BASE_API_URL +
                        "auth/getLeaderBoardInfo?limit=10&page=" +
                        page
                );
                return result.data;
            } catch (e) {
                this.error = e.message;
            }
        },
        async fetchTotals() {
            try {
                const result = await axiosService.get(
                    useRuntimeConfig().public.BASE_API_URL + "auth/getTotals"
                );
                return result.data;
            } catch (e) {
                this.error = e.message;
            }
        },
        setReferrerCode(value) {
            this.referrerCode = value;
        },
        async fetchReferrerUserName(value) {
            try {
                const result = await axiosService.post(
                    useRuntimeConfig().public.BASE_API_URL +
                        "auth/getReferrerInfo",
                    { referrerCode: value }
                );
                this.referrerUserName = result.data;
            } catch (e) {
                this.error = e.message;
            }
        },
        async getAuthInfo() {
            try {
                if (localStorage.getItem("EOBO_TOKEN")) {
                    const result = await axiosService.get(
                        useRuntimeConfig().public.BASE_API_URL +
                            "auth/getAuthInfo"
                    );

                    if (result.data) {
                        const account = getAccount();
                        if (account.address == result.data.publicAddress) {
                            this.userInfo = result.data;
                            this.referrerCode = this.userInfo.referrerCode;
                            this.referrerUserName = this.userInfo.referrer;
                        } else localStorage.removeItem("EOBO_TOKEN");
                    }
                }
            } catch (e) {
                this.error = e.message;
            }
        },
        setUserInfo(payload) {
            this.userInfo = payload;
        },
        async login(referrerCode, account, wagmiConfig) {
            try {
                this.error = "";
                if (account.address) {
                    const result = await axiosService.post(
                        useRuntimeConfig().public.BASE_API_URL + "auth/signUp",
                        {
                            publicAddress: account.address,
                            referrerCode: referrerCode,
                        }
                    );
                    const signature = await signMessage(wagmiConfig, {
                        message:
                            "Welcome to eobo!!! You are signing with nonce: " +
                            result?.data?.nonce,
                    });
                    const loginResponse = await axiosService.post(
                        useRuntimeConfig().public.BASE_API_URL +
                            "auth/loginWithSignature",
                        {
                            publicAddress: account.address,
                            signature: signature,
                        }
                    );

                    this.userInfo = loginResponse.data.user;
                    this.referrerCode = this.userInfo.referrerCode;
                    this.referrerUserName = this.userInfo.referrer;
                    localStorage.setItem(
                        "EOBO_TOKEN",
                        loginResponse.data.token
                    );
                } else this.error = "No wallet";
            } catch (e) {
                console.log(e.code);
                if (e.code == "ERR_BAD_RESPONSE")
                    this.error = e.response.data.message;
                else this.error = e;
            }
        },
    },
});

export default useUserStore;

export default defineNuxtConfig({
    modules: ["@nuxtjs/i18n", "@pinia/nuxt", "nuxt-snackbar", "dayjs-nuxt"],
    snackbar: {
        top: true,
        right: true,
        duration: 5000,
    },
    ssr: false,
    runtimeConfig: {
        public: {
            BASE_API_URL: process.env.BASE_API_URL,
            BASE_APP_URL: process.env.BASE_APP_URL,
            CROWDSALE_STEPS: {
              CONNECT_WALLET: 0,
              SELECT_CURRENCY: 1,
              BUY_TOKEN: 2,
              BOUGHT_TOKEN: 3
            },
            CROWDSALE_CURRENCIES: {
              ETH: 0,
              USDC: 1,
              USDT: 2,
              DAI: 3
            },
            CROWDSALE_MIN_AMOUNT: 1000,
            CROWDSALE_MAX_AMOUNT: 10000000,
            CROWDSALE_NETWORK_ID: process.env.CROWDSALE_NETWORK_ID,
            CROWDSALE_TIER: process.env.CROWDSALE_TIER,
            CROWDSALE_CONTRACT_ADDRESS: process.env.CROWDSALE_CONTRACT_ADDRESS,
            USDT_CONTRACT_ADDRESS: process.env.USDT_CONTRACT_ADDRESS,
            USDC_CONTRACT_ADDRESS: process.env.USDC_CONTRACT_ADDRESS,
            DAI_CONTRACT_ADDRESS: process.env.DAI_CONTRACT_ADDRESS,
            ETHERSCAN_BASE_URL: process.env.ETHERSCAN_BASE_URL,
            WAGMI_PROJECT_ID: process.env.WAGMI_PROJECT_ID,
            TESTNET_NODE_ENDPOINT: process.env.TESTNET_NODE_ENDPOINT,
            MAINNET_NODE_ENDPOINT: process.env.MAINNET_NODE_ENDPOINT
        },
    },
    i18n: {
        vueI18n: "./i18n.config.ts", // if you are using custom path, default
        locales: ["en", "zh", "ja", "ko", "id", "es"], // used in URL path prefix
        defaultLocale: "en", // default locale of your project for Nuxt pages and routings
    },
    devtools: { enabled: true },
    app: {
        head: {
            title: "eobo 🎈 HUMANIZING DEFI",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    hid: "description",
                    name: "description",
                    content: "Swap, earn, and share your favorite projects.",
                },
                {
                    hid: "og:site_name",
                    property: "og:site_name",
                    content: "Swap, earn, and share your favorite projects.",
                },
                { hid: "og:type", property: "og:type", content: "website" },
                {
                    hid: "og:title",
                    property: "og:title",
                    content: "eobo 🎈",
                },
                {
                    hid: "og:description",
                    property: "og:description",
                    content: "Swap, earn, and share your favorite projects.",
                },
                {
                    hid: "og:image",
                    property: "og:image",
                    content: "/eobo-share.png",
                },
                {
                    hid: "og:image:secure_url",
                    property: "og:image:secure_url",
                    content: "/eobo-share.png",
                },
                {
                    hid: "og:image:alt",
                    property: "og:image:alt",
                    content: "Eobo",
                },
                {
                    name: "theme-color",
                    content: "#ffffff",
                },
            ],
            link: [
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com" },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Antonio:wght@100;200;300;400;500;600;700&family=Bebas+Neue&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap",
                },
            ],
        },
    },
    css: ["~/assets/style/main.scss"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "@/assets/style/media-queries.scss"; @import "@/assets/style/settings/_setting.global.scss";`,
                },
            },
        },
    },
});

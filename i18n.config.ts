import en from "./locales/en.json";
import zh from "./locales/zh.json";
import ja from "./locales/ja.json";
import ko from "./locales/ko.json";
import id from "./locales/id.json";
import vn from "./locales/vn.json";
import es from "./locales/es.json";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: "en",
    warnHtmlMessage: false,
    messages: {
        en,
        zh,
        ja,
        ko,
        id,
        vn,
        es
    },
}));

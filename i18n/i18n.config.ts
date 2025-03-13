import en from "./en";
import fr from "./fr";

export default defineI18nConfig(() => ({
    lazy:false,
    legacy: true,
    messages: {
        en,
        fr
    }
}));

import {
    getLocaleFromNavigator,
    init,
    register,
    locale as $locale
} from "svelte-i18n";

import {setCookie, getCookie} from "./modules/cookie";

const INIT_OPTIONS = {
    fallbackLocale: 'fr',
    initialLocale: null,
    loadingDelay: 200,
    formats: {},
    warnOnMissingMessages: true
}

let currentLocale = null

register('fr', () => import('../i18n/languages/fr.json'))

$locale.subscribe((value) => {
    if (value === null){
        return
    }

    if(typeof window !== 'undefined'){
        setCookie('locale', value)
    }
})

export function startClient() {
    init({
        ...INIT_OPTIONS,
        initialLocale: getLocaleFromNavigator()
    })
}

const DOCUMENT_REGEX = /(^([^.?#@]+)?([?#](.+)?)?|service-worker.*?\.html)$/;

export function i18nMiddleware() {
    // initialLocale will be set by the middleware
    init(INIT_OPTIONS);

    return (req, res, next) => {
        const isDocument = DOCUMENT_REGEX.test(req.originalUrl);
        // get the initial locale only for a document request
        if (!isDocument) {
            next();
            return;
        }

        let locale = getCookie('locale', req.headers.cookie);

        // no cookie, let's get the first accepted language
        if (locale == null) {
            if (req.headers['accept-language']) {
                const headerLang = req.headers['accept-language'].split(',')[0].trim();
                if (headerLang.length > 1) {
                    locale = headerLang;
                }
            } else {
                locale = INIT_OPTIONS.initialLocale || INIT_OPTIONS.fallbackLocale;
            }
        }

        if (locale != null && locale !== currentLocale) {
            $locale.set(locale);
        }

        next();
    };
}
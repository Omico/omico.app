import {defineConfig} from "vitepress"

// https://vitepress.dev/reference/site-config
// noinspection JSUnusedGlobalSymbols
export default defineConfig(
    {
        lang: "en",
        title: "Omico Apps",
        srcDir: "src",
        lastUpdated: true,
        cleanUrls: true,
        locales: {
            root: {
                label: "English",
                lang: "en",
            },
            "zh-CN": {
                label: "简体中文",
                lang: "zh-CN",
            },
        },
        sitemap: {
            hostname: "https://omico.app",
        },
    }
)

import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/nasobilka/",
    plugins: [
        vue(),
        vueJsx(),
        VitePWA({
            registerType: "autoUpdate",
            injectRegister: "auto",
            workbox: {
                globPatterns: ["**/*.{js,ts,css,html,ico,png,svg}"],
                cleanupOutdatedCaches: false,
            },
            manifest: {
                id: "/",
                name: "Procvičování",
                short_name: "Procvičování",
                description: "appka na procvičování",
                display: "standalone",
                icons: [
                    {
                        src: "img/icons/android-chrome-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                        purpose: "any",
                    },
                    {
                        src: "img/icons/android-chrome-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any",
                    },
                    {
                        src: "img/icons/apple-touch-icon.png",
                        sizes: "180x180",
                        type: "image/png",
                        purpose: "apple touch icon",
                    },
                    {
                        src: "img/icons/mstile-150x150.png",
                        sizes: "270x270",
                        type: "image/png",
                        purpose: "maskable",
                    },
                ],
                theme_color: "#1313B9",
                background_color: "#1313B9",
                scope: "/",
                start_url: "/",
                orientation: "portrait",
            },
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});

import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { vueI18n } from "@intlify/vite-plugin-vue-i18n";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      // you need to set i18n resource including paths !
      include: path.resolve(__dirname, "./src/locales/**"),
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/shared.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

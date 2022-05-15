import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";

import typewriterDirective from "@/directives/typewriter";

const app = createApp(App);

import enMessages from "@/locales/en-US.json";
import ruMessages from "@/locales/ru.json";

const i18n = createI18n({
  locale: navigator.language,
  legacy: false,
  fallbackLocale: "en-US",
  messages: {
    "en-US": enMessages,
    ru: ruMessages,
  },
});

app.use(createPinia());
app.use(router);
app.use(i18n);
app.directive("typewriter", typewriterDirective);

app.mount("#app");

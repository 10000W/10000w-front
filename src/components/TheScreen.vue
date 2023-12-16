<script lang="ts" setup>
import TheConsole from "@/components/TheConsole.vue";
import UiButton from "@/components/ui/UiButton.vue";
import { useI18n } from "vue-i18n";

import { computed } from "vue";
import { useRoute } from "vue-router";
import { useThemeStore } from "@/stores/theme";

const i18n = useI18n();
const { t } = i18n;
const themeStore = useThemeStore();
const isBackVisible = computed(() => {
  return useRoute().name !== "index";
});
const toggleLang = () => {
  const length = i18n.availableLocales.length;
  let idx = i18n.availableLocales.indexOf(i18n.locale.value, 0);

  if (idx >= length - 1) {
    idx = 0;
  } else {
    idx++;
  }
  i18n.locale.value = i18n.availableLocales[idx];
  localStorage.setItem("lang", i18n.locale.value);
};
</script>

<template>
  <div :class="$style.TheScreen">
    <div :class="$style.box">
      <div :class="$style.content">
        <slot></slot>
      </div>
      <footer :class="$style.bottom">
        <TheConsole />

        <div :class="$style.btns">
          <UiButton
            v-if="isBackVisible"
            to="/"
            :class="$style.btn"
            size="small"
          >
            {{ t("back") }}
          </UiButton>

          <UiButton :class="$style.btn" size="small" @click="toggleLang">
            {{ t("language") }}
          </UiButton>

          <UiButton
            :class="$style.btn"
            size="small"
            @click="themeStore.changeTheme"
          >
            {{ themeStore.getThemeName() }}
          </UiButton>
        </div>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" module>
.TheScreen {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.box {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 102.4rem;
  height: 100%;
  max-height: 72rem;
  padding: 2rem;
  background-color: var(--background);

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 0),
      linear-gradient(
        90deg,
        rgba(255, 0, 0, 0.06),
        rgba(0, 255, 0, 0.02),
        rgba(0, 0, 255, 0.06)
      );
    background-size: 100% 0.2rem, 0.3rem 100%;
    pointer-events: none;
  }

  @include mq(sm) {
    width: 100%;
    height: 100%;
    max-height: none;
  }
}

.content {
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--primary-active) transparent;
}

.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 2rem;

  @include mq(sm) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
}

.btns {
  display: flex;
  align-self: flex-end;
  flex-shrink: 0;

  @include mq(sm) {
    margin-top: 2rem;
  }
}

.btn {
  flex-shrink: 0;
  margin-left: 2rem;

  @include mq(sm) {
    margin-left: 1rem;
  }

  &:first-child {
    margin-left: 0;
  }
}

@keyframes flicker {
  0% {
    opacity: 0.27861;
  }
  5% {
    opacity: 0.34769;
  }
  10% {
    opacity: 0.23604;
  }
  15% {
    opacity: 0.90626;
  }
  20% {
    opacity: 0.18128;
  }
  25% {
    opacity: 0.83891;
  }
  30% {
    opacity: 0.65583;
  }
  35% {
    opacity: 0.67807;
  }
  40% {
    opacity: 0.26559;
  }
  45% {
    opacity: 0.84693;
  }
  50% {
    opacity: 0.96019;
  }
  55% {
    opacity: 0.08594;
  }
  60% {
    opacity: 0.20313;
  }
  65% {
    opacity: 0.71988;
  }
  70% {
    opacity: 0.53455;
  }
  75% {
    opacity: 0.37288;
  }
  80% {
    opacity: 0.71428;
  }
  85% {
    opacity: 0.70419;
  }
  90% {
    opacity: 0.7003;
  }
  95% {
    opacity: 0.36108;
  }
  to {
    opacity: 0.24387;
  }
}
</style>

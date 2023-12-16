<script setup lang="ts">
import { computed } from "vue";
import { RouterView } from "vue-router";
import { useThemeStore } from "@/stores/theme";

import TheScreen from "@/components/TheScreen.vue";

const themeStore = useThemeStore();
const themeClass = computed(() => {
  return `theme--${themeStore.getThemeValue()}`;
});
</script>

<template>
  <main :class="themeClass">
    <TheScreen>
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </TheScreen>
  </main>
</template>

<style lang="scss">
@import "src/assets/scss/main";

main {
  height: 100svh;
}
</style>

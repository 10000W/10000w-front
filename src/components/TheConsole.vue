<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const i18n = useI18n();
const { t } = i18n;
const pathName = computed(() => {
  if (!useRoute().name) {
    return "";
  }

  if (useRoute().name === "index") {
    return t("home");
  }

  if (useRoute().name === "not-found") {
    return t("error");
  }

  return t(String(useRoute().name));
});
</script>

<template>
  <div :class="$style.TheConsole">
    <p
      :key="`${i18n.locale.value}-${$route.name}`"
      v-typewriter="pathName"
      :class="$style.text"
    >
      {{ pathName }}
    </p>
  </div>
</template>

<style lang="scss" module>
.TheConsole {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  min-height: 2rem;
}

.text {
  display: flex;
  align-items: center;
  margin-right: 2rem;
  font-size: 2rem;
  margin-bottom: 0;

  &:before {
    content: ">";
    margin-right: 1rem;
  }

  &:after {
    content: "_";
    animation: blink 1s steps(2, jump-none) infinite;
  }
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>

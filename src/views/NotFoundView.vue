<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <section :class="$style.NotFound">
    <div>
      <h1 v-typewriter.caret="t('not-found.title')" class="h1">
        {{ t("not-found.title") }}
      </h1>
      <h2
        v-typewriter.keep-height="t('not-found.subtitle')"
        :key="t('not-found.subtitle')"
        class="h2"
      >
        {{ t("not-found.subtitle") }}
      </h2>
    </div>
  </section>
</template>

<style lang="scss" module>
.NotFound {
}
</style>

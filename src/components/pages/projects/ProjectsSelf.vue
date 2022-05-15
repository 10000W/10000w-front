<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<template>
  <div :class="$style.ProjectsSelf">
    <p>{{ t("project.self.title") }}</p>
    <i18n-t tag="p" :class="$style.last" keypath="project.self.text">
      <a
        href="https://github.com/10000W/10000w-front"
        target="_blank"
        class="link"
        >GitHub</a
      >
    </i18n-t>
  </div>
</template>
<style lang="scss" module>
.ProjectsSelf {
  padding: 2rem;
  border: 2px solid var(--secondary);
}
</style>

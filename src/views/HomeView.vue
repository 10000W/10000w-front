<script lang="ts" setup>
import UiButton from "@/components/ui/UiButton.vue";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t } = useI18n();
const links = computed(() => {
  return [
    {
      name: t("skills"),
      to: "/skills",
    },
    {
      name: t("projects"),
      to: "/projects",
    },
    {
      name: t("contacts"),
      to: "/contacts",
    },
  ];
});
</script>

<template>
  <section :class="$style.MainPage">
    <div>
      <h1 :key="t('title')" v-typewriter.caret="t('title')" class="h1">
        {{ t("title") }}
      </h1>

      <h2
        v-typewriter.keep-height="t('subtitle')"
        :key="t('subtitle')"
        :class="$style.h2"
        class="h2"
      >
        {{ t("subtitle") }}
      </h2>
    </div>

    <nav :class="$style.nav">
      <UiButton
        v-for="link in links"
        :key="link.to"
        :class="$style.btn"
        :to="link.to"
        size="large"
      >
        {{ link.name }}
      </UiButton>
    </nav>
  </section>
</template>

<style lang="scss" module>
.MainPage {
  position: relative;
}

.nav {
  display: flex;

  @include mq(sm) {
    display: block;
    margin: auto;
  }
}

.btn {
  margin-right: 2rem;

  @include mq(sm) {
    display: block;
    margin-right: 0;
    margin-bottom: 2rem;
  }
}

.h2 {
  @include mq(sm) {
    height: 4.2rem;
  }
}
</style>

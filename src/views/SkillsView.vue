<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n();
const { t } = i18n;

const items = computed(() => {
  return [
    {
      heading: t("skills.0.heading"),
      text: t("skills.0.text"),
    },
    {
      heading: t("skills.1.heading"),
      text: t("skills.1.text"),
    },
    {
      heading: t("skills.2.heading"),
      text: t("skills.2.text"),
    },
    {
      heading: t("skills.3.heading"),
      text: t("skills.3.text"),
    },
    {
      heading: t("skills.4.heading"),
      text: t("skills.4.text"),
    },
  ];
});
</script>
<template>
  <section :class="$style.SkillsPage">
    <h1 :key="i18n.locale.value" v-typewriter="t('skills.title')" class="h1">
      t('skills.title')
    </h1>
    <ul :key="i18n.locale.value">
      <li v-for="(item, index) in items" :key="index" :class="$style.item">
        <h2 v-typewriter="item.heading" :class="$style.itemHeading">
          {{ item.heading }}
        </h2>
        <p>
          {{ item.text }}
        </p>
      </li>
    </ul>
  </section>
</template>
<style lang="scss" module>
.SkillsPage {
  //
}

.heading {
  margin-bottom: 2rem;
}

.item {
  margin-bottom: 1.6rem;
}

.itemHeading {
  font-size: 2.8rem;
  margin-bottom: 1.6rem;

  @include mq(sm) {
    font-size: 1.6rem;
  }
}
</style>

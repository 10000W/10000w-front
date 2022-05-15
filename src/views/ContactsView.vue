<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const links = computed(() => {
  return [
    {
      href: "https://t.me/ananimas/",
      name: t("contacts.telegram"),
    },
    {
      href: "mailto:dankwas1337@gmail.com",
      name: t("contacts.email"),
    },
    {
      href: "https://career.habr.com/10-000w",
      name: t("contacts.habr"),
      target: "_blank",
    },
    {
      href: "https://hh.ru/resume/3c839f85ff028f8d8a0039ed1f697a6e394732",
      name: t("contacts.hh"),
      target: "_blank",
    },
  ];
});
</script>
<template>
  <section :class="$style.ContactsPage">
    <h1
      :key="t('contacts.title')"
      v-typewriter="t('contacts.title')"
      class="h1"
    >
      {{ t("contacts.title") }}
    </h1>

    <address :class="$style.links">
      <a
        v-for="(link, index) in links"
        :key="index"
        :class="$style.link"
        class="link"
        :href="link.href"
        :target="link.target"
      >
        {{ link.name }}
      </a>
    </address>
  </section>
</template>
<style lang="scss" module>
.ContactsPage {
  //
}

.links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.link {
  display: flex;
  margin-bottom: 1.6rem;
  font-size: 2.2rem;
}
</style>

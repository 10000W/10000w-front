<script lang="ts" setup>
import { ref, watch } from "vue";

import ProjectList from "@/components/pages/projects/ProjectList.vue";
import ProjectsSelf from "@/components/pages/projects/ProjectsSelf.vue";
import { useI18n } from "vue-i18n";

const projects = ref([]);

const i18n = useI18n();
const locale = i18n.locale;
const { t } = i18n;
const fetchProjects = async () => {
  try {
    projects.value = await fetch(`projects-${locale.value || "en"}.json`).then(
      (res) => res.json()
    );
  } catch (e) {
    console.warn(e);
  }
};
fetchProjects();

watch(locale, fetchProjects);
</script>
<template>
  <div :class="$style.ProjectsPage">
    <h1 :key="i18n.locale.value" v-typewriter="t('projects.title')" class="h1">
      t('projects.title')
    </h1>

    <ProjectsSelf :class="$style.self" />

    <ProjectList :projects="projects" />
  </div>
</template>
<style lang="scss" module>
.ProjectsPage {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.self {
  margin-bottom: 2.8rem;
}
</style>

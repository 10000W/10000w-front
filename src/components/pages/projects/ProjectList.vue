<script lang="ts" setup>
import type { TProject } from "@/types/project";
import type { PropType } from "vue";
import { defineProps } from "vue";

import ProjectItem from "@/components/pages/projects/ProjectItem.vue";

defineProps({
  projects: {
    type: Array as PropType<TProject[]>,
    default: () => [],
  },
});
</script>
<template>
  <div :class="$style.ProjectList">
    <ProjectItem
      v-for="project in projects"
      :key="project.id"
      :class="$style.item"
      :project="project"
    />
  </div>
</template>
<style lang="scss" module>
.ProjectList {
  //
}

.item {
  border-bottom: 2px dashed var(--text);
  padding-bottom: 2rem;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
}
</style>

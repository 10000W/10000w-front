<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import type { TProject } from "@/types/project";

const { t } = useI18n();
defineProps<{
  project: TProject;
}>();
</script>
<template>
  <article :class="$style.ProjectItem">
    <figure
      v-if="project.icon"
      :class="$style.image"
      v-html="project.icon"
    ></figure>
    <figure v-else :class="$style.image">
      <svg viewBox="0 0 200 68" xmlns="http://www.w3.org/2000/svg">
        <path d="M44 17H76V68H44V17Z" fill="currentColor" />
        <path d="M83 17H156V68H83V17Z" fill="currentColor" />
        <path d="M44 0H156V11H44V0Z" fill="currentColor" />
      </svg>
    </figure>
    <div :class="$style.content">
      <h2 class="h2">
        {{ project.name }}
      </h2>

      <p v-html="project.description"></p>

      <a
        v-if="project.feature"
        :class="$style.feature"
        class="link"
        :href="project.feature.link"
        target="_blank"
      >
        {{ project.feature.name }}
      </a>

      <div :class="$style.bottom">
        <a :href="project.link" class="link" target="_blank">
          {{ t("project.visit") }}
        </a>

        <a
          v-if="project.team"
          :class="$style.team"
          class="link"
          :href="project.team.link"
          target="_blank"
        >
          {{ project.team.name }}
        </a>
      </div>
    </div>
  </article>
</template>
<style lang="scss" module>
.ProjectItem {
  display: flex;

  @include mq(sm) {
    display: block;
  }
}

.image {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-basis: 16rem;
  height: 8rem;
  width: 16rem;
  padding: 1rem 2rem;
  margin: 0 1.2rem 0 0;
  color: var(--primary);

  svg {
    flex-basis: 100%;
  }

  @include mq(sm) {
    width: 16rem;
    height: 10rem;
    margin: auto auto 1rem;
  }
}

.feature {
  display: block;
  color: var(--secondary);
  margin-bottom: 1rem;
}

.content {
  width: 100%;
  flex-shrink: 1;
}

.bottom {
  display: flex;
  justify-content: space-between;

  @include mq(sm) {
    display: block;
  }
}

.team {
  display: block;
  flex-shrink: 1;

  @include mq(sm) {
    margin-top: 1rem;
  }
}
</style>

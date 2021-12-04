<template>
    <div :class="$style.ProjectsPage">
        <h1 v-typewriter="'Над чем я работал'"
            class="h1">
            Над чем я работал
        </h1>

        <ProjectsSelf :class="$style.self" />

        <ProjectList :projects="projects" />
    </div>
</template>
<script>
    import ProjectList from '~/components/pages/projects/ProjectList';
    import ProjectsSelf from '~/components/pages/projects/ProjectsSelf';

    export default {
        name: 'ProjectsPage',

        components: {
            ProjectList,
            ProjectsSelf,
        },

        data() {
            return {
                projects: [],
            };
        },

        async fetch() {
            this.projects = await this.$axios.$get('projects.json');
        },
    };
</script>
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

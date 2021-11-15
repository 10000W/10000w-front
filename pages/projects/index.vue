<template>
    <div :class="$style.ProjectsPage">
        <h1 v-typewriter="'Над чем я работал'"
            class="h1">
            Над чем я работал
        </h1>

        <ProjectList :projects="projects" />
    </div>
</template>
<script>
    import ProjectList from '~/components/pages/projects/ProjectList';
    export default {
        name: 'ProjectsPage',

        components: {
            ProjectList,
        },

        data() {
            return {
                projects: [],
            };
        },

        async fetch() {
            this.projects = await this.$axios.$get('https://front.cat/projects.json');
        },
    };
</script>
<style lang="scss" module>
.ProjectsPage {
    //
}
</style>

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
<script>
    import ProjectItem from '~/components/pages/projects/ProjectItem';
    export default {
        name: 'ProjectList',

        components: {
            ProjectItem,
        },

        props: {
            projects: {
                type: Array,
                default: () => [],
            },
        },
    };
</script>
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

<template>
    <div :class="$style.ProjectsSelf">
        <p>
            Есть желание почитать мой код?
        </p>
        <p :class="$style.last">
            Постетите страницу репозитория фронтенда этого сайта на
            <a href="https://github.com/10000W/10000w-front"
               target="_blank"
               class="link">GitHub</a>.
        </p>
    </div>
</template>
<script>
    export default {
        name: 'ProjectsSelf',
    };
</script>
<style lang="scss" module>
.ProjectsSelf {
    padding: 2rem;
    border: 2px solid var(--secondary);
}
</style>

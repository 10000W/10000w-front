<template>
    <div :class="$style.TheConsole">
        <p :key="$route.name"
           v-typewriter="pathName"
           :class="$style.text">
            {{ pathName }}
        </p>
    </div>
</template>
<script>
    export default {
        name: 'TheConsole',

        computed: {
            pathName() {
                switch (this.$route.name) {
                    case 'projects':
                        return 'Проекты';
                    case 'contacts':
                        return 'Контакты';
                    case 'games':
                        return 'Игры';
                    case 'skills':
                        return 'Навыки';
                    default:
                        return 'Главная';
                }
            },
        },
    };
</script>
<style lang="scss" module>
.TheConsole {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    min-height: 2rem;
}

.text {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    font-size: 2rem;
    margin-bottom: 0;

    &:before {
        content: ">";
        margin-right: 1rem;
    }

    &:after {
        content: "_";
        animation: blink 1s steps(2, start) infinite
    }
}

@keyframes blink {
    to {
        visibility: hidden
    }
}
</style>

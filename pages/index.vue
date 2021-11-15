<template>
    <section :class="$style.MainPage">
        <hgroup>
            <h1 v-typewriter.caret="'10000W\'s Lair'"
                class="h1">
                10'000W's Lair
            </h1>

            <h2 v-typewriter.keep-height="'Портфолио Frontend разработчика'"
                :class="$style.h2"
                class="h2">
                Портфоолио Front-end разработчика
            </h2>
        </hgroup>

        <nav :class="$style.nav">
            <UiButton v-for="link in links"
                      :key="link.to"
                      :class="$style.btn"
                      :to="link.to"
                      size="large">
                {{ link.name }}
            </UiButton>
        </nav>
    </section>
</template>

<script>
    import UiButton from '~/components/ui/UiButton';
    export default {
        name: 'IndexPage',

        components: {
            UiButton,
        },

        data() {
            return {
                links: [
                    {
                        name: 'Навыки',
                        to: '/skills',
                    },
                    {
                        name: 'Проекты',
                        to: '/projects',
                    },
                    {
                        name: 'Контакты',
                        to: '/contacts',
                    },
                ],
            };
        },
    };
</script>

<style lang="scss" module>
.MainPage {
    position: relative;
}

.nav {
    display: flex;

    @include mq(sm) {
        display: block;
        margin: auto;
    }
}

.btn {
    margin-right: 2rem;

    @include mq(sm) {
        display: block;
        margin-right: 0;
        margin-bottom: 2rem;
    }
}

.h2 {
    @include mq(sm) {
        height: 4.2rem;
    }
}
</style>

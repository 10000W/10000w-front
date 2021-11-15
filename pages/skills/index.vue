<template>
    <section :class="$style.SkillsPage">
        <h1 v-typewriter="'Что я умею'"
            class="h1">
            Что я умею
        </h1>
        <ul>
            <li v-for="(item, index) in items"
                :key="index"
                :class="$style.item">
                <h2 v-typewriter="item.heading"
                    :class="$style.itemHeading">
                    {{ item.heading }}
                </h2>
                <p>
                    {{ item.text }}
                </p>
            </li>
        </ul>
    </section>
</template>
<script>
    export default {
        name: 'SkillsPage',

        data() {
            return {
                items: [
                    {
                        heading: 'Язык',
                        text: 'Английский, русский',
                    },
                    {
                        heading: 'Верстка и стили',
                        text: 'HTML5, CSS3, SASS/SCSS, Bootstrap',
                    },
                    {
                        heading: 'JavaScript и фреймворки',
                        text: 'ES6 и новее, Vue (Vuex, Vue Router, Nuxt), jQuery, lodash, p5.js, mapbox, ...',
                    },
                    {
                        heading: 'Работа с данными',
                        text: 'RESTful API, GraphQL',
                    },
                    {
                        heading: 'Дизайн и макеты',
                        text: 'Adobe Suite, Figma',
                    },
                    {
                        heading: 'Работа в команде',
                        text: 'Git (GitHub, GitLab)',
                    },
                ],
            };
        },
    };
</script>
<style lang="scss" module>
.SkillsPage {
    //
}

.heading {
    margin-bottom: 2rem;
}

.item {
    margin-bottom: 1.6rem;
}

.itemHeading {
    font-size: 2.8rem;
    margin-bottom: 1.6rem;

    @include mq(sm) {
        font-size: 1.6rem;
    }
}
</style>

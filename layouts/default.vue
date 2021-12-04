<template>
    <main :class="[$style.Default, themeClass]">
        <TheScreen>
            <Nuxt />
        </TheScreen>
    </main>
</template>
<script>
    import {mapActions, mapGetters} from 'vuex';
    import TheScreen from '~/components/TheScreen';

    export default {
        name: 'Default',

        components: {
            TheScreen,
        },

        head() {
            return {
                title: '10000W\'s Lair',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Портфолио фронтенд разработчика',
                    },
                    {
                        hid: 'og:title',
                        property: 'og:title',
                        content: '10000W\'s Lair',
                    },
                    {
                        hid: 'og:description',
                        property: 'og:description',
                        content: '10000W\'s Lair – Портфолио фронтенд разработчика',
                    },
                    {
                        hid: 'og:image',
                        property: 'og:image',
                        content: '/images/card.jpg',
                    },
                    {
                        hid: 'og:url',
                        property: 'og:url',
                        content: 'https://front.cat',
                    },
                ],
            };
        },

        computed: {
            ...mapGetters({
                theme: 'theme/getThemeValue',
            }),

            themeClass() {
                return `theme--${this.theme}`;
            },
        },

        created() {
            this.setTheme();
        },

        methods: {
            ...mapActions({
                setTheme: 'theme/applyThemeFromStorage',
            }),
        },
    };
</script>
<style lang="scss" module>
.Default {
    height: 100vh;
}
</style>

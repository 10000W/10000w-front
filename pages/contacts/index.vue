<template>
    <section :class="$style.ContactsPage">
        <h1 v-typewriter="'Как со мной связаться'"
            class="h1">
            Как со мной связаться
        </h1>

        <address :class="$style.links">
            <a v-for="(link, index) in links"
               :key="index"
               :class="$style.link"
               class="link"
               :href="link.href"
               :target="link.target">
                {{ link.name }}
            </a>
        </address>
    </section>
</template>
<script>
    export default {
        name: 'ContactsPage',

        data() {
            return {
                links: [
                    {
                        href: 'https://hh.ru/resume/3c839f85ff028f8d8a0039ed1f697a6e394732',
                        name: 'hh',
                        target: '_blank',
                    },
                    {
                        href: 'https://career.habr.com/10-000w',
                        name: 'Хабр Карьера',
                        target: '_blank',
                    },
                    {
                        href: 'https://t.me/ananimas/',
                        name: 'Telegram',
                    },
                    {
                        href: 'mailto:dankwas1337@gmail.com',
                        name: 'Email',
                    },
                ],
            };
        },
    };
</script>
<style lang="scss" module>
.ContactsPage {
    //
}

.links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.link {
    display: flex;
    margin-bottom: 1.6rem;
    font-size: 2.2rem;
}
</style>

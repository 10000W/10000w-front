<template>
    <div :class="$style.TheScreen">
        <div :class="$style.box">
            <div :class="$style.content">
                <slot></slot>
            </div>
            <footer :class="$style.bottom">
                <TheConsole />

                <div :class="$style.btns">
                    <UiButton v-if="isBackVisible"
                              to="/"
                              :class="$style.btn"
                              size="small">
                        Назад
                    </UiButton>

                    <UiButton :class="$style.btn"
                              size="small"
                              @click="changeTheme">
                        {{ themeName }}
                    </UiButton>
                </div>
            </footer>
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex';

    import TheConsole from '~/components/TheConsole';
    import UiButton from '~/components/ui/UiButton';

    export default {
        name: 'TheScreen',

        components: {
            TheConsole,
            UiButton,
        },

        computed: {
            ...mapGetters({
                theme: 'theme/getThemeName',
            }),

            themeName() {
                return `Тема: ${this.theme}`;
            },

            isBackVisible() {
                return this.$route.name !== 'index';
            },
        },

        methods: {
            ...mapActions({
                changeTheme: 'theme/changeTheme',
            }),
        },
    };
</script>
<style lang="scss" module>
.TheScreen {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.box {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 102.4rem;
    height: 72rem;
    padding: 2rem;
    background-color: var(--background);

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, .25) 0), linear-gradient(90deg, rgba(255, 0, 0, .06), rgba(0, 255, 0, .02), rgba(0, 0, 255, .06));
        background-size: 100% .2rem, .3rem 100%;
        pointer-events: none;
    }

    @include mq(sm) {
        width: 100%;
        height: 100%;
    }
}

.content {
    overflow: auto;
}

.bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 2rem;

    @include mq(sm) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
}

.btns {
    display: flex;
    align-self: flex-end;
    flex-shrink: 0;

    @include mq(sm) {
        margin-top: 2rem;
    }
}

.btn {
    flex-shrink: 0;
    margin-left: 2rem;

    @include mq(sm) {
        margin-left: 1rem;
    }

    &:first-child {
        margin-left: 0;
    }
}

@keyframes flicker {
    0% {
        opacity: .27861
    }
    5% {
        opacity: .34769
    }
    10% {
        opacity: .23604
    }
    15% {
        opacity: .90626
    }
    20% {
        opacity: .18128
    }
    25% {
        opacity: .83891
    }
    30% {
        opacity: .65583
    }
    35% {
        opacity: .67807
    }
    40% {
        opacity: .26559
    }
    45% {
        opacity: .84693
    }
    50% {
        opacity: .96019
    }
    55% {
        opacity: .08594
    }
    60% {
        opacity: .20313
    }
    65% {
        opacity: .71988
    }
    70% {
        opacity: .53455
    }
    75% {
        opacity: .37288
    }
    80% {
        opacity: .71428
    }
    85% {
        opacity: .70419
    }
    90% {
        opacity: .7003
    }
    95% {
        opacity: .36108
    }
    to {
        opacity: .24387
    }
}
</style>

<script lang="ts" setup>
import { defineProps, computed, useCssModule } from "vue";
import type { PropType, ButtonHTMLAttributes } from "vue";
const styles = useCssModule();
const props = defineProps({
  type: {
    type: String as PropType<ButtonHTMLAttributes["type"]>,
    default: "button",
  },

  size: {
    type: String,
    default: "",
  },

  to: {
    type: String,
    default: "",
  },
});

const classes = computed(() => {
  return [{ [styles[`_${props.size}`]]: props.size }];
});

const onClick = () => {
  const audio = new Audio(`./sounds/key${Math.random() < 0.5 ? "1" : "2"}.mp3`);
  audio.volume = 0.2;
  audio.play();
};
</script>

<template>
  <router-link
    v-if="to"
    :class="[$style.UiButton, classes]"
    :to="to"
    @click="onClick"
  >
    <slot></slot>
  </router-link>

  <button
    v-else
    :class="[$style.UiButton, classes]"
    :type="type"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" module>
.UiButton {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.2rem 2.4rem;
  border: 1px solid var(--primary);
  color: var(--primary);
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  font-size: 2rem;
  outline: 0;

  &._small {
    font-size: 1.6rem;

    @include mq(xs) {
      padding: 1rem 1.8rem;
      font-size: 1.4rem;
    }
  }

  &._large {
    font-size: 2.8rem;
  }

  &:hover {
    background-color: var(--primary);
    border: 1px solid var(--primary);
    color: var(--primary-active-text);
  }

  &:active {
    background-color: var(--primary-active);
    border: 1px solid var(--primary-active);
    color: var(--primary-active-text);
  }

  &:focus-visible {
    box-shadow: 0 0 0 5px inset var(--secondary);
  }
}
</style>

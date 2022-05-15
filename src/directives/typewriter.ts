import type { DirectiveBinding } from "vue";

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.classList.add("typewriter-active");

    let index = 0;
    const arr = binding.value.split("");
    const interval = setInterval(() => {
      el.innerText += arr[index];
      index++;
      if (index > arr.length - 1) {
        if (!binding.modifiers?.caret) {
          el.classList.remove("typewriter-active");
        }
        clearInterval(interval);
      }
    }, 50);
    el.innerText = "";
  },
};

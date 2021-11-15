import Vue from 'vue';

Vue.directive('typewriter', {
    // When the bound element is inserted into the DOM...
    bind: (el, binding) => {
        console.log(el.offsetHeight);
        el.classList.add('typewriter-active');
        if (binding.modifiers.keepHeight) {
            el.style.height = `${el.offsetHeight}px`;
        }

        let index = 0;
        const arr = binding.value.split('');
        const interval = setInterval(() => {
            el.innerText += arr[index];
            index++;
            if (index > arr.length - 1) {
                if (!binding.modifiers?.caret) {
                    el.classList.remove('typewriter-active');
                }
                if (binding.modifiers.keepHeight) {
                    el.style.height = '';
                }
                clearInterval(interval);
            }
        }, 50);
        el.innerText = '';
    },
});

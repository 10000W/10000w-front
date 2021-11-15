import Vue from 'vue';

Vue.directive('typewriter', {
    // When the bound element is inserted into the DOM...
    bind: (el, binding) => {
        el.classList.add('typewriter-active');

        let index = 0;
        const arr = binding.value.split('');
        const interval = setInterval(() => {
            el.innerText += arr[index];
            index++;
            if (index > arr.length - 1) {
                if (!binding.modifiers?.caret) {
                    el.classList.remove('typewriter-active');
                }
                clearInterval(interval);
            }
        }, 50);
        el.innerText = '';
    },
});

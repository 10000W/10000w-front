export const state = () => ({
    themes: [
        {
            name: 'Sky',
            value: 'sky',
        },
        {
            name: 'Blood',
            value: 'blood',
        },
        {
            name: 'Fever',
            value: 'fever',
        },
        {
            name: 'Outrun',
            value: 'outrun',
        },
    ],
    themeIndex: 0,
});

export const getters = {
    getCurrentTheme(state) {
        return state.themes[state.themeIndex];
    },

    getThemeName(state, getters) {
        return getters.getCurrentTheme?.name || 'ERROR!';
    },

    getThemeValue(state, getters) {
        return getters.getCurrentTheme?.value || 'ERROR!';
    },
};

export const actions = {
    changeTheme({state, commit}) {
        commit('SET_THEME', state.themeIndex >= state.themes.length - 1 ? 0 : state.themeIndex + 1);
        localStorage.setItem('theme', state.themeIndex);
    },

    applyThemeFromStorage({commit}) {
        commit('SET_THEME', localStorage.getItem('theme'));
    },
};

export const mutations = {
    SET_THEME(state, payload) {
        state.themeIndex = Number(payload);
    },
};

import { defineStore } from "pinia";
import { ref, markRaw } from "vue";

type TTheme = {
  name: string;
  value: string;
};

export const useThemeStore = defineStore("store", () => {
  const index = ref(0);
  const themes: Array<TTheme> = markRaw([
    {
      name: "Sky",
      value: "sky",
    },
    {
      name: "Blood",
      value: "blood",
    },
    {
      name: "Fever",
      value: "fever",
    },
    {
      name: "Outrun",
      value: "outrun",
    },
  ]);

  const getCurrentTheme = (): TTheme => themes[index.value];
  const getThemeName = (): string => getCurrentTheme().name;
  const getThemeValue = (): string => getCurrentTheme().value;
  const changeTheme = () => {
    index.value = index.value >= themes.length - 1 ? 0 : index.value + 1;
    localStorage.setItem("theme", String(index.value));
  };
  const applyThemeFromStorage = () => {
    index.value = Number(localStorage.getItem("theme"));
  };

  return { index, getThemeName, getThemeValue, changeTheme };
});

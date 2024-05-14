import { useMount } from "ahooks";
import { create } from "zustand";

type ThemeState = {
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
};

const useThemeStore = create<ThemeState>()((set) => ({
  mode: "light",
  setMode: (mode: "light" | "dark") => set({ mode }),
}));

export const useTheme = () => {
  const store = useThemeStore();

  const useLightMode = () => {
    // when changing theme to light
    document.documentElement.classList.remove("dark");
    store.setMode("light");
    localStorage.theme = "light";
  };

  const useDarkMode = () => {
    // when changing theme to dark
    document.documentElement.classList.add("dark");
    store.setMode("dark");
    localStorage.theme = "dark";
  };

  const toggle = () => {
    if (store.mode === "light") {
      useDarkMode();
    } else {
      useLightMode();
    }
  };

  return {
    mode: store.mode,
    useDarkMode,
    useLightMode,
    toggle,
  };
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

  useMount(() => {
    // On page load
    switch (localStorage.theme) {
      case "light":
        theme.useLightMode();
        break;
      case "dark":
        theme.useDarkMode();
        break;
      default:
        // if no theme is set (undefined), check for user preference
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          theme.useDarkMode();
        } else {
          theme.useLightMode();
        }
    }
  });

  return <>{children}</>;
};

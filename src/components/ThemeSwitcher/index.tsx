"use client";

import useColorMode from "@/hooks/useColorMode";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useColorMode();

  return (
    <button
      className={`w-fit absolute right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
      onClick={toggleTheme}
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};

import { useTheme } from "next-themes";

export default function useColorMode(){
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    };

    return ({
        theme,
        toggleTheme
    })
};
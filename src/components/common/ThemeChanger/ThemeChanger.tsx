"use client";

import {useTheme} from "next-themes";

export default function ThemeChanger() {
    const { theme, setTheme } = useTheme();

    function toggleTheme() {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <>
            <button
                light="i-carbon-sun w-6 h-6"
                dark="i-carbon-moon w-6 h-6"
                onClick={toggleTheme}
            />
        </>
    );
}
"use client";

import {useTheme} from "next-themes";

export default function ThemeChanger() {
    const { theme, setTheme } = useTheme();

    function toggleTheme() {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <button
                    onClick={toggleTheme}
                    className="w-6 h-6 i-carbon-sun dark:i-carbon-moon w-6 h-6"
                />
            </div>
        </>
    );
}
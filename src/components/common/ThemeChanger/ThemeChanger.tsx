"use client";

import {useTheme} from "next-themes";

export default function ThemeChanger() {
    const { setTheme } = useTheme();

    return (
        <>
            <div className="flex flex-col items-center">
                <button
                    onClick={() => setTheme('light')}
                >
                    Light Mode
                </button>
                <button
                    onClick={() => setTheme('dark')}
                >
                    Dark Mode
                </button>
            </div>
        </>
    );
}
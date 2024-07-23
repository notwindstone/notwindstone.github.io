import ThemeChanger from "@/components/common/ThemeChanger/ThemeChanger";

export default function Home() {
    return (
        <main className="grid place-items-center h-auto p-4 dark:bg-red light:bg-gray-400">
            <ThemeChanger />
        </main>
    );
}

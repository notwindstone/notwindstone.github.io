import ThemeChanger from "@/components/common/ThemeChanger/ThemeChanger";
import TextCKEditor from "@/components/common/TextCKEditor/TextCKEditor";

export default function Home() {
    return (
        <main
            className="grid place-items-center h-auto p-4 dark:bg-red light:bg-gray-400"
        >
            <ThemeChanger />
            <TextCKEditor />
        </main>
    );
}

import {
    defineConfig,
    presetUno,
    presetIcons,
    presetAttributify,
} from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';

export default defineConfig({
    presets: [
        presetUno({
            dark: "class",
        }),
        presetIcons(),
        presetAttributify(),
        presetRemToPx(),
    ],
});
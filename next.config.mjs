import UnoCSS from '@unocss/webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["geist"],
    webpack: (config) => {
        config.plugins.push(
            UnoCSS(),
        );
        return config;
    },
};

export default nextConfig;
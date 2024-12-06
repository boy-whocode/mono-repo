import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig = {
  webpack: (config, options) => {
    const { isServer } = options;
    const remoteDir = isServer ? "ssr" : "chunks";
    config.experiments = { topLevelAwait: true, layers: true };

    config.plugins.push(
      new NextFederationPlugin({
        name: "header",
        filename: `static/${remoteDir}/remoteEntry.js`,
        exposes: {
          "./Header": "./src/pages/index.tsx",
        },
        shared: {
        },
        extraOptions: {
          exposePages: true,
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
        },
      })
    );
    return config;
  },
};

export default nextConfig;

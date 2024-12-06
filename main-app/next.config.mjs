import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig = {
  webpack: (config, options) => {
    const { isServer } = options;
    const remoteDir = isServer ? "ssr" : "chunks";
    config.experiments = { topLevelAwait: true, layers: true };

    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        filename: `static/${remoteDir}/remoteEntry.js`,
        remotes: {
          header: `header@http://localhost:3001/_next/static/${remoteDir}/remoteEntry.js`,
          innerSection: `innerSection@http://localhost:3002/_next/static/${remoteDir}/remoteEntry.js`,
          footer: `footer@http://localhost:3003/_next/static/${remoteDir}/remoteEntry.js`,
        },
        shared: {
          react: { singleton: true, eager: false, requiredVersion: "^18" },
          "react-dom": {
            singleton: true,
            eager: false,
            requiredVersion: "^18",
          },
        },
      })
    );
    return config;
  },
};

export default nextConfig;

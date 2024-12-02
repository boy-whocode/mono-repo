import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "footer",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Footer": "./src/pages/index.tsx",
        },
        shared: {
          react: { singleton: true, eager: true, requiredVersion: false },
          "react-dom": { singleton: true, eager: true, requiredVersion: false },
        },
      })
    );
    return config;
  },
};

export default nextConfig;

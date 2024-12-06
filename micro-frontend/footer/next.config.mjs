import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "footer",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Footer": "./src/pages/index.tsx",
          "./FooterComp": "./src/components/Footer",

        },
        shared: {},
      })
    );
    return config;
  },
};

export default nextConfig;

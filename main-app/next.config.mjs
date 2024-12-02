import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        remotes: {
          header:"header@http://localhost:3001/_next/static/chunks/remoteEntry.js",
          innerSection:"innerSection@http://localhost:3002/_next/static/chunks/remoteEntry.js",
          footer:"footer@http://localhost:3003/_next/static/chunks/remoteEntry.js",
        },
        filename: "static/chunks/remoteEntry.js",
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

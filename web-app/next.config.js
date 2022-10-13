/** @type {import("next").NextConfig} */
export default {
  webpack: (webpackConfig) => {
    return {
      ...webpackConfig,
      experiments: {
        asyncWebAssembly: true,
        layers: true,
      },
    };
  },
};

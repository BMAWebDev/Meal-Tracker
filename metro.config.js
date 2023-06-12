// import { getDefaultConfig } from "expo/metro-config";

const { getDefaultConfig } = require("metro-config");

const config = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  const configOptions = {
    resolver: {
      sourceExts: [...sourceExts, "jsx", "js", "ts", "tsx"], // Add TypeScript extensions
      assetExts: assetExts.filter((ext) => ext !== "svg"), // Exclude any unwanted asset extensions
      extraNodeModules: {
        "@": `${__dirname}/src`, // Map '@/' to './src'
      },
    },
  };

  return configOptions;
})();

module.exports = config;

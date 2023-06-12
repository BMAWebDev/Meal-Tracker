// import { getDefaultConfig } from "expo/metro-config";

const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    resolver: {
      sourceExts: [...sourceExts, "jsx", "js", "ts", "tsx"], // Add TypeScript extensions
      assetExts: assetExts.filter((ext) => ext !== "svg"), // Exclude any unwanted asset extensions
      extraNodeModules: {
        "@": `${__dirname}/src`, // Map '@/' to './src'
      },
    },
  };
})();

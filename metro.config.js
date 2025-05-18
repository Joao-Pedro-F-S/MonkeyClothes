// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.transformer = {
  ...config.transformer,
  // Garante o uso do plugin oficial de hashing de arquivos de asset
  assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  // Se você usa SVGs via react-native-svg-transformer:
  // babelTransformerPath: require.resolve('react-native-svg-transformer'),
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true,
    },
  }),
};

config.resolver = {
  ...config.resolver,
  // Certifique-se de não remover svg de assetExts se não usar transformer
  assetExts: config.resolver.assetExts.filter(ext => ext !== 'svg'),
  sourceExts: [...config.resolver.sourceExts, 'svg', 'd.ts'],
};

module.exports = config;

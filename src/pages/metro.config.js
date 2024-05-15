/**
 * Metro configuration for React Native
 * https://facebook.github.io/metro/docs/configuration
 *
 * @format
 */
module.exports = {
    resolver: {
      sourceExts: ['jsx', 'js', 'ts', 'tsx'], // Add the extensions you need
    },
    transformer: {
      babelTransformerPath: require.resolve('react-native-typescript-transformer'),
    },
  };
  
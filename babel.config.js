module.exports = {
  presets: [
    ['module:metro-react-native-babel-preset'],
    ['babel-preset-expo']
  ],
  plugins: [
    ["module:react-native-dotenv"],
    ["react-native-reanimated/plugin"]
  ]
};

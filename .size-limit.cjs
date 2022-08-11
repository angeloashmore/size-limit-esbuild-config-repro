module.exports = [
  {
    path: "index.js",
    modifyEsbuildConfig(config) {
      config.loader = {
        ".js": "jsx",
      };

      return config;
    },
  },
];

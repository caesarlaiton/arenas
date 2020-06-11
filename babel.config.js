module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        targets: {
          browsers: [
            // Best practice: https://github.com/babel/babel/issues/7789
            ">=1%",
            "not op_mini all"
          ]
        }
      }
    ]
  ]
};

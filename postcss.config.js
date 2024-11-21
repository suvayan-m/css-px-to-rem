module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 10, // Base value for 1rem. Adjust this based on your design.
      unitPrecision: 5, // Number of decimal places allowed in rem values
      propList: ["*"], // Properties to convert (e.g., ['*'] for all or ['font-size'])
      selectorBlackList: [], // Selectors to ignore
      replace: true, // Replace px values with rem values
      mediaQuery: false, // Ignore px in media queries
      minPixelValue: 0, // Minimum pixel value to convert
    },
  },
};

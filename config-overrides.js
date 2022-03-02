module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function (config, env) {
      // extend or custom webpack config without detaching it. 
    return config;
  },
  // The Jest config to use when running your jest tests - note that the normal rewires do not
  // work here.
  jest: function (config) {

    return config;
  },
};

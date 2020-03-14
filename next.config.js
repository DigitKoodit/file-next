const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline');
const webpack = require('webpack');
require('dotenv').config();

module.exports = withTypescript(withCSS(withOffline({
  webpack: config => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  }
})));

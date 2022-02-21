/* eslint-disable @typescript-eslint/no-var-requires */
const WebpackBar = require("webpackbar");
const CracoAntDesignPlugin = require("craco-antd");
const CracoLessPlugin = require("craco-less");
const path = require("path");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent"); // included in Create React App

module.exports = {
  webpack: {
    entry: ["babel-polyfill", "./src/client/index.tsx"],
    plugins: [new WebpackBar({ profile: true })],
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    proxy: {
      "/api/**": {
        target: "http://localhost:8050",
        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(__dirname, "src/less/variables.less"),
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
          modules: {
            getLocalIdent: (context, localIdentName, localName, options) => {
              if (context.resourcePath.includes("node_modules")) {
                return localName;
              }
              return getCSSModuleLocalIdent(
                context,
                localIdentName,
                localName,
                options
              );
            },
          },
        },
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
        modifyLessRule: (lessRule, _context) => {
          lessRule.test = /\.(module)\.(less)$/;
          lessRule.exclude = path.join(__dirname, "node_modules");
          return lessRule;
        },
      },
    },
  ],
};

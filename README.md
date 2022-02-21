# Blob farm

- [Blob farm](#Blob-farm)
  - [Introduction](#introduction)
  - [Quick Start](#quick-start)
    - [Development mode](#development-mode)
  - [Documentation](#documentation)
    - [Directory Structure](#directory-structure)
    - [Typescript](#typescript)
    - [Less](#less)
    - [Ant Design](#ant-design)
    - [ESLint](#eslint)
    - [Craco](#craco)
    - [Webpack](#webpack)
    - [Webpack dev server](#webpack-dev-server)
    - [Nodemon](#nodemon)
    - [Express](#express)
    - [Concurrently](#concurrently)
    - [VSCode + ESLint + Prettier](#vscode--eslint--prettier)
      - [Installation guide](#installation-guide)

## Introduction

The blob farm is an application with full-stack Typescript. It's configured for Back-end development with using ExpressJS framework for web services and Front-end development using ReactJS library with help of Typescript language and Less preprocessor for stylesheets.

## Quick Start

```bash
# Install dependencies
yarn (or npm install)

# Start development server
yarn dev (or npm run dev)
```

### Development mode

In the development mode, you will have a back-end server running with [nodemon](https://nodemon.io/) and a Front-end server running with the [webpack dev server](https://webpack.js.org/configuration/dev-server/). The [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading for Front-end. The server-side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server-side code changes.

## Documentation

### Directory Structure

Source code for Back-end and Front-end will be placed at src directory. Server directory is for the API and Client is for UI source codes.

### Typescript

[Typescript](https://www.typescriptlang.org) is a typed superset for Javascript that compiles to plain JavaScript. It's only for preventing miss-typing in development mood. In production mood it's just plain JavaScript.

### Less

[Less](http://lesscss.org/) is a backwards-compatible language extension for CSS. Less helps to write CSS in a functional way and It's really easy to read and understand.

### Ant Design

[Ant Design](https://ant.design/) is a design system for enterprise-level products.

### ESLint

[ESLint](https://eslint.org/) is a pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript and Typescript.

[Airbnb's Javascript Style Guide](https://github.com/airbnb/javascript) which has been used by the majority of JavaScript and Typescript developers worldwide. Since the aim is support for both client (browser) and server side (Node.js) source code, the **env** has been set to browser and node.
Optionally, you can override the current settings by installing `eslint` globally and running `eslint --init` to change the configurations to suit your needs. [**no-console**](https://eslint.org/docs/rules/no-console), [**comma-dangle**](https://eslint.org/docs/rules/comma-dangle) and [**react/jsx-filename-extension**](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md) rules have been turned off.

### Webpack

[Webpack](https://webpack.js.org/) is a module bundler. Its main purpose is to capable Front-end developers to experience a modular programming style and bundle JavaScript and CSS files for usage in a browser.

### Craco

[craco](https://github.com/gsoft-inc/craco) Create React App Configuration Override is an easy and comprehensible configuration layer for create-react-app.

### Webpack dev server

[Webpack dev server](https://webpack.js.org/configuration/dev-server/) is used along with webpack. It provides a development server that enables live reloading for the client side code changes.

### Nodemon

Nodemon is a utility monitors for any changes in the server-side source code, and automatically restarts the server. Nodemon is just for development purposes only.
**nodemon.json** file is used to hold the configurations for Nodemon.

### Express

Express is a web application framework for Node.js. It is used to build our backend API's.

### Concurrently

[Concurrently](https://github.com/kimmobrunfeldt/concurrently) is used to run multiple commands concurrently. I's been used to run the webpack dev server and the backend node server concurrently in the development environment. Below are the npm/yarn script commands used.

### VSCode + ESLint + Prettier

[VSCode](https://code.visualstudio.com/) is a lightweight but powerful source code editor. [ESLint](https://eslint.org/) takes care of the code-quality. [Prettier](https://prettier.io/) takes care of all the formatting.

#### Installation guide

1.  Install [VSCode](https://code.visualstudio.com/)
2.  Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
3.  Install [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
4.  Modify the VSCode user settings to add below configuration

    ```javascript
    "eslint.alwaysShowStatus": true,
    "eslint.autoFixOnSave": true,
    "editor.formatOnSave": true,
    "prettier.eslintIntegration": true
    ```

# react-shopping-cart
> Implement a simple shopping cart website
### Environment Require
----
1. npm (version 5.6.0 or above)
2. node (version 7.0.0 or above)
3. mongodb (version v3.6.2 or above)

### Get Start
----
Initialize(install the packages in package.json):
```sh
$ npm install
```

Run client:
```sh
$ npm run dev
```
url: http://localhost:8080/

Run server:
```sh
$ npm run server
```
url: http://localhost:3000/

### Testing
```sh
$ npm run test
```
** need to open mongo db **

### packages
----
- `react`
- `react-dom`
- `react-router`
- `redux-thunk`
- `mongoose`
- `prop-types`
- `babel-core`
- `babel-eslint`
- `babel-preset-react`
- `babel-preset-es2015`
- `babel-preset-stage-1`
- `babel-plugin-transform-class-properties`
- `babel-plugin-react-html-attrs`
- `babel-plugin-transform-decorators-legacy`
- `ealint`
- `webpack`
- `webpack-dev-server`
- `eslint-plugin-react`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-import`

###### packages for loader
- `babel-loader`
- `react-hot-loader`
- `css-loader`
- `sass-loader`
- `style-loader`
- `eslint-loader`

###### packages for testing
- `enzyme`
- `enzyme-adapter-react-16`
- `mocha`
- `sinon`
- `chai`
- `chai-http`
- `jsdom`
- `mock-local-storage`
- `react-addons-test-util`
- `redux-mock-store`


###### Some weird learning notes
Q: Mocha can't read webpack's config, however, while testing wanted to use webpack resolve.alias to import the module

A: In `.babeltc` add the plugin `babel-plugin-webpack-aliases`
```json
    "plugins": [
        [ "babel-plugin-webpack-aliases", { "config": "./webpack.config.js" } ]
    ]
```
```sh
$ npm run test --> $ mocha --watch --compilers js:babel-core/register --require ./test/helpers.js --require ./test/dom.js --recursive
```
while runing `babel-core/register`, `webpack.config.js` will be include.

Q: How to open mongoDB?

A:
```sh
$ cd [YourMongodbPath]/bin
$ ./mongod --dbpath [YourDataBasePath]
```

Using mongoDB in terminal
```sh
$ cd [YourMongodbPath]/bin
$ ./mongo
```

module.exports = {
    "env": {
      "browser": true,
      "es6": true,
      "node": true,
      "mocha": true
    },
    "parser": "babel-eslint",
    "extends": ["airbnb", "plugin:react/recommended"],
    "parserOptions": {
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": true
      },
      "sourceType": "module"
    },
    "plugins": [
      "react"
    ],
    "rules": {
      "new-cap": 0,
      "import/no-unresolved": 0,
      "no-underscore-dangle": 0,
      "comma-dangle":0,
      "import/extensions": 0,
      "arrow-body-style": 0,
      "arrow-parens": 0,
      "no-param-reassign": ["error", { "props": false }],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "no-plusplus": 0,
      "class-methods-use-this":0,
      "jsx-a11y/anchor-is-valid": [ "error", { "components": [ "Link" ], "specialLink": [ "to" ] } ],
      "max-len":0
    },
    settings:{
      'import/resolver': 'webpack',
    }
  };
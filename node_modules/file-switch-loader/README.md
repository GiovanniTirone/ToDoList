# Webpack file switch loader

Install with
```
npm i -D file-switch-loader
```

This loader can change the file that content is being loaded from while the bundling is happening.

Use cases can be a multi-tenant repository, AB testing or whenever you would like to switch out parts of your component tree based on a configuration object and their filenames.


## Example
### webpack.config.js
The loader has to be the last in the array
```javascript
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'file-switch-loader',
            options: {
              version: 'b',
            },
          },
        ],
      },
    ],
  },
```
### Tree of components:
```
├── App.jsx
├── Button.b.css
├── Button.b.jsx
├── Button.css
├── Button.jsx
└── index.js

```

`App.jsx` is importing `Button.jsx`.

Now we would like to test out a new button component on our Page. 
In the options we have set the `version` option to `b`.
The loader will now check if files with a `b` between **filename** and **extension** exist and load the content of those instead.

## Cool stuff
You can just pass in the `version` via a parameter when starting webpack or have it in an `ENV` variable.
This way you can quickly build and release different versions of your App/Site.


# Dependencies
This was tested with **node 8.6.0** but should work as long your node version supports `const` and string interpolation. 

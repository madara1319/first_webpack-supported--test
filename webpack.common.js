const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    another: "./src/js/another.js",
    default:"./src/js/default.js",
    forms:'./src/js/forms.js',
    hello:'./src/js/hello.js',
    js:'./src/js/js.js',
    pwa:'./src/js/pwa.js',
    test:'./src/js/test.js',
    grid:'./src/js/grid.js',
    grid_layout:'./src/js/grid_layout.js',
    flex:'./src/js/flex.js',

  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              '**/*.DS_Store'
            ],
          },
        },
      ],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/another.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "another.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/Mateusz.html",
      inject: true,
      chunks: ["index"],
      filename: "Mateusz.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/cool.html",
      inject: true,
      chunks: ["index"],
      filename: "cool.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/cursor.html",
      inject: true,
      chunks: ["index"],
      filename: "cursor.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/flex.html",
      inject: true,
      chunks: ["index"],
      filename: "flex.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/forms.html",
      inject: true,
      chunks: ["index","forms"],
      filename: "forms.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/grid.html",
      inject: true,
      chunks: ["index"],
      filename: "grid.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/grid_layout.html",
      inject: true,
      chunks: ["index"],
      filename: "grid_layout.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/lol test.html",
      inject: true,
      chunks: ["index"],
      filename: "lol test.html",
    }),
    
  ],
};

<<<<<<< HEAD
var HtmlWebPackPlugin = require("html-webpack-plugin");

var htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
=======
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
>>>>>>> release/1.1.0

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.less?$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          {
            loader: "less-loader",
            options: {
              paths: [
                path.resolve(__dirname, "node_modules"),
                path.resolve(__dirname, "src")
              ]
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name]-[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".less", ".js", ".jsx", ".react.js"]
  },
<<<<<<< HEAD
  plugins: [htmlPlugin]
=======
  plugins: [
    new HtmlWebPackPlugin({
      template: "public/index.html"
    })
  ],
  devServer: {
    host: "localhost",
    port: 3000,
    historyApiFallback: true,
    open: true
  }
>>>>>>> release/1.1.0
};

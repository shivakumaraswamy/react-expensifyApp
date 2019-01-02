const path = require("path");
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'

module.exports = () => {
  
  return {
    mode: 'production',
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            {   
              loader: MiniCssExtractPlugin.loader,
              
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                publicPath: '../',
                fallback: 'style-loader'
              }
            },
            "css-loader"
          ]
        },
        {test: /\.(jpe?g|png|gif|svg)$/i, loader: "url-loader?name=public/images/[name].[ext]"}
      ]
    },
    plugins:[
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true
    }
  };
};

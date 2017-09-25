module.exports = {
  entry: __dirname + '/app/main.js',//入口文件 
  // __dirname 是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
  output: {
    path: __dirname + '/public',//打包后文件存放的地方
    filename: 'bundle.js'//打包后输出文件的文件名
  },
  devtool: 'eval-source-map',//调试代码 看错误
  devServer: {
    contentBase: './public',//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
}
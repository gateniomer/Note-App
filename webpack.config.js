const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/app.js'),
    // 'service-worker': "./src/service-worker.js"
  },
  plugins: [
   new WorkboxPlugin.GenerateSW({
     // these options encourage the ServiceWorkers to get in there fast
     // and not allow any straggling "old" SWs to hang around
     clientsClaim: true,
     skipWaiting: true,
   }),
  ],
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  }
}
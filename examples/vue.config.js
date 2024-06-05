// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// const { defineConfig } = require('@vue/cli-service');

// module.exports = defineConfig({
//   transpileDependencies: true,
//   resolve: {
//     fallback: { "path": require.resolve("path-browserify") }
//   }
// });

const path = require('path');

module.exports = {
  chainWebpack: config => {
    // 配置file-loader处理图片文件
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[name].[ext]',
        outputPath: 'images/'
      });
  },
  configureWebpack: {
    resolve: {
      fallback: {
        "path": require.resolve("path-browserify")
      }
    }
  }
};
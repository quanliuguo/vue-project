const BASE_URL = process.env.ONDE_ENV === 'production' ? '/iview-admin/' : '/'
const path = require('path')
const resolve = dir => path.join(_dirname, dir)
module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  procutionSourceMap: false, // 打包时不生成map文件
  devServer: {
    proxy: 'http://localhost:8080'
  }
}

const { defineConfig } = require('@vue/cli-service')

const isProduction = process.env.NODE_ENV !== 'development';

const cdn = {
  externals: {
    vue: 'Vue',
    echarts: 'echarts'
  },
  css: [],
  js: [
    'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
    'https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js'
  ]
}

module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  chainWebpack: config => {
    config.when(isProduction, config => {
      // 我们希望的是在生产环境下才进行cdn优化！！！这点理解很重要。
      // 告诉webpack需要排除的依赖名称和挂载在window上的对象属性名称。
      config.set('externals', cdn.externals);
      // 这里的作用是在后面index.html页面中通过link，script标签加载这些cdn链接。
      config.plugin('html').tap(args => {
        // console.log(args[0]);
        args[0].cdn = cdn;
        args[0].title = '车联网平台数据概览';
        return args;
      });
    });
  }
})

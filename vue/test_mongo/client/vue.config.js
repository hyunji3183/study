const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'/vue_test' //배포할때 꼭!! 붙여줘야함
})

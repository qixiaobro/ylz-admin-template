# ylz-admin-template

> 使用Vue.js+Element-ui+axios等技术栈搭建的后台管理系统模版。💯

## 目录结构

```javascript
src
vue.config.js  //项目打包配置等
.env.prod			 //生产环境全局变量
.env.test      //测试环境全局变量
├─App.vue      //入口文件
├─main.js      //main.js
├─views		     //页面文件夹
├─utils		     //公共方法、函数工具
├─themes	     //定制主题、现有一套医保平台的主题
├─styles	     //样式文件
├─store        //vuex仓库
├─router       //路由文件
├─components   //组件
├─assets       //静态资源
├─apis         //接口模块
```

## 代码规范

文件夹命名、文件命名请参考以下链接文档

http://wxfwtest.ylzms.com/ylzued/docs/rules/

## 目录详情

### ```router```

```javascript
├─router
|   ├─after-each.js   //路由后置守卫
|   ├─before-each.js  //路由前置守卫
|   ├─index.js        //自动注册路由
|   ├─login-module    //登录模块路由
|   |      └index.js  
|   ├─default-module  //默认页面路由，如404页面
|   |       └index.js
|   ├─common-module   //页面路由
|   |       └index.js
```

### ```store```

strore开启了命名空间，所有在页面分发时要带上模块名

```javascript
├─store
|   ├─index.js			     //组装模块并导出store
|   ├─mutation-types.js  //mutation类型文件，所有mutation使用变量
|   ├─modules            //仓库模块文件夹
|   |    ├─common.js		 //公共state
|   |    └user.js				 //用户state
```

### ```styles```

样式使用scss预处理，全局样式变量统一放```params.css``文件夹

```javascript
├─styles
|   ├─params.scss      //颜色、font-size、边框色等全局样式变量文件
|   └reset.scss	       //重置浏览器样式文件
```

```themes```

```Element-UI```定制主题文件夹，在它的官网定制项目一些主题，可以避免在开发过程中频繁修改```Element-UI```的样式，下载完后在```main.js```中引入

```javascript
├─themes
|   ├─index.css
|   ├─fonts
|   |   ├─element-icons.ttf
|   |   └element-icons.woff
```

### ```apis```

```apis```文件夹包含封装的```axios```=>```http``` ,以及不同模块的接口

```javascript
├─apis
|  ├─http.js          //axios 封装
|  ├─index.js         //导出所有api模块
|  ├─modules					//接口模块文件夹
|  |    ├─common.js   //公共接口
|  |    ├─login.js    //登录接口
|  |    └user.js      //用户接口
```

### ```views```

```views```包含·所有页面文件，不同模块页面放不同文件夹

```javascript
├─views
|   ├─login-module          //登录模块页面
|   |      └login.vue
|   ├─default-module        //默认页面
|   |       └default-404.vue
```

### ```utils```

```utils```包含封装的公共方法、工具函数等

```javascript
├─utils
|   ├─file-to-base64.js     //文件转base64
|   ├─local-storage.js      //操作localStorage
|   ├─session-storage.js    //操作sessionStorage
|   ├─set-title.js          //设置浏览器标题
|   └token.js								//操作token
```

.env.prod

```javascript
BASE_URL = ""
TOKEN = "accessToken"
TIMEOUT = 5000
NODE_ENV = "production"
```

.env.test

```javascript
BASE_URL = ""
TOKEN = "accessToken"
TIMEOUT = 5000
NODE_ENV = "develoption"
```

### ```main.js```

```javascript
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import { beforeEachCheckToken } from "@/router/before-each"
import { afterEachSetTitle } from "@/router/after-each"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/themes/index.css' //element-ui医保定制主题,如不需要注释即可
Vue.use(ElementUI);

Vue.config.productionTip = false

router.beforeEach(beforeEachCheckToken)//路由前置守卫
router.afterEach(afterEachSetTitle)//路由后置守卫

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
```

### ```vue.config.js```

```javascript
const path = require("path")
const CompressionWebpackPlugin = require("compression-webpack-plugin")

const isProd = process.env.NODE_ENV === "production"
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: "./", //配置根路径
  outputDir: "dist", //构建输出目录
  lintOnSave: true, //是否开启eslint
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  devServer: {
    open: true, //是否自动在浏览器打开
    host: '',
    port: 8080, //配置端口号
    https: false, //是否配置https
    hot: true,
    hotOnly: true, //是否热更新
    disableHostCheck: true,
    proxy: { //配置跨域
      "/api": {
        target: "http:www.baidu.com",
        secure: false,
        changOrigin: true,
        // pathRewrite: {
        //   "^/api": ""
        // }
      }
    }
  },

  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    //如果需要css热更新就设置为false,打包时候要改为true
    extract: false,
    // 开启 CSS source maps?
    sourceMap: true,
    // css预设器配置项
    loaderOptions: {
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
      },
      less: {
        modifyVars: {
          // 直接覆盖变量
          //"text-color": "#111",
          //"border-color": "#eee"
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${path.join(
            __dirname,
            "./src/styles/theme/resetui.less"//这个import 的路径必须是绝对路径
          )}";`
          //hack: `true; @import "@/common/resetui.less";`
        }
      }
    }
  },
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "首页",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },
  configureWebpack: (config) => {
    if (isProd) {
      // 生产环境
      config.plugins.push(
        new CompressionWebpackPlugin({
          // 正在匹配需要压缩的文件后缀
          test: /\.(js|css|svg|woff|ttf|json|html)$/,
          // 大于10kb的会压缩
          threshold: 10240,
          deleteOriginalAssets: false
          // 其余配置查看compression-webpack-plugin
        })
      )
    }

  },
  chainWebpack: config => {
    // 别名配置
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@utils", resolve("src/utils"))
      .set("@api", resolve("src/api"))
      .set("@components", resolve("src/components"))
      .set("@pic", resolve("src/assets/imgs"))
    config.resolve.extensions
      .clear()
      .merge([".js", ".vue", ".json"])

    // set svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end()
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end()

    // 图片限制 转为64base
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap(options => Object.assign(options, {
        limit: 20240
      }))
    // 这里是对环境的配置，不同环境对应不同的BASE_URL，以便axios的请求地址不同
    config.plugin("define").tap(args => {
      args[0]["process.env"].BASE_URL = JSON.stringify(process.env.BASE_URL)
      return args
    })
    config.optimization.splitChunks({
      chunks: "all", // 控制webpack选择哪些代码块用于分割（其他类型代码块按默认方式打包）。有3个可选的值：initial、async和all。
      minSize: 30000, // 形成一个新代码块最小的体积
      maxSize: 0,
      minChunks: 2, // 在分割之前，这个代码块最小应该被引用的次数（默认配置的策略是不需要多次引用也可以被分割）
      maxAsyncRequests: 5, // 按需加载的代码块，最大数量应该小于或者等于5
      maxInitialRequests: 3, // 初始加载的代码块，最大数量应该小于或等于3
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        libs: {
          name: "chunk-libs",
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: "initial" // only package third parties that are initially dependent
        },
        elementUI: {
          name: "chunk-elementUI", // split elementUI into a single package
          priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
          test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
        },
        commons: {
          name: "chunk-commons",
          test: resolve("src/components"), // can customize your rules
          minChunks: 3, //  minimum common number
          priority: 5,
          reuseExistingChunk: true
        }
      }
    })
    /*
            preload 和 Prefetch 链接将会消耗带宽。如果你的应用很大且有很多 async chunk，
            而用户主要使用的是对带宽较敏感的移动端，
            那么你可能需要关掉 prefetch 链接并手动选择要提前获取的代码区块。
            官方文件很坑爹的官网文档是错的要自己打印出来
            console.log(config)
            他改名字了
        */
    config.plugins.delete("prefetch-index")
    config.plugins.delete("preload-index")
  },
  // 第三方插件配置
  pluginOptions: {}
}


```

## 最后

更多详情请查看源文件。

模版和文档不断完善中，后续会将常用的组件、方法引入。❤️🚀😉

<!--
 * @Author       : zhuxiaodong
 * @Date         : 2020-06-01 15:11:06
 * @LastEditTime : 2020-06-02 13:53:50
 * @LastEditors  : zhuxiaodong
 * @Description  : 入口文件
 * @FilePath     : /ylz-admin-template/src/App.vue
--> 
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "./styles/reset.scss";
@import "./styles/params.scss";
</style>

<template>
  <div>
    <h1>子应用123</h1>
    <!--
        name(必传)：应用名称
        url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
        baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page` // /app-vue2
       -->
    <micro-app name="child-vue2" url="http://localhost:4008/child/vue2/" baseroute="" />
    <!-- <iframe src="http://localhost:4009/child/vue3/" frameborder="0" /> -->
  </div>
</template>

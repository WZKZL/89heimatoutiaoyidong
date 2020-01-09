<template>
<div id="app">
    <!-- 跟路由出口 -->
    <router-view/>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>

    <van-cell-group>
      <van-cell title="单元格" value="内容"></van-cell>
       <van-cell title="单元格" value="内容" label="描述信息"></van-cell>
    </van-cell-group>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>

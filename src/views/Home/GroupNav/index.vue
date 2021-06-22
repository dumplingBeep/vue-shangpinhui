<template>
  <nav class="group-nav">
    <div class="container">
      <!-- 导航栏标题 -->
      <div class="group-nav-title">全部商品分类</div>
      <!-- 导航栏列表 -->
      <ul class="group-nav-list link">
        <li class="group-nav-item"><router-link to="/">服装城</router-link></li>
        <li class="group-nav-item"><router-link to="/">美妆馆</router-link></li>
        <li class="group-nav-item"><router-link to="/">尚品汇超市</router-link></li>
        <li class="group-nav-item"><router-link to="/">全球购</router-link></li>
        <li class="group-nav-item"><router-link to="/">闪购</router-link></li>
        <li class="group-nav-item"><router-link to="/">团购</router-link></li>
        <li class="group-nav-item"><router-link to="/">有趣</router-link></li>
        <li class="group-nav-item"><router-link to="/">秒杀</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'GroupNav',
};
</script>

<style lang="less" scoped>
nav.group-nav {
  width: 100%;
  border-bottom: 2px solid #e1251b;
  line-height: 45px;
  height: 45px;
  text-align: center;

  .container {
    display: flex;
  }
}

// 导航栏标题
.group-nav-title {
  width: 210px;
  background-color: #e1251b;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
}

// 导航栏列表
.group-nav-list {
  display: flex;
}

.group-nav-item {
  font-size: 16px;

  a {
    color: #333;
    padding: 0 22px;
  }
}
</style>

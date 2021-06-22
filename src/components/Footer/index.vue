<template>
  <!-- 底部模块 -->
  <footer>
    <div class="container">
      <div class="ft-top md-p">
        <ul class="ft-top-nav link">
          <li class="ft-nav-title">购物指南</li>
          <li>
            <router-link to="/">购物流程</router-link>
          </li>
          <li>
            <router-link to="/">会员介绍</router-link>
          </li>
          <li>
            <router-link to="/">生活旅行/团购</router-link>
          </li>
          <li>
            <router-link to="/">常见问题</router-link>
          </li>
          <li>
            <router-link to="/">购物指南</router-link>
          </li>
        </ul>
        <ul class="ft-top-nav link">
          <li class="ft-nav-title">配送方式</li>
          <li>
            <router-link to="/">上门自提</router-link>
          </li>
          <li>
            <router-link to="/">会211限时达员介绍</router-link>
          </li>
          <li>
            <router-link to="/">配送服务查询</router-link>
          </li>
          <li>
            <router-link to="/">配送费收取标准</router-link>
          </li>
          <li>
            <router-link to="/">海外配送</router-link>
          </li>
        </ul>
        <ul class="ft-top-nav link">
          <li class="ft-nav-title">支付方式</li>
          <li>
            <router-link to="/">货到付款</router-link>
          </li>
          <li>
            <router-link to="/">在线支付</router-link>
          </li>
          <li>
            <router-link to="/">分期付款</router-link>
          </li>
          <li>
            <router-link to="/">邮局汇款</router-link>
          </li>
          <li>
            <router-link to="/">公司转账</router-link>
          </li>
        </ul>
        <ul class="ft-top-nav link">
          <li class="ft-nav-title">售后服务</li>
          <li>
            <router-link to="/">售后政策</router-link>
          </li>
          <li>
            <router-link to="/">价格保护</router-link>
          </li>
          <li>
            <router-link to="/">退款说明</router-link>
          </li>
          <li>
            <router-link to="/">返修/退换货</router-link>
          </li>
          <li>
            <router-link to="/">取消订单</router-link>
          </li>
        </ul>
        <ul class="ft-top-nav link">
          <li class="ft-nav-title">特色服务</li>
          <li>
            <router-link to="/">夺宝岛</router-link>
          </li>
          <li>
            <router-link to="/">DIY装机</router-link>
          </li>
          <li>
            <router-link to="/">延保服务</router-link>
          </li>
          <li>
            <router-link to="/">尚品汇E卡</router-link>
          </li>
          <li>
            <router-link to="/">尚品汇通信</router-link>
          </li>
        </ul>
        <ul class="ft-top-nav">
          <li class="ft-nav-title">帮助中心</li>
          <li>
            <img src="./code.jpg" alt="code" />
          </li>
        </ul>
      </div>
      <div class="ft-bottom md-p">
        <!-- 站点信息列表 -->
        <ul class="siteInfo-list">
          <li class="siteInfo-item">关于我们</li>
          <li class="siteInfo-item">联系我们</li>
          <li class="siteInfo-item">关于我们</li>
          <li class="siteInfo-item">联系我们</li>
          <li class="siteInfo-item">关于我们</li>
          <li class="siteInfo-item">联系我们</li>
          <li class="siteInfo-item">关于我们</li>
          <li class="siteInfo-item">联系我们</li>
          <li class="siteInfo-item">关于我们</li>
          <li class="siteInfo-item">联系我们</li>
        </ul>
        <!-- 地址 -->
        <p class="address">地址：北京市昌平区宏福科技园综合楼6层</p>
        <!-- 备案号 -->
        <p class="md-m-b">京ICP备19006430号</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="less" scoped>
footer {
  background-color: #eaeaea;
}

.ft-top {
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid #e4e1e1;
}

.ft-top-nav {
  font-size: 12px;
  text-align: center;

  img {
    margin: auto 0;
    width: 121px;
  }
}

.ft-nav-title {
  font-weight: bold;
  font-size: 14px;
  padding-bottom: 8px;
}

.ft-bottom {
  color: #333;
  font-size: 12px;
  text-align: center;
  line-height: 16px;

  p {
    margin-top: 10px;
  }
}

.siteInfo-item {
  margin: auto;
  border-right: 1px solid #333;
  padding: 0 12px;

  &:last-child {
    border: none;
  }
}

// 站点信息列表
.siteInfo-list {
  display: flex;
  width: 730px;
  margin: 0 auto;
}
</style>

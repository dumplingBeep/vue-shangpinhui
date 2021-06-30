<template>
  <!-- 头部 -->
  <header>
    <!-- 顶部模块 -->
    <div class="hd-top">
      <div class="container">
        <!-- 顶部左边模块 -->
        <ul class="hd-top-user link">
          <li>尚品汇欢迎您！&nbsp;&nbsp;</li>
          <li v-if="nickName" class="user">
            <span class="sm-m-r">{{ nickName }}</span>
            <a @click="handleClick">退出登录</a>
          </li>
          <li v-else>
            请
            <router-link to="/login" class="top-login">登录</router-link>
            <router-link to="/register" class="style-red">免费注册</router-link>
          </li>
        </ul>
        <!-- 顶部右边模块 -->
        <ul class="hd-top-nav link">
          <li>
            <router-link to="/">我的订单</router-link>
          </li>
          <li>
            <router-link to="/">我的购物车</router-link>
          </li>
          <li>
            <router-link to="/">我的尚品汇</router-link>
          </li>
          <li>
            <router-link to="/">尚品汇会员</router-link>
          </li>
          <li>
            <router-link to="/">企业采购</router-link>
          </li>
          <li>
            <router-link to="/">关注尚品汇</router-link>
          </li>
          <li>
            <router-link to="/">合作招商</router-link>
          </li>
          <li>
            <router-link to="/">商家后台</router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- 底部模块 -->
    <div class="hd-bottom">
      <div class="container">
        <!-- 网站logo -->
        <router-link to="/" class="hd-logo">
          <img src="./Logo.png" alt="加载失败" />
        </router-link>
        <!-- 搜索模块 -->
        <div class="search-wrap">
          <form @submit.prevent="goToSearch" class="search-form">
            <input
              @keydown.enter="goToSearch"
              v-model="keyword"
              type="text"
              class="search-input sm-p-lr"
              placeholder="请输入搜索信息"
            />
            <input type="submit" class="search-btn" value="搜索" />
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { reqLogout } from './../../api/user';

export default {
  name: 'Header',
  data() {
    return {
      keyword: '',
    };
  },
  computed: {
    ...mapState('user', ['nickName']),
  },
  methods: {
    ...mapMutations('user', ['logout']),
    goToSearch() {
      const keyword = this.keyword.trim();
      const location = {
        name: 'Search',
        query: this.$route.query,
      };

      if (keyword) {
        location.params = { keyword };
      }

      this.$router.history.push(location);
    },

    async handleClick() {
      await reqLogout();
      this.logout();
      localStorage.removeItem('user');
      sessionStorage.removeItem('user');
    },
  },
};
</script>

<style lang="less" scoped>
// 头部
header {
  width: 100%;

  .container {
    display: flex;
    justify-content: space-between;
  }
}

// 顶部
.hd-top {
  background: #eaeaea;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
}

// 顶部左边用户模块
.hd-top-user {
  color: #333;
  display: flex;

  .user {
    a {
      cursor: pointer;
    }
  }
}

.top-login {
  border-right: 1px solid #b3aeae;
  padding-right: 6px;
  margin-right: 7px;
}

// 顶部右边模块
.hd-top-nav {
  display: flex;
  margin-right: -10px;

  li {
    a {
      padding: 0 10px;
      border-right: 1px solid #b3aeae;
    }

    &:last-child a {
      border: none;
    }
  }
}

// 底部模块
.hd-bottom {
  .container {
    display: flex;
  }
}

// logo模块
.hd-logo {
  display: block;

  img {
    margin: 25px 45px;
    width: 175px;
  }
}

// 搜索模块
.search-wrap {
  padding-top: 35px;
}

.search-form {
  display: flex;
}

.search-input {
  width: 478px;
  height: 28px;
  border: 2px solid #ea4a36;
  font-size: 12px;
  outline: none;
}

.search-btn {
  width: 68px;
  height: 32px;
  font-size: 12px;
  border: none;
  background-color: #ea4a36;
  color: #fff;
}
</style>

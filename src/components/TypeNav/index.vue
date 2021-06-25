<template>
  <nav class="type-nav">
    <div class="container">
      <!-- 导航栏标题 -->
      <div class="sidebar-nav">
        <h3 class="sidebar-nav-title">全部商品分类</h3>
        <!-- 侧边导航栏 -->
        <div @click="goToSearch" class="left-sidebar">
          <div v-for="category1 in baseCategoryList" :key="category1.categoryId" class="menu-item">
            <h3 class="menu-title">
              <a
                :data-categoryname="category1.categoryName"
                :data-categoryid="category1.categoryId"
                :data-level="1"
              >
                {{ category1.categoryName }}
              </a>
            </h3>
            <div class="submenu-list">
              <dl
                v-for="category2 in category1.categoryChild"
                :key="category2.categoryId"
                class="submenu-item"
              >
                <dt class="submenu-title sm-p-l">
                  <a
                    :data-categoryname="category2.categoryName"
                    :data-categoryid="category2.categoryId"
                    :data-level="2"
                  >
                    {{ category2.categoryName }}
                  </a>
                </dt>
                <dd class="link">
                  <a
                    v-for="category3 in category2.categoryChild"
                    :key="category3.categoryId"
                    :data-categoryname="category3.categoryName"
                    :data-categoryid="category3.categoryId"
                    :data-level="3"
                  >
                    {{ category3.categoryName }}
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <!-- 导航栏列表 -->
      <ul class="type-nav-list link">
        <li class="type-nav-item"><router-link to="/">服装城</router-link></li>
        <li class="type-nav-item"><router-link to="/">美妆馆</router-link></li>
        <li class="type-nav-item"><router-link to="/">尚品汇超市</router-link></li>
        <li class="type-nav-item"><router-link to="/">全球购</router-link></li>
        <li class="type-nav-item"><router-link to="/">闪购</router-link></li>
        <li class="type-nav-item"><router-link to="/">团购</router-link></li>
        <li class="type-nav-item"><router-link to="/">有趣</router-link></li>
        <li class="type-nav-item"><router-link to="/">秒杀</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { reqGetBaseCategory } from './../../api/carousel';

export default {
  name: 'TypeNav',
  data() {
    return {
      baseCategoryList: [],
    };
  },
  async mounted() {
    // 获取左侧边导航栏数据(发送请求)
    reqGetBaseCategory()
      .then((data) => {
        this.baseCategoryList = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    goToSearch(e) {
      // 获取菜单链接的自定义属性
      const { categoryname: categoryName, categoryid, level } = e.target.dataset;

      // 非导航链接元素不携带自定义属性，则不跳转
      if (!level) return;

      // 跳转
      this.$router.history.push({
        name: 'Search',
        query: {
          categoryName,
          [`category${level}Id`]: categoryid,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
nav.type-nav {
  width: 100%;
  border-bottom: 2px solid #e1251b;
  line-height: 45px;
  height: 45px;

  .container {
    display: flex;
  }
}

.sidebar-nav {
  position: relative;
}

// 导航栏标题
.sidebar-nav-title {
  width: 210px;
  background-color: #e1251b;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-align: center;
}

.left-sidebar {
  width: 210px;
  height: 459px;
  background-color: #fafafa;
  position: absolute;
  top: 47px;
  left: 0;
  z-index: 99;

  a:hover {
    text-decoration: none;
  }
}

.menu-item {
  &:hover .submenu-list {
    display: block;
  }

  &:hover {
    background: rgb(231, 231, 231);
  }
}

.menu-title {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  cursor: pointer;

  a {
    display: block;
    padding: 0 20px;
  }
}

.submenu-list {
  display: none;
  position: absolute;
  left: 210px;
  top: 0;
  width: 734px;
  min-height: 460px;
  border: 1px solid #ddd;
  background-color: #f7f7f7;
  padding: 0 4px 0 8px;
}

.submenu-item {
  width: 500px;
  padding: 8px 0;
  display: flex;

  a {
    float: left;
    padding: 0 8px;
    margin: 2px 0;
    border-left: 1px solid #ccc;
    font-size: 12px;
    line-height: 12px;
    color: #666;
    text-decoration: none;
    cursor: pointer;
  }
}

.submenu-title {
  min-width: 54px;
  font-weight: 700;
  text-align: right;

  a {
    width: 94%;
    border: none;
    padding: 0;
  }
}

// 导航栏列表
.type-nav-list {
  display: flex;
}

.type-nav-item {
  font-size: 16px;

  a {
    color: #333;
    padding: 0 22px;
  }
}
</style>

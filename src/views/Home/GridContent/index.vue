<template>
  <div class="mainnav">
    <div class="container">
      <!-- 侧边导航栏 -->
      <nav class="left-sidebar">
        <div
          v-for="baseCategory in baseCategoryList"
          :key="baseCategory.categoryId"
          class="menu-item"
        >
          <h3 class="menu-title">
            <router-link to="/">{{ baseCategory.categoryName }}</router-link>
          </h3>
          <div class="submenu-list">
            <dl
              v-for="categoryItem in baseCategory.categoryChild"
              :key="categoryItem.categoryId"
              class="submenu-item"
            >
              <dt class="submenu-title sm-p-l">
                <router-link to="/">{{ categoryItem.categoryName }}</router-link>
              </dt>
              <dd class="link">
                <router-link
                  v-for="category in categoryItem.categoryChild"
                  :key="category.categoryId"
                  to="/"
                >
                  {{ category.categoryName }}
                </router-link>
              </dd>
            </dl>
          </div>
        </div>
      </nav>

      <!-- 轮播图 -->
      <div class="center-swiper">
        <!-- Slider main container -->
        <div
          @mouseenter="swiper.autoplay.stop()"
          @mouseleave="swiper.autoplay.start()"
          class="swiper-container"
        >
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide"><img src="./banner1.jpg" alt="banner1" /></div>
            <div class="swiper-slide"><img src="./banner2.jpg" alt="banner1" /></div>
            <div class="swiper-slide"><img src="./banner3.jpg" alt="banner1" /></div>
            <div class="swiper-slide"><img src="./banner4.jpg" alt="banner1" /></div>
          </div>
          <!-- If we need pagination -->
          <div class="swiper-pagination"></div>

          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqSendBaseCategory } from './../../../api/home';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';

export default {
  name: 'GridContent',
  data() {
    return {
      baseCategoryList: [],
    };
  },
  async mounted() {
    // 获取左侧边导航栏数据(发送请求)
    try {
      const reqsponse = await reqSendBaseCategory();

      // 成功
      if (reqsponse.data.code === 200) {
        this.baseCategoryList = reqsponse.data.data;
      }
    } catch (error) {
      console.log(error);
    }

    this.swiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    //鼠标滑过pagination控制swiper切换
    for (let i = 0; i < this.swiper.pagination.bullets.length; i++) {
      this.swiper.pagination.bullets[i].onmouseover = function () {
        this.click();
      };
    }
  },
};
</script>

<style lang="less" scoped>
.mainnav {
  .container,
  .submenu-item {
    display: flex;
  }
}

.left-sidebar {
  width: 210px;
  height: 459px;
  background-color: #fafafa;
  position: relative;
  z-index: 99;

  a:hover {
    text-decoration: none;
  }
}

.menu-item {
  &:hover .submenu-list {
    display: block;
  }
}

.menu-title {
  height: 30px;
  line-height: 30px;
  padding: 0 20px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: rgb(231, 231, 231);
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

  a {
    float: left;
    padding: 0 8px;
    margin: 2px 0;
    border-left: 1px solid #ccc;
    font-size: 12px;
    color: #666;
    text-decoration: none;
  }
}

.submenu-title {
  min-width: 54px;
  font-weight: 700;

  a {
    border: none;
    padding: 0;
  }
}

// 轮播图
.center-swiper {
  margin: 5px;
  width: 730px;
  position: relative;
  z-index: 98;
}
</style>

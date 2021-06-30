<template>
  <div class="mainnav">
    <div class="container">
      <!-- 轮播图 -->
      <div class="center-swiper">
        <Carousel :bannerList="banners" />
      </div>

      <div class="right-sidebar">
        <!-- 快报模块 -->
        <div class="sidebar-report">
          <p class="side-title link">
            尚品汇快报
            <a href="#">更多></a>
          </p>
          <!-- 信息列表 -->
          <div class="report-list link">
            <a href="#" class="report-item">
              <span>[特惠]</span>
              备战开学季 全民半价购数码
            </a>
            <a href="#" class="report-item">
              <span>[公告]</span>
              备战开学季 全民半价购数码
            </a>
            <a href="#" class="report-item">
              <span>[特惠]</span>
              备战开学季 全民半价购数码
            </a>
            <a href="#" class="report-item">
              <span>[公告]</span>
              备战开学季 全民半价购数码
            </a>
            <a href="#" class="report-item">
              <span>[特惠]</span>
              备战开学季 全民半价购数码
            </a>
          </div>
        </div>
        <!-- 服务模块 -->
        <div class="service-list link">
          <a href="#" class="service-item">
            <i class="service-item-icon"></i>
            <p>话费</p>
          </a>
          <a href="#" class="service-item">
            <i class="service-item-icon"></i>
            <p>机票</p>
          </a>
          <a href="#" class="service-item">
            <i class="service-item-icon"></i>
            <p>电影票</p>
          </a>
          <a href="#" class="service-item">
            <i class="service-item-icon"></i>
            <p>游戏</p>
          </a>
          <a href="#" class="service-item">
            <i class="service-item-icon"></i>
            <p>彩票</p>
          </a>
          <a href="#" class="service-item">
            <i class="service-item-icon"></i>
            <p>加油站</p>
          </a>
          <a href="#" class="service-item">
            <i class="service-item-icon"></i>
            <p>酒店</p>
          </a>
          <a href="#" class="service-item">
            <i class="service-item-icon"></i>
            <p>火车票</p>
          </a>
          <a href="#" class="service-item">
            <i class="service-item-icon"></i>
            <p>众筹</p>
          </a>
          <a href="#" class="service-item">
            <i class="service-item-icon"></i>
            <p>理财</p>
          </a>
          <a href="#" class="service-item">
            <i class="service-item-icon"></i>
            <p>礼品卡</p>
          </a>
          <a href="#" class="service-item">
            <i class="service-item-icon"></i>
            <p>白条</p>
          </a>
        </div>
        <!-- 广告图 -->
        <img class="sidebar-banner" src="./ad1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from './../../../components/Carousel';
import { reqGetBanners } from './../../../api/home';

export default {
  name: 'GridContent',
  data() {
    return {
      baseCategoryList: [],
      banners: [],
    };
  },
  components: {
    Carousel,
  },
  mounted() {
    reqGetBanners()
      .then((res) => {
        this.banners = res;
      })
      .catch((e) => {
        console.log(e);
      });
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

// 轮播图
.center-swiper {
  width: 730px;
  height: 454px;
  margin: 5px;
  margin-left: 215px;
  position: relative;
  z-index: 98;
}

.right-sidebar {
  width: 250px;
  margin-top: 5px;
  color: #333;
}

// 快报模块
.sidebar-report {
  border: 1px solid #e4e4e4;
}

.side-title {
  padding: 5px 10px;
  margin: 5px 5px 0;
  line-height: 22px;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 1px solid #e4e4e4;

  a {
    float: right;
    color: #333;
    font-size: 12px;
    text-decoration: none;
    font-weight: normal;
  }
}

// 信息列表
.report-list {
  padding: 5px 15px;

  a {
    line-height: 26px;
    height: 26px;
    display: block;
    font-size: 12px;
    color: #333;
    text-decoration: none;

    & > span {
      font-weight: bold;
    }
  }
}

// 服务模块
.service-list {
  border-right: 1px solid #e4e4e4;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  & a:nth-child(1) i {
    background-position: 0px -5px;
  }
  & a:nth-child(2) i {
    background-position: -65px -5px;
  }
  & a:nth-child(3) i {
    background-position: -126px -5px;
  }
  & a:nth-child(4) i {
    background-position: -190px -5px;
  }
  & a:nth-child(5) i {
    background-position: 0px -76px;
  }
  & a:nth-child(6) i {
    background-position: -62px -76px;
  }
  & a:nth-child(7) i {
    background-position: -128px -76px;
  }
  & a:nth-child(8) i {
    background-position: -190px -76px;
  }
  & a:nth-child(9) i {
    background-position: 0px -146px;
  }
  & a:nth-child(10) i {
    background-position: -65px -146px;
  }
  & a:nth-child(11) i {
    background-position: -126px -146px;
  }
  & a:nth-child(12) i {
    background-position: -194px -146px;
  }
}

.service-item {
  width: 25%;
  height: 64px;
  box-sizing: border-box;
  border-left: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  text-align: center;
  font-size: 12px;

  p {
    line-height: 22px;
  }
}

.service-item-icon {
  display: block;
  height: 40px;
  background-image: url('./../../../assets/images/icons.png');
}

// 广告图
.sidebar-banner {
  opacity: 0.8;
  transition: opacity 400ms;
  margin-top: 7px;
  width: 250px;

  &:hover {
    opacity: 1;
  }
}
</style>

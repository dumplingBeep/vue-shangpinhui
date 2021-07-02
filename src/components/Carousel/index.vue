<template>
  <!-- Slider main container -->
  <div
    @mouseenter="swiper.autoplay.stop()"
    @mouseleave="swiper.autoplay.start()"
    class="swiper-container"
    ref="swiper"
  >
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div v-for="banner in bannerList" :key="banner.id" class="swiper-slide">
        <img v-lazy="banner.imgUrl" :alt="banner.id" />
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css';

export default {
  name: 'Carousel',
  data() {
    return {
      swiper: {
        autoplay: {
          stop: () => {},
          start: () => {},
        },
      },
    };
  },
  props: {
    bannerList: {
      type: Array,
      required: true,
    },
  },
  watch: {
    bannerList: {
      handler(imgList) {
        if (!imgList.length) return;

        // 在DOM更新完成后执行回调
        this.$nextTick(() => {
          this.swiper = new Swiper(this.$refs.swiper, {
            autoplay: {
              delay: 2000,
              disableOnInteraction: false,
            },
            loop: true, // 循环模式选项

            // 分页器
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },

            // 前进后退按钮
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
        });
      },
      immediate: true,
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 100%;

  img {
    width: 100%;
  }
}
</style>

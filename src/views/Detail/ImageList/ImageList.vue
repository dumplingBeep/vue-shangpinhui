<template>
  <div ref="swiper" class="swiper-container sm-m-t">
    <div class="swiper-wrapper">
      <div v-for="(skuImage, index) in skuImageList" :key="skuImage.id" class="swiper-slide">
        <img
          @mouseenter="$emit('update:currentIndex', index)"
          v-lazy="skuImage.imgUrl"
          :alt="skuImage.imgName"
          :class="{
            active: currentIndex === index,
          }"
        />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  name: 'ImageList',
  props: {
    skuImageList: {
      type: Array,
      default: () => [],
    },
    currentIndex: {
      type: Number,
      required: true,
    },
  },
  watch: {
    skuImageList() {
      this.$nextTick(() => {
        new Swiper(this.$refs.swiper, {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 20,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 402px;
  box-sizing: border-box;
  padding: 0 18px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      &:hover {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>

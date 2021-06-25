<template>
  <main>
    <TypeNav />
    <GridContent />
    <!--今日推荐-->
    <TodayRecommend />
    <!-- 商品排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!--楼层-->
    <Floor v-for="floorInfo in floorList" :key="floorInfo.id" :floorInfo="floorInfo" />
    <!--商标-->
    <Brand />
  </main>
</template>

<script>
import TypeNav from './../../components/TypeNav';
import GridContent from './GridContent';
import Rank from './Rank';
import Like from './Like';
import Floor from './Floor';
import Brand from './Brand';
import TodayRecommend from './TodayRecommend';

import { reqGetFloors } from './../../api/home';

export default {
  name: 'Home',
  components: {
    TypeNav,
    GridContent,
    Rank,
    Like,
    Floor,
    Brand,
    TodayRecommend,
  },
  data() {
    return {
      floorList: [],
    };
  },
  async mounted() {
    this.floorList = await reqGetFloors();
  },
};
</script>

<style></style>

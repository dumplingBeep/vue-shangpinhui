<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer v-if="!$route.meta.isFooterHide" />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less"></style>

<template>
  <main>
    <GroupNav />
    <GridContent />
  </main>
</template>

<script>
import GroupNav from './GroupNav';
import GridContent from './GridContent';

export default {
  name: 'Home',
  components: {
    GroupNav,
    GridContent,
  },
};
</script>

<style></style>

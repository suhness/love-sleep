<template>
  <div class="my">
    <section>我的</section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "../components/common/Tabbar.vue";
export default {
  components: {
    Tabbar,
  },
};
</script>

<style>
.my {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
section {
  flex: 1;
  overflow: hidden;
}
</style>
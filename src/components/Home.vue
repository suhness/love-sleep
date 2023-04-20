<template>
  <div class="home">
    <header>
      <div class="title">首页</div>
    </header>
    <section>
      <!-- 轮播图 -->
      <div class="swipeBox">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item, index) in swiperList" :key="index">
            <img :src="item.url" alt="" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "../components/common/Tabbar.vue";
export default {
  data() {
    return {
      swiperList: [],
    };
  },
  components: {
    Tabbar,
  },
  async created() {
    const res = await this.$axios.get({
      url: "/api/test",
    });
    console.log(res);
    this.swiperList = res.data;
    console.log("111", this.swiperList);
  },
};
</script>

<style scoped lang='scss'>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
header {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.6rem;
  background-color: yellow;
  .title {
    margin: 0 0.2667rem;
    font-size: 0.5333rem;
    height: 100%;
    line-height: 1.6rem;
  }
}
section {
  flex: 1;
  overflow: hidden;
  .swipeBox {
    margin: 0.2667rem;
    overflow: hidden;
    .my-swipe {
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.2667rem;
      }
    }
  }
}
</style>
<template>
  <div class="tabbar">
    <ul>
      <li
        v-for="(item, index) in tabbar"
        :key="index"
        @click="jumpTab(item.path)"
      >
        <img
          :src="$route.path.includes(item.path) ? item.select : item.icon"
          alt=""
        />

        <span :class="$route.path.includes(item.path) ? 'selectIcon' : ''">{{
          item.name
        }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabbar: [
        {
          name: "首页",
          icon: "./images/home_N.png",
          select: "./images/home_H.png",
          path: "/home",
        },
        {
          name: "播放器",
          icon: "./images/player_N.png",
          select: "./images/player_H.png",
          path: "/player",
        },
        {
          name: "我的",
          icon: "./images/my_N.png",
          select: "./images/my_H.png",
          path: "/my",
        },
      ],
    };
  },
  methods: {
    //跳转页面
    jumpTab(path) {
      console.log("跳转");
      //解决重复跳转
      if (this.$route.path == path) {
        return;
      }
      if (path == "/player") {
        this.$router.push(path);
      } else {
        this.$router.replace(path);
      }
    },
  },
};
</script>

<style scoped lang='scss'>
.tabbar ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 1.6rem;
  background-color: #fff;
  border-top: 1px solid #ccc;
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    padding: 0 0.5333rem;
    img {
      width: 0.8rem;
      color: #ccc;
    }
    span {
      font-size: 0.3733rem;
      color: #808080;
    }
  }
}
.selectIcon {
  color: #000 !important;
}
</style>
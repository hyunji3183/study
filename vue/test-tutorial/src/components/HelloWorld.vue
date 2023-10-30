<template>
  <div class="hello">
    <div class="box1">
      <div class="text_box1">{{ name }}</div>
      <img :src="changeUrl" />
      <button @click="imgChangeEvent">익명이 변신 ~ ★</button>
    </div>
    <div class="box2">
      <div class="text_box2">{{ name2 }}</div>
      <img :src="changeUrl2" />
      <button @click="imgChangeEvent2">익명이 변신 ~ ★</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "액스맨 싫어용",
      name2: "나는 으른이다",
      changeUrl: "/X.jpg",
      changeUrl2: "/익명4.jpg",
    };
  },
  methods: {
    imgChangeEvent() {
      this.name = "예스맨 죠와용";
      this.changeUrl = "/O.jpg";
    },
    imgChangeEvent2() {
      this.name2 = "그래서 취했따..";
      this.changeUrl2 = "/익명5.jpg";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "src/assets/css/HelloWorld.scss";
</style>
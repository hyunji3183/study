<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="test">{{ num }}</div>
    <button @click="imgChange" class="btn">익명이 변신 ~★</button>
    <img :src="reUrl" class="photo" />
  </div>
</template>
//이벤트를 발생시킬때에는 v-bind사용, :으로만 표기해도 정상 작동함
<script>
export default {
  data() {
    return { num: "나능 으릉이다! 아마더...", reUrl: "/익명.jpg" };
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    imgChange() {
      this.num = "히히 선물이얌";
      this.reUrl = "/익명3.jpg";
      console.log(this.num);
    },
  },
  mounted() {
    const ele = document.querySelector(".hello");
    console.log(ele);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "/src/assets/css/test.scss";
</style>

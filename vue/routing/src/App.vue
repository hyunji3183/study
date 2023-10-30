<template>
  <router-link to="/">HOME</router-link>
  <router-link :to="{ name: 'ListPage', query:{num:1000} }">LIST</router-link>
  <router-link to="/class">Class</router-link>

  <router-view />
</template>

<script>
export default {
  name: "App"
};
</script>

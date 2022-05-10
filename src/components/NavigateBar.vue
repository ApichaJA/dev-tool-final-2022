<template>
  <div>
    <img class="banner" :src="banner" />
  </div>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    banner: require("@/assets/img/banner.jpg"),
  }),
};
</script>

<style>
.banner {
  width: 100%;
  display: block;
  flex-shrink: 0;
}
</style>

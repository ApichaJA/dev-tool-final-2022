<template>
  <div class="footer">
    <div class="true-icon">
      <img :src="logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",

  data: () => ({
    logo: require("@/assets/img/TrueLogo.svg"),
  }),
};
</script>

<style>
.footer {
  width: 100%;
  display: block;
  background-color: white;
  position: relative;
}
.true-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

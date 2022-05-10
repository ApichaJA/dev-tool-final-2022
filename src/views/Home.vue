<template>
  <div class="home">
    <div class="d-flex justi"></div>
    <v-card class="card-box ma-9 pa-7">
      <div
        class="font-weight-bold text-center"
        style="color: rgb(255, 0, 0); font-size: 22px; margin-bottom: 40px;"
      >
        กรุณากรอกข้อมูลเพื่อตรวจสอบ
      <div>
        Please fill out the information to verify.
      </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({}),
  methods: {
    ffff() {
      this.$wait.start("app loading");
    },
  },
};
</script>

<style>
.card-box {
  border-radius: 20px !important;
  max-width: 960px;
}
</style>

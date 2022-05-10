<template>
  <v-app class="screen">
    <v-main>
      <template v-slot:default>
        <NavigateBar />
        <router-view />
      </template>
    </v-main>
    <div class="text-center" style="background-color: black">
      <v-overlay :absolute="true" :opacity="0.8" :value="isLoading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </div>
  </v-app>
</template>

<script>
import NavigateBar from "@/components/NavigateBar";

export default {
  name: "App",
  components: {
    NavigateBar,
  },
  computed: {
    isLoading() {
      return this.$wait.is("app loading");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<template>
  <div class="text-center">
    <v-dialog v-model="active" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> OTP </v-card-title>

        <v-card-text> รหัส OTP ของคุณคือ {{code}} </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="close()"> ใช้งาน </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "otp",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    code: {
      type: String,
      default: () => "",
    },
  },
  methods:{
      close(){
          this.$emit('close')
      }
  }
};
</script>

<template>
  <div class="home">
    <ValidationObserver ref="mobileForm">
      <div class="d-flex justify-center" style="max-width: 1980px">
        <v-card class="card-box ma-9 pa-7">
          <div
            class="font-weight-bold text-center"
            style="color: rgb(255, 0, 0); font-size: 22px; margin-bottom: 40px"
          >
            กรุณากรอกข้อมูลเพื่อตรวจสอบ
            <div>Please fill out the information to verify.</div>
          </div>
          <div class="info-otp text-center">
            กรอกเบอร์โทรศัพท์มือถือ <br />เพื่อรับ OTP เพื่อยืนยันตัวตน
            <br />Please enter your mobile phone number. <br />to receive OTP to
            verify identity
          </div>
          <br />
          <div class="otp-form d-flex justify-center">
            <div>
              <div class="font-weight-bold">
                เบอร์โทรศัพท์มือถือ / Mobile number
                <span style="color: red">*</span>
              </div>
              <ValidationProvider
                name="mobile"
                mode="eager"
                :rules="{
                  required: true,
                  max: 10,
                  regex: /^((0[2-9])+\d{7,8})$/,
                }"
                v-slot="{ errors }"
              >
                <v-text-field
                  class="custom-placeholer-size mt-1"
                  v-model="mobileNumber"
                  @keypress="(event) => filter(event)"
                  max="10"
                  placeholder="Please enter your mobile number"
                  outlined
                  style="border-radius: 10px; width: 320px"
                  dense
                ></v-text-field>
                <span class="error-text">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>

          <div class="link-text">
            ลูกค้า TrueOnline และ TrueVision คลิกที่นี่
          </div>
          <div class="link-text mt-1">
            For TrueOnline and Truevision customer click here
          </div>

          <div class="d-flex justify-center mt-8">
            <v-btn
              @click="activeOTP"
              class="btn-otp font-weight-bold"
              color="red"
              :disabled="checkNumber"
              >ขอรหัส OTP / Get OTP</v-btn
            >
          </div>
        </v-card>
      </div>
    </ValidationObserver>
    <OtpModal @close="goNext()" :active="isActive" :code="code" />
  </div>
</template>

<script>
import OtpModal from "@/components/OtpModal";

export default {
  name: "Home",
  data: () => ({
    mobileNumber: "",
    isActive: false,
    code: "",
  }),
  components: {
    OtpModal,
  },
  computed: {
    checkNumber() {
      return this.mobileNumber.length !== 10;
    },
  },
  methods: {
    goNext() {
      this.isActive = false
      setTimeout(() => {
        this.$wait.end("app loading");
      }, 1000)
        this.$wait.start("app loading");
    },
    activeOTP() {
      this.isActive = true,
        this.code = Math.floor(100000 + Math.random() * 900000).toString();
    },
    filter(evt) {
      evt = evt ? evt : window.event;
      let expect = evt.target.value.toString() + evt.key.toString();
      if (!/^[-+]?[0-9]*\.?[0-9]*$/.test(expect)) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
  },
  created() {
    this.$nextTick(() => {
      document.querySelector(".btn-otp").classList.remove("v-btn--disabled");
    });
  },
};
</script>

<style>
.home {
  background-color: rgb(250, 250, 250);
  padding-bottom: 120px !important;
}
.card-box {
  border-radius: 20px !important;
  width: 860px;
  max-width: 860px !important;
}
.info-otp {
  font-size: 15px;
  line-height: 29px;
}
.link-text {
  text-decoration: underline;
  color: red;
  text-align: center;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
}
.btn-otp {
  white-space: 0px !important;
  width: 100%;
  max-width: 270px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border-radius: 20px;
  cursor: pointer;
  overflow: hidden;
  color: white !important;
}
.custom-placeholer-size input::placeholder {
  font-size: 12px;
}

button.v-btn[disabled] {
  background-color: red !important;
  opacity: 0.3;
  white-space: 0px !important;
}
</style>

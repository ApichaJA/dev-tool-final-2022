import { extend, localize } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

extend('required', required)

localize({
  en: {
    fields: {
      mobile: {
        required: 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง / Please enter your mobile number',
        regex: 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง / Please enter your mobile number',
        max: 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง / Please enter your mobile number',
      },
      firstName:{
        required: 'กรุณากรอก ชื่อจริง',
      },
      lastName:{
        required: 'กรุณากรอก นามสกุล',
      },
    }
  }
});
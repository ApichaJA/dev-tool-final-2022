import { extend, localize } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

extend('required', required)

localize({
  en: {
    fields: {
      mobile: {
        required: 'กรุณากรอก เบอร์โทรศัพท์',
        regex: 'กรุณากรอก เบอร์โทรศัพท์ให้ถูกต้อง',
        max: 'กรุณากรอก เบอร์โทรศัพท์ 10 หลัก',
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
import { required } from '@vuelidate/validators'

export default {
  data () {
    return {
      name: '',
      email: '',
      github: '',
    }
  },
  validations () {
    return {
      name: { required }, 
      email: { required },
      github: { required },
    }
  }
}
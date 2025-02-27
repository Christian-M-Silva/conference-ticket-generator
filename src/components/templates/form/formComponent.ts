import { required, helpers, email } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'


export default {
  setup () {
    return { v$: useVuelidate() }
  },

  data () {
    return {
      name: '',
      email: '',
      github: '',
    }
  },
  validations () {
    return {
      name: { required: helpers.withMessage('The name is required', required) }, 
      email: { required: helpers.withMessage('The e-mail is required', required), email: helpers.withMessage('Data must be in an email format', email) },
      github: { required: helpers.withMessage('The github is required', required) },
    }
  }
}
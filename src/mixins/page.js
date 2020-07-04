import { mapMutations } from 'vuex'

export default {
  created () {
    console.log('page mixin - created()')
    this.setMain(false)
  },
  methods: {
    ...mapMutations([
      'setMain'
    ])
  }
}

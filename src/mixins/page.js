import { mapMutations } from 'vuex'

export default {
  created () {
    this.page_setMain(false)
  },
  methods: {
    ...mapMutations({
      page_setMain: 'setMain',
      page_setTitle: 'setTitle'
    })
  }
}

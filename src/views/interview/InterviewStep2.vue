<template>
  <div>
    <h1>InterviewStep2 page</h1>
  </div>
</template>

<script>
import pageMixin from '@/mixins/page'

export default {
  name: 'InterviewStep2',
  mixins: [pageMixin],
  data: () => {
    return {
      questionSetList: []
    }
  },
  async created () {
    this.questionSetList = this.$route.params.questionSetList
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>

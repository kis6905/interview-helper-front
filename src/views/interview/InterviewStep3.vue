<template>
  <div>
    Step3
  </div>
</template>

<script>
import pageMixin from '@/mixins/page'

export default {
  name: 'InterviewStep3',
  mixins: [pageMixin],
  data: () => {
    return {
      questionSetList: []
    }
  },
  async created () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>

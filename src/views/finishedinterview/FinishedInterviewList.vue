<template>
  <div>
    <h1>FinishedInterviewList page</h1>
  </div>
</template>

<script>
import pageMixin from '@/mixins/page'

export default {
  name: 'FinishedInterviewList',
  mixins: [pageMixin],
  data: () => {
    return {
    }
  },
  created () {
    this.page_setTitle({ text: '면접 완료 목록', icon: 'mdi-file-account-outline' })
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>

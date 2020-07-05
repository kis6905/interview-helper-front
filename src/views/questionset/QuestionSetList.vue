<template>
  <div>
    <h1>QuestionSetList page</h1>
  </div>
</template>

<script>
import pageMixin from '@/mixins/page'

export default {
  name: 'QuestionSetList',
  mixins: [pageMixin],
  data: () => {
    return {
      setList: []
    }
  },
  async created () {
    this.setList = await this.API.getQuestionSetList()
    console.log(this.setList)
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>

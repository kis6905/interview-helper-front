<template>
  <div>
    <b-button
      class="mb-2"
      block
      pill
      variant="outline-success"
      @click="handleClickAdd">
      <b-icon-plus-circle-fill></b-icon-plus-circle-fill> 만들기
    </b-button>
    <ListCardType
      :items="items"
      @click-item="handleClickItem">
    </ListCardType>
  </div>
</template>

<script>
import pageMixin from '@/mixins/page'

export default {
  name: 'QuestionSetList',
  mixins: [pageMixin],
  data: () => {
    return {
      items: []
    }
  },
  async created () {
    this.page_setTitle({ text: '질문 Set', icon: 'card-list' })
    const setList = await this.API.getQuestionSetList()
    this.items = setList.map(set => {
      return { ...set, title: set.setName }
    })
  },
  methods: {
    handleClickItem (item) {
      console.log(item)
      this.$router.push({ name: 'QuestionSetDetail', params: { detail: item, mode: 'detail' } })
    },
    handleClickAdd () {
      console.log('click Add')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

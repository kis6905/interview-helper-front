<template>
  <div>
    <v-btn
      class="mb-2"
      block
      outlined
      color="green accent-4"
      @click="handleClickAdd">
      <v-icon class="mr-1">mdi-plus-circle</v-icon>만들기
    </v-btn>
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
    this.page_setTitle({ text: '질문 Set', icon: 'mdi-clipboard-text-outline' })
    const setList = await this.API.getQuestionSetList()
    this.items = setList.map(set => {
      return { ...set, title: set.setName }
    })
  },
  methods: {
    handleClickItem (item) {
      this.$router.push({ name: 'QuestionSetDetail', params: { detail: item, mode: 'detail' } })
    },
    handleClickAdd () {
      this.$router.push({ name: 'QuestionSetDetail', params: { mode: 'regist' } })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

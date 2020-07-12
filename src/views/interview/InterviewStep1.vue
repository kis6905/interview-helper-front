<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-select
          v-model="selectedQuestionSetIds"
          :items="selectItems"
          ref="selectSet"
          attach
          chips
          label="질문 Set을 선택해주세요"
          multiple
          clearable>
        </v-select>
      </v-col>
    </v-row>
    <v-btn
      class="mb-2"
      block
      outlined
      color="indigo lighten-5"
      :disabled="selectedQuestionSetIds.length === 0"
      @click="handleNextStep">
      <v-icon class="mr-1">mdi-arrow-right-drop-circle-outline</v-icon>시작
    </v-btn>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import pageMixin from '@/mixins/page'

export default {
  name: 'InterviewStep1',
  mixins: [pageMixin],
  data: () => {
    return {
      questionSetList: [],
      selectItems: [],
      selectedQuestionSetIds: [1]
    }
  },
  async created () {
    this.page_setTitle({ text: '면접 시작', icon: 'mdi-account-tie' })
    this.store_initInterview()
    this.questionSetList = await this.API.getQuestionSetList()

    this.selectItems = this.questionSetList.map((set) => {
      return { text: set.setName, value: set.setId }
    })

    setTimeout(() => {
      this.$refs.selectSet.focus()
      this.selectedQuestionSetIds = []
    }, 100)
  },
  methods: {
    ...mapMutations({
      store_initInterview: 'initInterview',
      store_setInterviewQuestionSetList: 'setInterviewQuestionSetList'
    }),
    handleNextStep () {
      const filteredSetList = this.questionSetList.filter((set) => this.selectedQuestionSetIds.includes(set.setId))
      this.store_setInterviewQuestionSetList({ questionSetList: this._.cloneDeep(filteredSetList) })
      this.$router.push({ name: 'InterviewStep2' })
    }
  },
  computed: {
    ...mapGetters({
      store_interview: 'interview'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>

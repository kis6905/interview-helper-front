<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-dialog
          ref="dialog"
          v-model="interviewDateModal"
          :return-value.sync="store_interview.interviewDate"
          persistent
          width="290px">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="store_interview.interviewDate"
              label="면접 일"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
              hide-details>
            </v-text-field>
          </template>
          <v-date-picker
            v-model="store_interview.interviewDate"
            scrollable
            color="green darken-3"
            class="green darken-3"
            locale="en">
            <v-spacer></v-spacer>
            <v-btn text color="default" @click="interviewDateModal = false">Cancel</v-btn>
            <v-btn text color="default" @click="$refs.dialog.save(store_interview.interviewDate)">OK</v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
      <v-col cols="12">
        <v-text-field
          ref="firstTarget"
          v-model="store_interview.interviewer"
          :rules="validationRules.interviewerRule"
          label="면접관"
          required>
        </v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="store_interview.interviewee"
          :rules="validationRules.intervieweeRule"
          label="피면접자"
          required>
        </v-text-field>
      </v-col>
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
      color="green"
      :disabled="disabledNextButton"
      @click="handleNextStep">
      Next Step<v-icon class="ml-1">mdi-arrow-right</v-icon>
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
      selectedQuestionSetIds: [1],
      interviewDateModal: false,
      validForm: false,
      validationRules: {
        interviewerRule: [
          (v) => !!v || '면접관은 필수입니다.'
        ],
        intervieweeRule: [
          (v) => !!v || '피면접자는 필수입니다.'
        ]
      }
    }
  },
  async created () {
    this.store_initInterview()
    this.questionSetList = await this.API.getQuestionSetList()

    this.selectItems = this.questionSetList.map((set) => {
      return { text: set.setName, value: set.setId }
    })

    setTimeout(() => {
      this.$refs.firstTarget.focus()
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
    }),
    disabledNextButton () {
      if (!this.store_interview.interviewDate) {
        return true
      }
      if (this.selectedQuestionSetIds.length === 0) {
        return true
      }
      if (!this.store_interview.interviewer) {
        return true
      }
      if (!this.store_interview.interviewee) {
        return true
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

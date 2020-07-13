<template>
  <div>
    <v-toolbar
      class="pl-0 mb-2"
      color="light-blue darken-3"
      height="30px">
      <v-icon>mdi-menu-right</v-icon>
      기본 정보
    </v-toolbar>
    <v-container class="mb-2">
      <v-row class="mb-3">
        <v-col cols="4" class="pt-0 pb-0">
          면접일
        </v-col>
        <v-col cols="8" class="pt-0 pb-0 pl-5">
          {{ interview.interviewDate }}
        </v-col>
      </v-row>
      <v-row class="mb-3">
        <v-col cols="4" class="pt-0 pb-0">
          피면접자
        </v-col>
        <v-col cols="8" class="pt-0 pb-0 pl-5">
          {{ interview.interviewee }}
        </v-col>
      </v-row>
      <v-row class="mb-1">
        <v-col cols="4" class="pt-0 pb-0">
          면접관
        </v-col>
        <v-col cols="8" class="pt-0 pb-0 pl-5">
          {{ interview.interviewer }}
        </v-col>
      </v-row>
    </v-container>
    <v-toolbar
      class="pl-0 mb-0"
      color="light-blue darken-3"
      height="30px">
      <v-icon>mdi-menu-right</v-icon>
      총평
    </v-toolbar>
    <v-container class="mb-2">
      <v-row class="align-items-center">
        <v-col cols="4" class="pt-0 pb-0">
          의사소통
        </v-col>
        <v-col cols="8" class="pt-0 pb-0">
          <v-rating
            v-model="interview.communicationRating"
            size="25"
            length="5"
            half-increments
            color="yellow accent-4"
            background-color="grey darken-1"
            readonly>
          </v-rating>
        </v-col>
      </v-row>
      <v-row class="align-items-center">
        <v-col cols="4" class="pt-0 pb-0">
          전문성
        </v-col>
        <v-col cols="8" class="pt-0 pb-0">
          <v-rating
            v-model="interview.technicalRating"
            size="25"
            length="5"
            half-increments
            color="yellow accent-4"
            background-color="grey darken-1"
            readonly>
          </v-rating>
        </v-col>
      </v-row>
      <v-row class="align-items-center">
        <v-col cols="4" class="pt-0 pb-0">
          기대감
        </v-col>
        <v-col cols="8" class="pt-0 pb-0">
          <v-rating
            v-model="interview.expectationRating"
            size="25"
            length="5"
            half-increments
            color="yellow accent-4"
            background-color="grey darken-1"
            readonly>
          </v-rating>
        </v-col>
      </v-row>
      <v-row class="align-items-center mt-5 mb-2">
        <v-col cols="12" class="pt-0 pb-0">
          <v-textarea
            v-model="interview.comment"
            outlined
            label="면접관 의견"
            placeholder="의견 없음"
            :rows="3"
            hide-details
            filled
            no-resize
            readonly>
          </v-textarea>
        </v-col>
      </v-row>
    </v-container>
    <div
      v-for="(set) in interview.questionSetList"
      :key="'set' + set.setId">
      <v-toolbar
        class="pl-0 mb-2"
        color="teal darken-3"
        height="30px">
        <v-icon>mdi-menu-right</v-icon>
        질문 Set<v-icon>mdi-chevron-right</v-icon>{{ set.setName }}
      </v-toolbar>
      <v-container>
        <v-row
          v-for="(question, index) in set.questionList"
          :key="'question' + question.questionId"
          class="mb-2">
          <v-col cols="12" class="pt-0 pb-2">
            <v-row>
              <v-col cols="12">
                {{ (index + 1) + '. ' + question.question }}
              </v-col>
            </v-row>
            <v-row class="align-items-center">
              <v-col cols="2" class="pt-0 pb-0">
                평점
              </v-col>
              <v-col cols="10" class="pt-0 pb-0">
                <v-rating
                  v-model="question.rating"
                  size="25"
                  length="5"
                  half-increments
                  color="yellow accent-4"
                  background-color="grey darken-1"
                  readonly>
                </v-rating>
              </v-col>
            </v-row>
            <v-row class="align-items-center">
              <v-col cols="2" class="pt-0 pb-0">
                의견
              </v-col>
              <v-col cols="10" class="pt-0 pb-0">
                <v-text-field
                  class="pt-0 pl-2"
                  v-model="question.comment"
                  hide-details
                  readonly>
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import pageMixin from '@/mixins/page'

export default {
  name: 'FinishedInterviewDetail',
  mixins: [pageMixin],
  data: () => {
    return {
      interview: {
        interviewDate: '',
        interviewer: '',
        interviewee: '',
        communicationRating: 0,
        technicalRating: 0,
        expectationRating: 0,
        comment: '',
        questionSetList: []
      }
    }
  },
  created () {
    this.interview = this.$route.params.interview
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>

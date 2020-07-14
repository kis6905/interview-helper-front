<template>
  <div>
    <div
      v-for="(set) in store_interview.questionSetList"
      :key="set.setId">
      <v-toolbar
        class="pl-0 mb-1"
        color="light-blue darken-3"
        height="30px">
        <v-icon>mdi-menu-right</v-icon>
        {{ set.setName }}
      </v-toolbar>
      <v-container>
        <v-row
          v-for="(question, index) in set.questionList"
          :key="question.questionId"
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
                  background-color="grey darken-1">
                </v-rating>
                <v-slider
                  v-model="question.rating"
                  step="10"
                  thumb-size="100"
                  hide-details
                  ticks="always">
                </v-slider>
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
                  hide-details>
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-btn
      class="mb-2"
      block
      color="green"
      outlined
      @click="handleNextStep">
      Next Step<v-icon class="ml-1">mdi-arrow-right</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import pageMixin from '@/mixins/page'

export default {
  name: 'InterviewStep2',
  mixins: [pageMixin],
  data: () => {
    return {
    }
  },
  async created () {
    console.log(this.store_interview)
  },
  methods: {
    handleNextStep () {
      this.$router.push({ name: 'InterviewStep3' })
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

<template>
  <div>
    <v-toolbar
      class="pl-0 mb-1"
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
            v-model="store_interview.communicationRating"
            size="25"
            length="5"
            half-increments
            color="yellow accent-4"
            background-color="grey darken-1">
          </v-rating>
        </v-col>
      </v-row>
      <v-row class="align-items-center">
        <v-col cols="4" class="pt-0 pb-0">
          전문성
        </v-col>
        <v-col cols="8" class="pt-0 pb-0">
          <v-rating
            v-model="store_interview.technicalRating"
            size="25"
            length="5"
            half-increments
            color="yellow accent-4"
            background-color="grey darken-1">
          </v-rating>
        </v-col>
      </v-row>
      <v-row class="align-items-center">
        <v-col cols="4" class="pt-0 pb-0">
          기대감
        </v-col>
        <v-col cols="8" class="pt-0 pb-0">
          <v-rating
            v-model="store_interview.expectationRating"
            size="25"
            length="5"
            half-increments
            color="yellow accent-4"
            background-color="grey darken-1">
          </v-rating>
        </v-col>
      </v-row>
      <v-row class="align-items-center mt-5 mb-2">
        <v-col cols="12" class="pt-0 pb-0">
          <v-textarea
            v-model="store_interview.comment"
            outlined
            label="의견"
            placeholder="의견을 남겨주세요."
            :rows="3"
            hide-details
            filled
            no-resize>
          </v-textarea>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog
      v-model="completionDialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mb-2"
          color="green"
          dark
          block
          outlined
          v-bind="attrs"
          v-on="on">
          <v-icon class="mr-1">mdi-check</v-icon>완료
        </v-btn>
      </template>
      <v-card color="#405473">
        <div class="pt-4 pr-4 pl-4 pb-2">
          면접을 완료하시겠습니까?
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="white"
            text
            @click="completionDialog = false">
            아니요
          </v-btn>
          <v-btn
            color="white"
            text
            @click="handleClickComplete">
            예
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import pageMixin from '@/mixins/page'

export default {
  name: 'InterviewStep3',
  mixins: [pageMixin],
  data: () => {
    return {
      questionSetList: [],
      completionDialog: false
    }
  },
  async created () {
  },
  methods: {
    handleClickComplete () {
      this.API.saveInterview(this._.cloneDeep(this.store_interview))
      this.$router.go(-3)
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

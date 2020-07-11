<template>
  <div>
    <v-form v-model="validForm" class="mt-1">
      <v-toolbar
        class="pl-0 mb-1"
        color="blue darken-3"
        height="30px">
        <v-icon>mdi-menu-right</v-icon>
        기본정보
      </v-toolbar>
      <v-container>
        <v-row>
          <v-col cols="12" class="pt-0 pb-2">
            <v-text-field
              v-model="detail.setId"
              label="Set ID"
              required
              :disabled="true"
              placeholder="Set ID는 자동생성 됩니다.">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="pt-0 pb-2">
            <v-text-field
              v-model="detail.setName"
              :rules="validationRules.setNameRule"
              label="Set 명"
              required
              ref="inputSetName"
              :disabled="isDetail">
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <v-toolbar
        class="mb-1"
        color="teal darken-3"
        height="30px">
        <v-icon>mdi-menu-right</v-icon>
        질문목록
      </v-toolbar>
      <v-container>
        <v-btn
          class="mb-2"
          outlined
          color="green accent-4"
          v-if="isRegist || isModify"
          @click="handleClickAddQuestion">
          <v-icon class="mr-1">mdi-plus-circle</v-icon>추가
        </v-btn>
        <v-row
          v-for="(question, index) in detail.questionList"
          :key="question.questionId">
          <v-col cols="10" class="pt-0 pb-2">
            <v-text-field
              v-model="question.question"
              :rules="validationRules.questionRule"
              :label="'질문 ' + (index + 1)"
              required
              :disabled="isDetail">
            </v-text-field>
          </v-col>
          <v-col cols="2" class="mt-2">
            <v-btn
              icon
              class="pl-0 pr-0"
              outlined
              small
              color="red"
              v-if="isRegist || isModify"
              @click="handleClickRemoveQuestion(index)">
              <v-icon>mdi-window-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <div class="btn-area mt-3">
      <v-btn
        class="mb-2"
        block
        outlined
        color="orange darken-1"
        v-if="isDetail"
        @click="handleClickModify">
        <v-icon class="mr-1">mdi-pencil</v-icon>수정하기
      </v-btn>
      <v-row v-if="isRegist || isModify">
        <v-col cols="6">
          <v-btn
            class="mb-2"
            block
            outlined
            color="yellow darken-1"
            @click="handleClickCancel">
            <v-icon class="mr-1">mdi-undo-variant</v-icon>취소
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn
            class="mb-2"
            block
            outlined
            color="green accent-4"
            :disabled="!validForm || detail.questionList.length === 0"
            @click="handleClickSave">
            <v-icon class="mr-1">mdi-check</v-icon>저장
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import pageMixin from '@/mixins/page'

export default {
  name: 'QuestionSetDetail',
  mixins: [pageMixin],
  data: () => {
    return {
      originalDetail: {},
      detail: {
        setId: '',
        setName: '',
        questionList: []
      },

      validForm: false,
      validationRules: {
        setNameRule: [
          (v) => !!v || 'Set 명은 필수입니다.'
        ],
        questionRule: [
          (v) => !!v || '질문 입력란은 필수입니다.'
        ]
      },

      isDetail: false,
      isModify: false,
      isRegist: false
    }
  },
  created () {
    const mode = this.$route.params.mode
    if (mode === 'detail') {
      this.originalDetail = this.$route.params.detail
      this.init()
      this.isDetail = true
    } else {
      this.isRegist = true
      setTimeout(() => {
        this.$refs.inputSetName.focus()
      }, 100)
    }
  },
  methods: {
    init () {
      this.detail = this._.cloneDeep(this.originalDetail)
    },
    handleClickModify () {
      this.isModify = true
      this.isDetail = false
    },
    handleClickCancel () {
      if (this.isRegist) {
        this.$router.back()
      } else {
        this.init()
        this.isModify = false
        this.isDetail = true
      }
    },
    async handleClickSave () {
      if (this.isRegist) {
        await this.API.saveQuestionSet(this.detail)
        this.$router.back()
      } else {
        await this.API.modifyQuestionSet(this.detail)
        this.isModify = false
        this.isDetail = true
      }
    },
    handleClickAddQuestion () {
      this.detail.questionList.push({ question: '' })
    },
    handleClickRemoveQuestion (index) {
      this.detail.questionList = this.detail.questionList.filter((e, idx) => index !== idx)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-area {
  padding: 0 12px;
}
.v-toolbar__content {
  padding: 4px 4px;
}
</style>

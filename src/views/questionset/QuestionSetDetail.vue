<template>
  <div>
    <v-form v-model="validForm">
      <v-container>
        <v-row>
          <v-col cols="12">
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
          <v-col cols="12">
            <v-text-field
              v-model="detail.setName"
              :rules="validationRules.setNameRule"
              label="Set 명"
              required
              :disabled="isDetail">
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <div class="btn-area">
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
        setName: ''
      },

      validForm: false,
      validationRules: {
        setIdRule: [
          (v) => !!v || 'Set ID는 필수입니다.'
        ],
        setNameRule: [
          (v) => !!v || 'Set 명은 필수입니다.'
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
      this.validForm = true
    } else {
      this.isRegist = true
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
    handleClickSave () {
      if (this.isRegist) {
        this.$router.back()
        // TODO: 기능구현
      } else {
        this.isModify = false
        this.isDetail = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-area {
  padding: 0 12px;
}
</style>

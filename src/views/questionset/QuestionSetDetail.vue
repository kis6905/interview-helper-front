<template>
  <div>
    <b-container>
      <b-row class="mb-3">
        <b-col cols="3">
          <label for="setId" class="pt-2">Set ID</label>
        </b-col>
        <b-col cols="9">
          <b-form-input
            id="setId"
            v-model="detail.setId"
            :disabled="isDetail">
          </b-form-input>
        </b-col>
      </b-row>
      <b-row class="mb-3">
        <b-col cols="3">
          <label for="setName" class="pt-2">Set 명</label>
        </b-col>
        <b-col cols="9">
          <b-form-input
            id="setName"
            v-model="detail.setId"
            :disabled="isDetail">
          </b-form-input>
        </b-col>
      </b-row>
    </b-container>
    <b-button
      class="mb-2"
      block
      pill
      variant="outline-warning"
      @click="handleClickModify">
      <b-icon-pencil></b-icon-pencil> 수정하기
    </b-button>
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
      detail: {},

      isDetail: false,
      isModify: false,
      isRegist: false
    }
  },
  created () {
    this.originalDetail = this.$route.params.detail
    const mode = this.$route.params.mode
    if (mode === 'detail') {
      this.isDetail = true
    } else {
      this.isRegist = true
    }

    this.init()
  },
  methods: {
    init () {
      this.detail = this._.cloneDeep(this.originalDetail)
    },
    handleClickModify (event) {
      this.isModify = true
      this.isDetail = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

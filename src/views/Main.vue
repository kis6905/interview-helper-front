<template>
  <div class="main">
    <div>
      <b-button
        block
        variant="outline-warning"
        size="lg"
        data-path="/question/set"
        @click="handleClickBtn">
        질문 Set
      </b-button>
      <b-button
        block
        variant="outline-danger"
        size="lg"
        data-path="/interview"
        @click="handleClickBtn">
        면접 시작
      </b-button>
      <b-button
        block
        variant="outline-success"
        size="lg"
        data-path="/interview/finished"
        @click="handleClickBtn">
        면접 완료 목록
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Main',
  created () {
    this.setMain(true)
  },
  data: () => {
    return {
      msg: 'this is msg'
    }
  },
  methods: {
    ...mapMutations([
      'setMain'
    ]),
    handleClickBtn (event) {
      this.$router.push(event.target.dataset.path)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin: 1rem;
}
</style>

<template>
  <div>
    <div>
      <v-btn
        class="mb-4"
        block
        large
        outlined color="blue lighten-1"
        data-path="/question/set"
        @click="handleClickMenuBtn">
        <v-icon class="mr-1">mdi-clipboard-text-outline</v-icon>
        질문 Set
      </v-btn>
      <v-btn
        class="mb-4"
        block
        large
        outlined color="deep-purple accent-1"
        data-path="/interview/step1"
        @click="handleClickMenuBtn">
        <v-icon class="mr-1">mdi-account-tie</v-icon>
        면접 시작
      </v-btn>
      <v-btn
        class="mb-4"
        block
        large
        outlined color="green lighten-2"
        data-path="/finishedinterview"
        @click="handleClickMenuBtn">
        <v-icon class="mr-1">mdi-file-check-outline</v-icon>
        면접 종료 목록
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Main',
  created () {
    this.setMain(true)
    this.setTitle({ text: 'Interview Helper' })
  },
  data: () => {
    return {
      msg: 'this is msg'
    }
  },
  methods: {
    ...mapMutations([
      'setMain',
      'setTitle'
    ]),
    handleClickMenuBtn (event) {
      this.$router.push(event.currentTarget.dataset.path)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

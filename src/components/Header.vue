<template>
  <div class="header">
    <div class="left-btn-area">
      <b-icon-chevron-left v-if="!isMain" @click="handleBack"></b-icon-chevron-left>
    </div>
    <div class="title">
      Interview Helper
    </div>
    <div class="right-btn-area">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  methods: {
    handleBack () {
      this.$router.back()
    }
  },
  computed: {
    ...mapGetters([
      'isMain'
    ])
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  padding: 1.5rem;
  height: 2rem;
  align-items: center;
  color: white;
  background: linear-gradient(-45deg, #863fe6, #1a94ce);
  font-size: 20px;
  font-weight: bold;

  .left-btn-area {
    flex: 0.2;
  }
  .title {
    text-align: center;
    flex: 1;
  }
  .right-btn-area {
    flex: 0.2;
  }
}
</style>

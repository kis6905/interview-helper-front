<template>
  <div class="header">
    <div class="left-btn-area">
      <v-icon v-if="!isMain" @click="handleBack">mdi-chevron-left</v-icon>
    </div>
    <div class="title">
      <span class="title-icon">
        <v-icon v-if="title.icon">mdi-{{ title.icon }}</v-icon>
      </span>
      {{ title.text }}
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
    handleBack (event) {
      event.currentTarget.blur()
      this.$router.back()
    }
  },
  computed: {
    ...mapGetters([
      'isMain',
      'title'
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
    .title-icon {
      font-size: 1.5rem;
      padding-right: 0.2rem;
    }
  }
  .right-btn-area {
    flex: 0.2;
  }
}
</style>

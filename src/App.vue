<template>
  <v-app>
    <Header></Header>
    <router-view class="content" />
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
.content {
  padding: 1rem;
}
.theme--dark.v-application {
  background: #0e1d33 !important;
}
.v-toolbar__content {
  padding: 4px 4px !important;
}
</style>

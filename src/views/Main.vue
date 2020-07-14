<template>
  <div>
    <div>
      <v-btn
        v-for="menu in menuList"
        :key="menu.menuId"
        class="mb-4"
        block
        large
        outlined
        :color="menu.color"
        @click="handleClickMenuBtn(menu)">
        <v-icon class="mr-1">mdi-{{ menu.icon }}</v-icon>
        {{ menu.name }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Main',
  created () {
    this.store_setMain(true)
    this.store_setTitle({ text: 'Interview Helper' })
  },
  data: () => {
    return {
      menuList: [{
        menuId: '1',
        name: '질문 Set',
        color: 'blue lighten-1',
        path: '/question/set',
        icon: 'clipboard-text-outline'
      }, {
        menuId: '2',
        name: '면접 시작',
        color: 'deep-purple accent-1',
        path: '/interview/step1',
        icon: 'account-tie'
      }, {
        menuId: '3',
        name: '면접 종료 목록',
        color: 'green lighten-2',
        path: '/finishedinterview',
        icon: 'file-check-outline'
      }]
    }
  },
  methods: {
    ...mapMutations({
      store_setMain: 'setMain',
      store_setTitle: 'setTitle'
    }),
    handleClickMenuBtn (menu) {
      this.store_setMain(false)
      this.store_setTitle({ text: menu.name, icon: menu.icon })
      this.$router.push(menu.path)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

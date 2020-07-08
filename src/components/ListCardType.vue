<template>
  <div>
    <v-card
      class="card"
      color="#2a3c56"
      dark
      v-for="(item, index) in items"
      :key="index"
      @click="$emit('click-item', item)">
      <div class="card-item">
        <div class="set-title">
          {{ item.title }}
        </div>
        <div class="arrow-right">
          <v-icon>mdi-chevron-right</v-icon>
        </div>
      </div>
    </v-card>

    <!--
    <b-card
      v-for="(item, index) in items"
      :key="index"
      class="card"
      bg-variant="dark"
      text-variant="white"
      border-variant="secondary"
      @click="$emit('click-item', item)">
      <div class="card-item">
        <div class="title">
          {{ item.title }}
        </div>
        <div class="arrow-right">
          <b-icon-chevron-right></b-icon-chevron-right>
        </div>
      </div>
    </b-card>
    <b-card
      v-if="!items || items.length === 0"
      class="empty-card"
      bg-variant="dark"
      text-variant="white"
      border-variant="secondary">
      <div class="empty-card-body text-center">
        <div class="empty-card-body-content">
          <b-icon-exclamation-circle :font-scale="1"></b-icon-exclamation-circle>
          데이터가 없습니다!
        </div>
      </div>
    </b-card>
    -->
  </div>
</template>

<script>
export default {
  name: 'ListCardType',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped lang="scss">
.card {
  margin-bottom: 0.5rem;

  .card-item {
    display: flex;
    padding: 1rem;

    .set-title {
      flex: 1.2;
      margin-right: 0.5rem;
    }

    .arrow-right {
      flex: 0.1;
    }
  }
}

.empty-card-body {
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;

  .empty-card-body-content {
    flex: 1;
  }
}
</style>

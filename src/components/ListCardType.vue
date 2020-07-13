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
    <ListCardItemEmpty v-if="!items || items.length === 0">
    </ListCardItemEmpty>
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
</style>

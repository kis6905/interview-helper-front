<template>
  <v-card
    class="empty-card"
    color="#2a3c56"
    dark>
    <div class="empty-card-body text-center">
      <div class="empty-card-body-content">
        데이터가 없습니다<v-icon class="ml-1">mdi-emoticon-cry-outline</v-icon>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'ListCardItemEmpty'
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
  height: 7rem;

  .empty-card-body-content {
    flex: 1;
  }
}
</style>

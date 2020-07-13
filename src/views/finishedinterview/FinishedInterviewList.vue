<template>
  <div>
    <v-card
      class="card"
      color="#2a3c56"
      dark
      v-for="(interview) in interviewList"
      :key="interview.interviewId"
      @click="handleClickItem(interview)">
      <div class="card-item">
        <div class="set-title">
          <span>{{ interview.interviewDate }}</span>
          <span class="ml-5 font-weight-bold">{{ interview.interviewee }}</span>
          <div>
            <v-chip
              class="mt-2 mr-2"
              small
              v-for="(set, index) in interview.questionSetList"
              :key="index"
              color="primary">
              {{ set.setName }}
            </v-chip>
          </div>
        </div>
        <div class="arrow-right">
          <v-icon>mdi-chevron-right</v-icon>
        </div>
      </div>
    </v-card>
    <ListCardItemEmpty v-if="!interviewList || interviewList.length === 0">
    </ListCardItemEmpty>
  </div>
</template>

<script>
import pageMixin from '@/mixins/page'

export default {
  name: 'FinishedInterviewList',
  mixins: [pageMixin],
  data: () => {
    return {
      interviewList: []
    }
  },
  async created () {
    this.page_setTitle({ text: '면접 종료 목록', icon: 'mdi-file-check-outline' })
    const interviewList = await this.API.getFinishedInterviewList()
    for (const interview of interviewList) {
      interview.title = interview.interviewee
    }
    this.interviewList = interviewList
  },
  methods: {
    handleClickItem (item) {
      this.$router.push({ name: 'FinishedInterviewDetail', params: { interview: item } })
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
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
      display: flex;
      flex: 0.1;
    }
  }
}
</style>

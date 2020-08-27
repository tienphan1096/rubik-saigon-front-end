<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col md="8" offset-md="2" class="my-4">
          <puzzle-search-bar></puzzle-search-bar>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3">
          <announcement-panel class="mb-5"></announcement-panel>
        </b-col>
        <b-col md="9">
          <b-row>
            <b-col class="text-left mb-4">
              <h1>{{ $t(`puzzleTypes.${$route.params.category}`)}}</h1>
            </b-col>
          </b-row>
          <puzzle-grid :puzzles="puzzles" :loading="loading"></puzzle-grid>
        </b-col>
      </b-row>
</b-container>

  </div>
</template>

<script>
import PuzzleSearchBar from '../components/PuzzleSearchBar.vue';
import AnnouncementPanel from '../components/AnnouncementPanel.vue';
import PuzzleGrid from '../components/PuzzleGrid.vue';

export default {
  name: 'PuzzleCategory',
  components: {
    'puzzle-search-bar': PuzzleSearchBar,
    'announcement-panel': AnnouncementPanel,
    'puzzle-grid': PuzzleGrid,
  },
  data() {
    return {
      puzzles: [],
      loading: true,
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.loading = true;
    this.$http.get('/puzzles', { params: { category: to.params.category } }).then((results) => {
      this.puzzles = results.data;
    }).finally(() => {
      this.loading = false;
    });
    next();
  },
  mounted() {
    this.$http.get('/puzzles', { params: { category: this.$route.params.category } }).then((results) => {
      this.puzzles = results.data;
    }).finally(() => {
      this.loading = false;
    });
  },
};
</script>

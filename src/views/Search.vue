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
              <h2>{{ $t('searchResults') }}</h2>
              <h5 class="font-weight-lighter">
                {{ $t('searchResultsFor', [puzzles.length, $route.params.keywords]) }}
              </h5>
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
  name: 'Home',
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
    this.$http.get('/search', { params: { keywords: to.params.keywords } }).then((results) => {
      this.puzzles = results.data;
    }).finally(() => {
      this.loading = false;
    });
    next();
  },
  mounted() {
    this.$http.get('/search', { params: { keywords: this.$route.params.keywords } }).then((results) => {
      this.puzzles = results.data;
    }).finally(() => {
      this.loading = false;
    });
  },
};
</script>

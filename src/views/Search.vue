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
          <announcement-panel></announcement-panel>
        </b-col>
        <b-col md="9">
          <puzzle-grid :puzzles="puzzles"></puzzle-grid>
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
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.$http.get('/search', { params: { keywords: to.params.keywords } }).then((results) => {
      this.puzzles = results.data;
    });
    next();
  },
  mounted() {
    this.$http.get('/search', { params: { keywords: this.$route.params.keywords } }).then((results) => {
      this.puzzles = results.data;
    });
  },
};
</script>


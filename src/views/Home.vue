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
          <puzzle-category-panel class="mb-5"></puzzle-category-panel>
        </b-col>
        <b-col md="9">
          <b-row>
            <b-col class="text-left mb-4">
              <h1>{{ $t('newProducts') }}</h1>
            </b-col>
          </b-row>
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
import PuzzleCategoryPanel from '../components/PuzzleCategoryPanel.vue';

export default {
  name: 'Home',
  components: {
    'puzzle-search-bar': PuzzleSearchBar,
    'announcement-panel': AnnouncementPanel,
    'puzzle-grid': PuzzleGrid,
    'puzzle-category-panel': PuzzleCategoryPanel,
  },
  data() {
    return {
      puzzles: [],
    };
  },
  mounted() {
    this.$http.get('/puzzles').then((results) => {
      this.puzzles = results.data;
    });
  },
};
</script>

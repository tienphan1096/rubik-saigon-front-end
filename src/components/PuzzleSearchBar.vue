<template>
  <div class="search-bar">
    <v-select
      :options="matches" label="name" @search="searchHandler" :filterable="false"
      :clearSearchOnBlur="clearSearchOnBlur" @input="navigateToPuzzle"
      class="search-input"
    >
    </v-select>
    <b-button @click="navigateToSearch">Search</b-button>
  </div>
</template>

<script>
import vSelect from 'vue-select';
import _ from 'lodash';

import 'vue-select/dist/vue-select.css';

export default {
  name: 'PuzzleSearchBar',
  components: {
    'v-select': vSelect,
  },
  data() {
    return {
      matches: [],
      keywords: '',
    };
  },
  methods: {
    fetchPuzzles: _.debounce(function (search, loading) {
      if (search) {
        loading(true);
        this.$http.get('/search', { params: { keywords: search } }).then((results) => {
          this.matches = results.data;
          loading(false);
        });
      } else {
        this.matches = [];
      }
    }, 500),
    searchHandler(search, loading) {
      this.keywords = search;
      this.fetchPuzzles(search, loading);
    },
    clearSearchOnBlur() {
      return false;
    },
    navigateToPuzzle(selected) {
      this.$router.push({ name: 'Puzzle Details', params: { name: selected.url } });
    },
    navigateToSearch() {
      this.$router.push({ name: 'Search', params: { keywords: this.keywords } });
    },

  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
}
.search-input {
  flex-grow: 1;
}
</style>

<template>
  <v-select
    :options="matches" label="name" @search="fetchPuzzles" :filterable="false"
    :clearSearchOnBlur="clearSearchOnBlur" @input="navigateToPuzzle"
  >
  </v-select>
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
    clearSearchOnBlur() {
      return false;
    },
    navigateToPuzzle(selected) {
      this.$router.push({ name: 'Puzzle Details', params: { name: selected.url } });
    },
  },
};
</script>

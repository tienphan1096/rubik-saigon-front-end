<template>
<div>
  <b-row>
    <b-col lg="4" sm="6" xs="12" v-for="puzzle in puzzlesToDisplay" :key="puzzle.id">
      <b-card no-body @click="cardClick(puzzle.url, $event)" class="mb-5">
        <b-img :src="puzzle.thumbnail ? `http://localhost:3000${puzzle.thumbnail}` : null" fluid></b-img>
        <b-card-body>
          <b-link :to="`/rubik/${puzzle.url}`">{{ puzzle.name }}</b-link>
          <b-card-text>
            {{ puzzle.price ? `${puzzle.price} k` : $t('price.contact') }}
          </b-card-text>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
  <b-row>
    <b-col lg="8" sm="10" xs="12" offset-lg="2" offset-sm="1">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </b-col>
  </b-row>
</div>
</template>

<script>

export default {
  name: 'PuzzleGrid',
  props: {
    puzzles: Array,
  },
  data() {
    return {
      currentPage: 1,
      perPage: 9,
    };
  },
  computed: {
    rows() {
      return this.puzzles.length;
    },
    puzzlesToDisplay() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = this.currentPage * this.perPage;
      const end = endIndex > this.rows ? this.rows : endIndex;
      return this.puzzles.slice(startIndex, end);
    },
  },
  methods: {
    cardClick(url, evt) {
      if (evt.target.tagName.toLowerCase() !== 'a') {
        this.$router.push({ name: 'Puzzle Details', params: { name: url } });
      }
    },
  },
};
</script>

<style scoped>
.card-body a {
  color: unset;
  text-decoration: none;
}
</style>

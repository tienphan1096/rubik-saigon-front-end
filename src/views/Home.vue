<template>
  <div class="home">
    <b-container fluid="md">
      <b-row>
        <b-col md="3">
          sdff
        </b-col>
        <b-col md="9">
          <b-row>
            <b-col lg="4" sm="6" xs="12" v-for="puzzle in puzzles" :key="puzzle.id">
              <b-card no-body @click="cardClick(puzzle.url)">
                <b-img :src="puzzle.thumbnail ? `http://localhost:3000${puzzle.thumbnail}` : null" fluid></b-img>
                <b-card-body>
                  <b-card-title>{{ puzzle.name }}</b-card-title>
                  <b-card-text>
                    {{ puzzle.price }}.000 đ
                  </b-card-text>
                </b-card-body>

              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
</b-container>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      puzzles: [],
    };
  },
  mounted() {
    this.$http.get('/puzzles').then((results) => {
      this.puzzles = results.data;
      console.log(this.puzzles);
    });
  },
  methods: {
    cardClick(url) {
      console.log(url);
      // TODO: redirect to that puzzle.
    },
  },
};
</script>

<style scoped>
a .card {
  color: none;
}
</style>

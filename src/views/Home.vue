<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col md="8" offset-md="2" class="my-4">
          <v-select
            :options="matches" label="name" @search="fetchPuzzles" :filterable="false"
            :clearSearchOnBlur="clearSearchOnBlur"
          >
          </v-select>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3">
          <b-card
            header="Thông báo"
            class="text-left"
          >
            <b-card-text>
              Vì shop không còn quản lý trang rubiksaigon.com nữa,xin quý khách vui lòng vào
              <span style="font-weight: bold">rubik-saigon.com</span>
              (<span style="font-weight: bold">có dấu gạch nối</span>).
              <br>
              <br>
              Rubik-saigon.com chỉ có 1 shop duy nhất tại 300/11 Đội Cung, phường 9, quận 11.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="9">
          <b-row>
            <b-col lg="4" sm="6" xs="12" v-for="puzzle in puzzles" :key="puzzle.id">
              <b-card no-body @click="cardClick(puzzle.url)" class="mb-5">
                <b-img :src="puzzle.thumbnail ? `http://localhost:3000${puzzle.thumbnail}` : null" fluid></b-img>
                <b-card-body>
                  <b-link>{{ puzzle.name }}</b-link>
                  <b-card-text>
                    {{ puzzle.price }} k
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
import vSelect from 'vue-select';

import 'vue-select/dist/vue-select.css';

export default {
  name: 'Home',
  components: {
    'v-select': vSelect,
  },
  data() {
    return {
      puzzles: [],
      matches: [],
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
    fetchPuzzles(search, loading) {
      if (search) {
        loading(true);
        this.$http.get('/search', { params: { keywords: search } }).then((results) => {
          this.matches = results.data;
          loading(false);
        });
      } else {
        this.matches = [];
      }
    },
    clearSearchOnBlur() {
      return false;
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

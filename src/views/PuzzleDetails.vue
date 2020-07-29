<template>
  <div class="puzzle-details text-left">
    <b-container>
      <b-row>
        <b-col md="8" offset-md="2" class="my-4">
          <puzzle-search-bar></puzzle-search-bar>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3">
          <b-card header="Thông báo">
            <b-card-text>
              Vì shop không còn quản lý trang rubiksaigon.com nữa, xin quý khách vui lòng vào
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
            <b-col v-if="puzzle">
              <h3>{{ puzzle.name }}</h3>
              <table class="info-table">
                <tr>
                  <td><h4>{{ $t('price') }}</h4></td>
                  <td><h4>{{ puzzle.price ? `${puzzle.price} k` : $t('price.contact') }}</h4></td>
                </tr>
                <tr>
                  <td><h4><small><em>{{ $t('puzzleType') }}</em></small></h4></td>
                  <td><h4><small>
                    <em>{{ $t(`puzzleTypes.${puzzle.PuzzleType.id}`) }}</em>
                  </small></h4></td>
                </tr>
              </table>

              <b-row>
                <b-col sm="10" offset-sm="1" md="8" offset-mf="2">
                  <b-img :src="puzzle.imgsrc ? `http://localhost:3000${puzzle.imgsrc}` : null" fluid />
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
</b-container>

  </div>
</template>

<script>
import PuzzleSearchBar from '../components/PuzzleSearchBar.vue';

export default {
  name: 'PuzzleDetails',
  components: {
    'puzzle-search-bar': PuzzleSearchBar,
  },
  data() {
    return {
      puzzle: null,
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.$http.get('/puzzle', { params: { url: to.params.name } }).then((results) => {
      this.puzzle = results.data;
      next();
    });
  },
  mounted() {
    this.$http.get('/puzzle', { params: { url: this.$route.params.name } }).then((results) => {
      this.puzzle = results.data;
    });
  },
};
</script>

<style scoped>
.info-table td {
  padding-left: 10px;
}
.info-table td:first-child {
  text-align: right;
}
</style>

<template>
  <!-- <b-card
    :header="$t('announcement.label')"
    class="text-left"
  >
    <i18n path="announcement.content" tag="b-card-text">
      <span style="font-weight: bold">rubik-saigon.com</span>
      <span style="font-weight: bold">{{ $t('announcement.disclaimer') }}</span>
      <br>
      <br>
    </i18n>
  </b-card> -->
  <b-card class="text-left puzzle-category-panel" no-body>
    <b-list-group flush>
      <b-list-group-item v-for="category in categories" :key="category.id">
        <b-link :to="`/category/${category.id}`">{{ $t(`puzzleTypes.${category.id}`) }}</b-link>
      </b-list-group-item>
    </b-list-group>
  </b-card>
</template>

<script>

export default {
  name: 'PuzzleCategoryPanel',
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    this.$http.get('/puzzle-types').then((results) => {
      this.categories = results.data;
    });
  },
};
</script>

<style scoped>
.puzzle-category-panel a {
  text-decoration: none;
  color: unset;
}
</style>

<template>
  <div class="add-rubik">
    <b-form @submit="onSubmit">
      <b-form-input v-model="name" placeholder="Name"></b-form-input>
      <b-form-input v-model="price" placeholder="Price"></b-form-input>
      <b-form-select
        v-model="puzzleType" :options="puzzleTypes"
      >
        <template v-slot:first>
          <b-form-select-option :value="null" disabled>Loại Rubik</b-form-select-option>
        </template>
      </b-form-select>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <!-- <b-form-file
      v-model="file"
      :state="Boolean(file)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file> -->
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      name: '',
      price: '',
      puzzleType: null,
      puzzleTypes: [],
    };
  },
  mounted() {
    this.$http.get('/puzzle-types')
      .then((res) => {
        this.puzzleTypes = res.data.map((puzzleType) => ({
          value: puzzleType.id,
          text: puzzleType.name,
        }));
      });
  },
  methods: {
    onSubmit() {
      this.$http.post('/puzzle', {
        name: this.name,
        price: this.price,
        type: this.puzzleType,
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

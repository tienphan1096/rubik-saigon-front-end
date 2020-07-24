<template>
  <div class="add-rubik">
    <b-form>
      <b-form-input v-model="name" placeholder="Name"></b-form-input>
      <b-form-input v-model="price" placeholder="Price"></b-form-input>
      <b-form-select
        v-model="puzzleType" :options="puzzleTypes"
      >
        <template v-slot:first>
          <b-form-select-option :value="null" disabled>Loại Rubik</b-form-select-option>
        </template>
      </b-form-select>
      <b-form-file
        v-model="image"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
      <b-button @click="onSubmit" variant="primary">Submit</b-button>
    </b-form>
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
      image: null,
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
      const formData = new FormData();

      formData.set('name', this.name);
      formData.set('price', this.price);
      formData.set('type', this.puzzleType);
      formData.set('image', this.image);

      this.$http.post('/puzzle', formData).then((res) => {
        console.log(res);
        // TODO: do something here
      });
    },
  },
};
</script>

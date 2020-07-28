<template>
  <div class="add-rubik">
    <b-form>
      <b-form-input v-model="username" placeholder="Username"></b-form-input>
      <b-form-input v-model="password" type="password" placeholder="Password"></b-form-input>
      <b-button @click="onSubmit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('logIn', { username: this.username, password: this.password })
        .then((res) => {
          this.$http.defaults.headers.common.Authorization = `Bearer ${res.data.accessToken}`;
        }).catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

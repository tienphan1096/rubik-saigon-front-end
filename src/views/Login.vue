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
      const clientAuth = btoa(`${process.env.VUE_APP_CLIENT_APP}:${process.env.VUE_APP_CLIENT_SECRET}`);

      const params = new URLSearchParams();
      params.append('grant_type', 'password');
      params.append('username', this.username);
      params.append('password', this.password);
      this.$http.post(
        '/login',
        params,
        {
          headers: {
            Authorization: `Basic ${clientAuth}`,
          },
        },
      ).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

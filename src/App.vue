<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-brand href="/">Rubik Sài Gòn</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">{{ $t("nav.products")}}</b-nav-item>
            <b-nav-item to="/about">{{ $t("nav.contact")}}</b-nav-item>
            <b-nav-item
              to="/add-rubik" v-if="$store.state.loggedInUser"
            >{{ $t("nav.addPuzzle")}}</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Language" right>
              <b-dropdown-item @click="changeLocale('en')">EN</b-dropdown-item>
              <b-dropdown-item @click="changeLocale('vi')">VI</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/login">{{ $t("nav.login") }}</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
import i18n from './localization';

export default {
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

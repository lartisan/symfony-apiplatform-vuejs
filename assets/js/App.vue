<template>
  <div class="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
    <sidebar v-if="loggedIn" />

    <div class="flex-grow overflow-hidden h-full flex flex-col">
      <top-navigation v-if="loggedIn" />

      <div class="flex-grow flex overflow-x-hidden">
        <div class="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
          <!-- <header />-->

          <router-view :key="$route.fullPath"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from "~/components/Sidebar";
  import TopNavigation from "~/components/TopNavigation";
  import Header from "~/components/Header";
  import api from "./api";

  export default {
    name: 'App',
    computed: {
      loggedIn() {
        return this.$store.getters['auth/LOGGED_IN']
      }
    },
    components: { Sidebar, TopNavigation, Header },
    created () {
      if(this.loggedIn) this.$store.dispatch('auth/AUTH_USER');

      api.interceptors.response.use(undefined, (err) => {
        return new Promise((resolve, reject) => {
          if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            this.$store.dispatch("AUTH_LOGOUT")
          }
          throw err;
        });
      });
    }
  }
</script>
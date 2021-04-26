<template>
  <h1>Welcome, {{ user.username }}</h1>
</template>

<script>
export default {
  name: "UsersShow",
  computed: {
    user() {
      return this.$store.getters["users/SELECTED_USER"]
    }
  },
  mounted() {
    this.$store.dispatch('users/FETCH_SELECTED_USER', this.$route.params.id)
      .then();
  }
}
</script>
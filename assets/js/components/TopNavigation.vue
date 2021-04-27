<template>
  <div class="h-16 lg:flex justify-end w-full border-b border-gray-200 dark:border-gray-800 hidden px-10">
    <!-- <div class="flex h-full text-gray-600 dark:text-gray-400">
      <a href="#"
         class="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Company</a>
      <a href="#"
         class="cursor-pointer h-full border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white inline-flex mr-8 items-center">Users</a>
      <a href="#" class="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Expense
        Centres</a>
      <a href="#" class="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center">Currency
        Exchange</a>
    </div>-->

    <div class="ml-auto flex items-center space-x-7">
      <button class="flex items-center">
        <span class="relative flex-shrink-0">
          <img class="w-7 h-7 rounded-full"
               src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=200&w=200&q=80"
               alt="profile"/>
          <span
              class="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full bg-green-500 border border-white dark:border-gray-900"></span>
        </span>
        <span class="ml-2">{{ user.username }}</span>
        <!-- <svg viewBox="0 0 24 24" class="w-4 ml-1 flex-shrink-0" stroke="currentColor" stroke-width="2" fill="none"
             stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>-->
      </button>

      <button class="bg-red-400 text-white px-4 py-2 rounded-md" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNavigation",
  computed: {
    user() {
      return this.$store.getters['auth/GET_AUTH_USER']
    },
  },
  methods: {
    logout() {
      return this.$store.dispatch("auth/LOGOUT")
          .then(() => this.$router.push({ name: 'login' }))
          .catch(error => console.log(error));
    }
  }
}
</script>
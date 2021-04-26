<template>
  <section class="sm:p-7 p-4">
    <!-- Table Top Bar -->
    <div class="flex w-full items-center mb-7">
      <!-- Last 30 Days -->
      <!--      <button
          class="inline-flex mr-3 items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0">
        <svg viewBox="0 0 24 24" class="w-4 mr-2 text-gray-400 dark:text-gray-600" stroke="currentColor"
             stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        Last 30 days
        <svg viewBox="0 0 24 24" class="w-4 ml-1.5 text-gray-400 dark:text-gray-600" stroke="currentColor"
             stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>-->

      <!-- Filter By -->
      <!--      <button
          class="inline-flex items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0">
        Filter by
        <svg viewBox="0 0 24 24" class="w-4 ml-1.5 text-gray-400 dark:text-gray-600" stroke="currentColor"
             stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>-->

      <!-- Pagination -->
      <!--      <div class="ml-auto text-gray-500 text-xs sm:inline-flex hidden items-center">
        <span class="mr-3">Page 2 of 4</span>
        <button
            class="inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0">
          <svg class="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
               stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
            class="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0">
          <svg class="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
               stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>-->
    </div>

    <table class="w-full text-left">
      <thead>
        <tr class="text-gray-400">
          <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">#</th>
          <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Username</th>
          <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Email</th>
          <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Role</th>
          <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 text-right">Actions</th>
        </tr>
      </thead>

      <tbody class="text-gray-600 dark:text-gray-100">
        <!-- TODO: Create component for each table row?? -->

        <tr v-for="user in users" :key="user.id" v-if="hasUsers">
          <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">{{ user.id }}</td>
          <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">{{ user.username }}</td>
          <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">{{ user.email }}</td>
          <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">{{ user.roles }}</td>
          <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
            <div class="flex flex-row justify-end items-center space-x-2">
              <router-link :to="{ name: 'users-show', params: { id: user.id }}" class="px-2 py-1 bg-blue-400 text-white text-xs font-medium rounded-sm shadow-sm">Visualizer</router-link>
              <button class="px-2 py-1 bg-green-600 text-white text-xs font-medium rounded-sm shadow-sm">Modifier</button>
            </div>
          </td>
        </tr>

        <tr v-show="!hasUsers && !isLoading">
          <td colspan="6" class="text-center">Sorry, there are no users to show.</td>
        </tr>

        <tr v-show="isLoading">
          <td colspan="6" class="text-center">Loading...</td>
        </tr>
      </tbody>
    </table>

    <!-- Bottom Pagination -->
    <!--    <div class="flex w-full mt-5 space-x-2 justify-end">
      <button
          class="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
        <svg class="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
             stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button
          class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
        1
      </button>
      <button
          class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-white leading-none">
        2
      </button>
      <button
          class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
        3
      </button>
      <button
          class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
        4
      </button>
      <button
          class="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
        <svg class="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
             stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>-->
  </section>
</template>

<script>
export default {
  name: "UsersIndex",
  computed: {
    users() {
      return this.$store.getters['users/USERS'];
    },
    isLoading() {
      return this.$store.getters['users/IS_LOADING'];
    },
    hasUsers() {
      return this.$store.getters['users/HAS_USERS'];
    }
  },
  mounted() {
    this.$store.dispatch("users/FETCH_USERS")
      .then();
  }
}
</script>
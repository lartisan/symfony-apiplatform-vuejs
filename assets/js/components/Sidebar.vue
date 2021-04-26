<template>
  <div class="bg-white dark:bg-gray-900 dark:border-gray-800 w-60 flex flex-col border-r border-gray-200 hidden sm:flex">
    <!-- LOGO -->
    <div class="px-6 h-16 text-blue-500 flex items-center space-x-2">
      <svg class="w-9 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
        <path fill="currentColor" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd" />
      </svg>
      <span class="inline-block">Dashboard</span>
    </div>

    <!-- MENU -->
    <div class="flex w-auto mt-4 px-6 flex-col text-gray-400 space-y-4">
      <router-link
          :to="{ name: 'users-index' }"
          class="px-3 py-2 dark:bg-gray-700 dark:text-white rounded-md flex space-x-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <span class="inline-block">Users</span>
      </router-link>

      <!-- <button class="h-10 w-12 dark:text-gray-500 rounded-md flex items-center">
        <svg viewBox="0 0 24 24" class="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      </button>-->

      <!-- <button class="h-10 w-12 dark:text-gray-500 rounded-md flex items-center">
        <svg viewBox="0 0 24 24" class="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          <line x1="12" y1="11" x2="12" y2="17"></line>
          <line x1="9" y1="14" x2="15" y2="14"></line>
        </svg>
      </button>-->

      <!-- <button class="h-10 w-12 dark:text-gray-500 rounded-md flex items-center">
        <svg viewBox="0 0 24 24" class="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      </button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
}
</script>

<style lang="postcss">
  .router-link-active {
    @apply bg-blue-100 text-blue-500;
  }
</style>
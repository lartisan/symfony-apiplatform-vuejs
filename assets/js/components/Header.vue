<template>
  <div class="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 sticky top-0">
    <!-- Header -->
    <div class="flex w-full items-center">
      <div class="flex items-center text-3xl text-gray-900 dark:text-white">
        <img
            src="https://assets.codepen.io/344846/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1582611188&width=512"
            class="w-12 mr-4 rounded-full" alt="profile"/>
        Mert Cukuren
      </div>

      <div class="ml-auto sm:flex hidden items-center justify-end">
        <div class="text-right">
          <div class="text-xs text-gray-400 dark:text-gray-400">Account balance:</div>
          <div class="text-gray-900 text-lg dark:text-white">$2,794.00</div>
        </div>
        <button
            class="w-8 h-8 ml-4 text-gray-400 shadow dark:text-gray-400 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700">
          <svg viewBox="0 0 24 24" class="w-4" stroke="currentColor" stroke-width="2" fill="none"
               stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="19" cy="12" r="1"></circle>
            <circle cx="5" cy="12" r="1"></circle>
          </svg>
        </button>
      </div>
    </div>

    <!-- Tab Navigation -->
    <div class="flex items-center space-x-3 sm:mt-7 mt-4">
      <a href="#"
         class="px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5">Activities</a>
      <a href="#"
         class="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5">Transfer</a>
      <a href="#"
         class="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden">Budgets</a>
      <a href="#"
         class="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden">Notifications</a>
      <a href="#"
         class="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden">Cards</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>
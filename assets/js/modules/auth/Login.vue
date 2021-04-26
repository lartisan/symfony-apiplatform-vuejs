<template>
  <div class="font-sans">
    <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-50">
      <div class="relative sm:max-w-sm w-full">
        <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
          <label for="" class="block text-sm text-gray-700 text-center font-semibold">
            Login
          </label>

          <form>
            <div class="space-y-7">
              <input
                  type="text"
                  v-model="form.username"
                  placeholder="Username"
                  class="focus:outline-none pl-2.5 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-gray-200 focus:bg-gray-100 focus:ring-0">

              <input
                  type="password"
                  v-model="form.password"
                  placeholder="Password"
                  class="focus:outline-none pl-2.5 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-gray-200 focus:bg-gray-100 focus:ring-0">
            </div>

            <!-- <div class="mt-7 flex">
              <label class="flex justify-start items-start">
                <div class="bg-white border-2 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2">
                  <input type="checkbox" class="opacity-0 absolute">
                  <svg class="fill-current hidden w-3 h-3 text-blue-500 pointer-events-none" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                </div>
                <div class="select-none text-sm mt-0.5">Remember</div>
              </label>

              <div class="w-full text-right">
                <a class="underline text-sm text-gray-600 hover:text-gray-900" href="#">
                  Forgot Password?
                </a>
              </div>
            </div>-->

            <div class="mt-7">
              <button
                  type="button"
                  @click="performLogin"
                  class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                Login
              </button>
            </div>

            <!-- REGISTER Button -->
            <!-- <div class="mt-7">
              <div class="flex justify-center items-center">
                <label class="text-sm text-gray-600">No Account?</label>
                <a href="#" class=" ml-2 text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Register
                </a>
              </div>
            </div>-->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        form: {
          username: '',
          password: '',
        }
      }
    },
    methods: {
      async performLogin() {
        await this.$store.dispatch("auth/LOGIN", this.form)
          .then(() => this.$store.dispatch('auth/AUTH_USER'))
          .then(() => this.$router.push('/'))
          .catch(error => console.log(error));
      }
    }
  }
</script>

<style scoped>

</style>
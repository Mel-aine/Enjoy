<script setup>
import { ref } from 'vue'
import router from '../../router'
import { RouterLink } from 'vue-router'

const email = ref('')
const password = ref('')
const passwordVisible = ref(false)
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value
}


</script>

<template>
  <div class="flex items-center justify-center min-h-full py-10 ">
    <!-- Conteneur principal -->
    <div
      class="flex flex-col md:flex-row bg-white w-full max-w-md sm:max-w-lg md:max-w-5xl p-6 md:p-8 shadow-2xl rounded-lg"
    >
      <!-- Section Formulaire -->
      <div class="w-full md:w-1/2 p-6">
        <form @submit.prevent="loginUser">
          <div class="mb-4 text-center text-3xl font-bold">
            <h2 class="uppercase">Velcome Back!</h2>
          </div>
          <div class="flex justify-center items-center mb-8">
            <!-- <i class="fa-solid fa-circle-user text-6xl text-blue-500"></i> -->
              <img
                src="@/assets/logo1.png"
                alt="User Icon"
                class="h-15 w-12 object-cover border border-customBlueVariant rounded-full"
              />

          </div>
          <div class="mb-5">
            <input
              type="text"
              v-model="email"
              placeholder="Email"
              required
              class="border-b-2 border-gray-300 focus:border-blue-500 outline-none p-2 w-full"
            />
          </div>
          <div class="mb-5 relative">
            <input
              :type="passwordVisible ? 'text' : 'password'"
              v-model="password"
              placeholder="Password"
              required
              class="border-b-2 border-gray-300 focus:border-blue-500 outline-none p-2 w-full"
            />
            <!-- Icône pour afficher/cacher le mot de passe -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              @click="togglePasswordVisibility"
              v-if="passwordVisible"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>

            <svg
              @click="togglePasswordVisibility"
              xmlns="http://www.w3.org/2000/svg"
              v-else
              class="h-6 w-6 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.724 7.758 5 12 5s8.268 2.724 9.542 7c-1.274 4.276-5.3 7-9.542 7-4.242 0-8.268-2.724-9.542-7z"
              />
            </svg>
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="w-full px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Connexion
            </button>
          </div>
          <div class="flex items-center justify-between pt-4">
            <p>Don't have an account? <span class="text-customBlueVariant">claim your business on enjoy</span></p>
            <!-- <p class="text-blue-500 cursor-pointer hover:text-blue-700">
              <RouterLink to="">Register</RouterLink>
            </p> -->
          </div>
          <!-- Divider -->
          <div
            class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
            <p
              class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
              OR
            </p>
          </div>

          <!-- Social login buttons -->
          <a
            class="mb-3 flex w-full items-center justify-center rounded-full bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            style="background-color: #3b5998"
            href="#!"
            role="button"
            data-twe-ripple-init
            data-twe-ripple-color="light">
            <!-- google -->
            <span
              class="me-2 fill-white [&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.4 34 30 38 24 38c-7 0-12-5-12-12s5-12 12-12c3 0 5.8 1 8 3l6-6C34.5 6 29.5 4 24 4 12 4 4 12 4 24s8 20 20 20c10 0 19-7 19-20 0-1.3-.2-2.7-.5-4z"/>
              </svg>

            </span>
            Login with Google
          </a>
          <a
            class="mb-3 flex w-full items-center justify-center rounded-full bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-info-3 transition duration-150 ease-in-out hover:bg-info-accent-300 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 focus:outline-none focus:ring-0 active:bg-info-600 active:shadow-info-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            style="background-color: #55acee"
            href="#!"
            role="button"
            data-twe-ripple-init
            data-twe-ripple-color="light">
            <!-- apple -->
            <span class="me-2 fill-white [&>svg]:h-3.5 [&>svg]:w-3.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M318.7 268.6c.3 32.8 14.6 57.9 46.6 76.6-12.2 35.4-31 66.8-55.9 94.6-18.1 20.3-37.1 40.2-63.5 41.1-26.4.9-34.8-12.6-64.8-12.6s-39.8 12.2-64.8 13.5c-25 .3-43.8-20.8-61.9-41-44.2-49.3-78.8-115.6-78.8-185.5 0-39.8 10.8-77.9 31.3-108.5 24.4-36.9 59.8-62.4 99.1-63.7 25-.9 48.6 14.1 64.8 14.1s45.6-17.4 77.3-14.9c13.2.6 50.2 5.4 74 41.1-1.9 1.3-44.2 25.7-43.9 76.9zm-72.9-140.4c14.1-16.8 24.8-40.8 22.1-64.9-21.4 1.6-47.1 14.9-61.5 32.2-13.5 15.8-25.5 40.2-22.5 63.3 23.8 1.9 48.2-11.9 61.9-30.6z"/>
              </svg>

            </span>
            Login with Apple
          </a>
        </form>
      </div>

      <!-- Section Image uniquement pour grands écrans -->
      <div class="hidden md:block md:w-1/2">
        <img
          src="https://www.kiwili.com/wp-content/uploads/2023/07/Logiciel-gestion-de-taches-collaboratif.webp"
          alt="Background"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Suppression de l'image sur petits écrans */
@media (max-width: 768px) {
  .md\\:block {
    display: none !important;
  }
}
</style>

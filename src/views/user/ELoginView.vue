<script setup>
import { ref } from 'vue'
import router from '../../router'
import { RouterLink } from 'vue-router'
import { useI18n } from "vue-i18n";

const { t } = useI18n();
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
      class="flex flex-col md:flex-row  bg-white w-full max-w-md sm:max-w-lg md:max-w-5xl p-6 md:p-8 shadow-2xl rounded-lg"
    >
      <!-- Section Formulaire -->
      <div class="w-full md:w-1/2 p-6">
        <form @submit.prevent="loginUser">
          <div class="mb-4 text-center text-3xl font-bold">
            <h2 class="uppercase">{{ $t('welcome')}}</h2>
          </div>
          <div class="flex justify-center items-center mb-5">
             <i class="fa-solid fa-circle-user text-6xl text-customBlueVariant"></i>
          </div>
          <div class="mb-8 flex flex-row flex-nowrap space-x-2">
            <input type="checkbox" class="w-8"/>
            <p class="translate-y-4"> {{$t('by_continuing_you_agree_to_Enjoy')}} <span class="text-customBlueVariant text-md font-semibold">{{$t('Terms_of_Service')}}</span> {{$t('and_acknowledge_our')}} <span class="text-customBlueVariant text-md font-semibold">{{$t('Privacy_Policy')}}</span> </p>
          </div>
          <div class="mb-5">
            <input
              type="text"
              v-model="email"
              placeholder="Email"
              required
              class="border-b-2 border-gray-300 focus:border-customBlue outline-none p-2 w-full"
            />
          </div>
          <div class="mb-5 relative">
            <input
              :type="passwordVisible ? 'text' : 'password'"
              v-model="password"
              placeholder="Password"
              required
              class="border-b-2 border-gray-300 focus:border-customBlue outline-none p-2 w-full"
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
            <p class="flex justify-end mb-5 text-customBlueVariant text-md font-semibold">{{$t('forgot_password')}}</p>
            <button
              type="submit"
              class="w-full px-4 py-2 text-white bg-customRed rounded-full hover:bg-orange-500 focus:outline-none focus:ring focus:ring- customBlue uppercase"
            >
              {{$t('login')}}
            </button>
          </div>
          <div class="flex items-center justify-between pt-4">
            <p>{{$t('dont_have_an_account')}}<span class="text-customBlueVariant text-md font-semibold">{{$t('claim_your_business_on_enjoy')}}</span></p>
            <!-- <p class="text-blue-500 cursor-pointer hover:text-blue-700">
              <RouterLink to="">Register</RouterLink>
            </p> -->
          </div>
          <!-- Divider -->
          <div
            class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
            <p
              class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
              {{ $t('or') }}
            </p>
          </div>

          <!-- Social login buttons -->
          <a
            class="mb-3 flex w-full items-center justify-center rounded-full bg-white border border-neutral-300 px-7 pb-2.5 pt-3 text-center text-lg font-semibold  leading-normal text-neutral-300 shadow transition duration-150 ease-in-out  focus:outline-none focus:ring-0 "
            href="#!"
            role="button">
            <!-- google -->
            <span
              class="me-8 fill-white [&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5 text-gray-400">
              <svg class="h-10 w-10 text-orange-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M17.788 5.108A9 9 0 1021 12h-8" /></svg>


            </span>
            {{$t('login_with_google')}}
          </a>
          <a
            class="mb-3 flex w-full items-center justify-center rounded-full bg-black px-7 pb-2.5 pt-3 text-center text-lg font-semibold  leading-normal text-white shadow-info-3 transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-black  focus:outline-none focus:ring-0 "
            href="#!"
            role="button">
            <!-- apple -->
            <span class="me-8 fill-white [&>svg]:h-3.5 [&>svg]:w-3.5">
              <svg class="h-10 w-10 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7c-3 0-4 3-4 5.5 0 3 2 7.5 4 7.5 1.088-.046 1.679-.5 3-.5 1.312 0 1.5.5 3 .5s4-3 4-5c-.028-.01-2.472-.403-2.5-3-.019-2.17 2.416-2.954 2.5-3-1.023-1.492-2.951-1.963-3.5-2-1.433-.111-2.83 1-3.5 1-.68 0-1.9-1-3-1z" />  <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" /></svg>
            </span>
            {{$t('login_with_apple')}}
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

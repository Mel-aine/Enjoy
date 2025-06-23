<template>
  <div class=" bg-gray-50 h-screen relative overflow-hidden">
    <div class="relative bg-white dark:bg-gray-900">
      <div class="relative flex flex-col lg:flex-row dark:bg-gray-900">
        <div class="flex flex-col flex-1 w-full lg:w-1/2 relative">
          <div class="floating-shapes absolute inset-0 z-0">
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
          </div>

          <div class="flex items-center justify-center relative z-10">
            <div class="w-full max-w-2xl glass-effect slide-in mx-4 my-4">
              <div class="">
                <div class="mb-4 text-center">
                  <div class="mb-3">
                    <div
                      class="w-12 h-12 bg-gradient-to-r from-orange-500 to-customBlue rounded-xl mx-auto flex items-center justify-center mb-3"
                    >
                      <svg
                        class="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <h1
                    class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2"
                  >
                    {{ $t('create_account') }}
                  </h1>
                  <p class="text-gray-600 text-sm md:text-base">
                    {{ $t('join_us') }}
                  </p>
                </div>

                <!-- <div>
              <button
                type="button"
                class="w-full flex items-center justify-center px-6 py-3 border-2 border-gray-200 rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-100 transition-all social-btn font-medium"
              >
                <span class="mr-3">
                  <svg
                    class="h-6 w-6 text-gray-900"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M17.788 5.108A9 9 0 1021 12h-8" />
                  </svg>
                </span>
                Continuer avec Google
              </button>
            </div>

                  <div class="relative my-4">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-4 bg-white text-gray-500 font-medium">OU</span>
              </div>
            </div> -->

                <form class="space-y-3" id="signupForm">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div class="space-y-1">
                      <label class="text-xs font-medium text-gray-700"
                        >{{ $t('first_name') }} <span class="text-red-500">*</span></label
                      >
                      <input
                        type="text"
                        name="firstName"
                        :placeholder="$t('your_first_name')"
                        required
                        class="w-full px-3 py-2 bg-white border-2 border-gray-200 rounded-lg focus:border-customBlue focus:ring-1 focus:ring-purple-100 outline-none transition-all duration-300 input-focus text-gray-800 placeholder-gray-400 text-sm"
                      />
                    </div>
                    <div class="space-y-1">
                      <label class="text-xs font-medium text-gray-700"
                        >{{ $t('last_name') }} <span class="text-red-500">*</span></label
                      >
                      <input
                        type="text"
                        name="lastName"
                        :placeholder="$t('your_last_name')"
                        required
                        class="w-full px-3 py-2 bg-white border-2 border-gray-200 rounded-lg focus:border-customBlue focus:ring-1 focus:ring-purple-100 outline-none transition-all duration-300 input-focus text-gray-800 placeholder-gray-400 text-sm"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div class="space-y-1">
                      <label class="text-xs font-medium text-gray-700"
                        >{{ $t('email') }} <span class="text-red-500">*</span></label
                      >
                      <div class="relative">
                        <input
                          type="email"
                          name="email"
                          placeholder="info@email.com"
                          required
                          class="w-full px-3 py-2 pr-10 bg-white border-2 border-gray-200 rounded-lg focus:border-customBlue focus:ring-1 focus:ring-purple-100 outline-none transition-all duration-300 input-focus text-gray-800 placeholder-gray-400 text-sm"
                        />
                        <div
                          class="absolute inset-y-0 right-0 flex items-center pr-3"
                        >
                          <svg
                            class="w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="space-y-1">
                      <label class="text-xs font-medium text-gray-700"
                        >{{ $t('phone') }}</label
                      >
                      <input
                        type="tel"
                        name="phone"
                        placeholder="6 12 34 56 78"
                        class="w-full px-3 py-2 bg-white border-2 border-gray-200 rounded-lg focus:border-customBlue focus:ring-1 focus:ring-purple-100 outline-none transition-all duration-300 input-focus text-gray-800 placeholder-gray-400 text-sm"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div class="space-y-1">
                      <label class="text-xs font-medium text-gray-700"
                        >{{ $t('password') }} <span class="text-red-500">*</span></label
                      >
                      <div class="relative">
                        <input
                          id="password"
                          name="password"
                          :type="showPassword ? 'text' : 'password'"
                          v-model="password"
                          placeholder="••••••••"
                          required
                          class="w-full px-3 py-2 pr-10 bg-white border-2 border-gray-200 rounded-lg focus:border-customBlue focus:ring-1 focus:ring-purple-100 outline-none transition-all duration-300 input-focus text-gray-800 placeholder-gray-400 text-sm"
                        />
                        <button
                          type="button"
                          @click="togglePassword"
                          class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                        >
                          <svg
                            v-if="!showPassword"
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          <svg
                            v-else
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="space-y-1">
                      <label class="text-xs font-medium text-gray-700"
                        >{{ $t('confirmPassword') }} <span class="text-red-500">*</span></label
                      >
                      <div class="relative">
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          placeholder="••••••••"
                          required
                          :type="showConfirmPassword ? 'text' : 'password'"
                          v-model="confirmPassword"
                          :class="`w-full px-3 py-2 pr-10 bg-white border-2 rounded-lg focus:border-customBlue focus:ring-1 focus:ring-purple-100 outline-none transition-all duration-300 input-focus text-gray-800 placeholder-gray-400 text-sm ${confirmPasswordClass()}`"
                        />
                        <button
                          type="button"
                          @click="toggleConfirmPassword"
                          class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                        >
                          <svg
                            v-if="!showConfirmPassword"
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          <svg
                            v-else
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    class="criteria-section bg-blue-50 rounded-lg p-3 border border-blue-100"
                  >
                    <h4 class="text-xs font-semibold text-gray-700 mb-2">
                      {{ $t('security_criteria') }} :
                    </h4>
                    <div class="grid grid-cols-2 gap-1 text-xs">
                      <div class="flex items-center space-x-1">
                        <div
                          :class="[
                            'w-3 h-3 rounded-full',
                            lengthOk
                              ? 'bg-green-500'
                              : 'border border-gray-300',
                          ]"
                        ></div>
                        <span class="text-gray-600">8+ {{ $t('character') }}</span>
                      </div>
                      <div class="flex items-center space-x-1">
                        <div
                          :class="[
                            'w-3 h-3 rounded-full',
                            uppercaseOk
                              ? 'bg-green-500'
                              : 'border border-gray-300',
                          ]"
                        ></div>
                        <span class="text-gray-600">{{ $t('uppercase') }}</span>
                      </div>
                      <div class="flex items-center space-x-1">
                        <div
                          :class="[
                            'w-3 h-3 rounded-full',
                            lowercaseOk
                              ? 'bg-green-500'
                              : 'border border-gray-300',
                          ]"
                        ></div>
                        <span class="text-gray-600">{{ $t('lowercase') }}</span>
                      </div>
                      <div class="flex items-center space-x-1">
                        <div
                          :class="[
                            'w-3 h-3 rounded-full',
                            numberOk
                              ? 'bg-green-500'
                              : 'border border-gray-300',
                          ]"
                        ></div>
                        <span class="text-gray-600">{{ $t('number') }}</span>
                      </div>
                    </div>
                  </div>

                  <div class="space-y-2">
                    <label
                      class="flex items-start space-x-2 p-3 bg-blue-50 rounded-lg border border-blue-100 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        required
                        class="w-4 h-4 text-customBlue bg-white border-2 border-gray-300 rounded focus:ring-customBlue focus:ring-2 mt-0.5 flex-shrink-0"
                      />
                      <span class="text-xs text-gray-700 leading-relaxed">
                        {{ $t('accept_the') }}
                        <span
                          class="text-customBlueVariant font-semibold hover:underline"
                          >{{ $t('terms_of') }}</span
                        >
                        {{ $t('and_the') }}
                        <span
                          class="text-customBlueVariant font-semibold hover:underline"
                          >{{ $t('policy') }}</span
                        >
                        <span class="text-red-500">*</span>
                      </span>
                    </label>
                  </div>

                  <div class="pt-2">
                    <button
                      type="submit"
                      id="submitBtn"
                      class="w-full px-4 py-2.5 bg-orange-500 text-white rounded-lg hover:from-orange-800 hover:to-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200 transition-all duration-300 btn-hover font-medium text-sm"
                    >
                      {{ $t('create_my') }}
                    </button>
                  </div>

                  <!-- Lien de connexion -->
                  <div
                    class="text-center text-gray-600 pt-3 border-t border-gray-200"
                  >
                    <span class="text-xs">{{ $t('you_have_already_an_account') }} </span>
                    <a
                      href="/login"
                      class="text-customBlueVariant font-semibold hover:underline text-xs"
                    >
                      {{ $t('login') }}
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <!-- Section image (masquée sur mobile) -->
        <div
          class="hidden lg:flex relative items-center w-full h-screen lg:w-1/2 bg-gradient-to-br from-orange-500 to-white dark:bg-white/5"
        >
          <div class="flex items-center justify-center z-10 w-full h-full p-8">
            <img
              src="@/assets/Sign up-pana.svg"
              alt="Background"
              class="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const errors = ref({});
const loading = ref(false);
const message = ref("");
const messageType = ref("");
const password = ref("");
const termsAccepted = ref(false);
const showPassword = ref(false);
const confirmPassword = ref("");
const showConfirmPassword = ref(false);
const lengthOk = ref(false);
const uppercaseOk = ref(false);
const lowercaseOk = ref(false);
const numberOk = ref(false);
const passwordsMatch = ref(true);

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const messageClass = computed(() => {
  return messageType.value === "error"
    ? "bg-red-500/20 border border-red-400/50 text-red-200"
    : "bg-green-500/20 border border-green-400/50 text-green-200";
});

const validateForm = () => {
  errors.value = {};
  if (!form.value.name) errors.value.name = "Le nom est requis";
  if (!form.value.email) {
    errors.value.email = "L'email est requis";
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = "Email invalide";
  }
  if (!form.value.password) {
    errors.value.password = "Le mot de passe est requis";
  } else if (form.value.password.length < 6) {
    errors.value.password = "Min. 6 caractères";
  }
  if (form.value.password !== form.value.password_confirmation) {
    errors.value.password_confirmation =
      "Les mots de passe ne correspondent pas";
  }
  return Object.keys(errors.value).length === 0;
};

const handleRegister = async () => {
  if (!validateForm()) return;
  loading.value = true;
  message.value = "";

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simuler API
    message.value = "Inscription réussie !";
    messageType.value = "success";
    // redirection possible ici
  } catch (e) {
    message.value = "Erreur pendant l’inscription.";
    messageType.value = "error";
  } finally {
    loading.value = false;
  }
};

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

watch(password, (val) => {
  lengthOk.value = val.length >= 8;
  uppercaseOk.value = /[A-Z]/.test(val);
  lowercaseOk.value = /[a-z]/.test(val);
  numberOk.value = /\d/.test(val);
  checkPasswordMatch();
});

watch(confirmPassword, () => {
  checkPasswordMatch();
});

const checkPasswordMatch = () => {
  passwordsMatch.value = password.value === confirmPassword.value;
};

const confirmPasswordClass = () => {
  return passwordsMatch.value ? "border-gray-200" : "border-red-500";
};
</script>

<style>
div {
  font-family: "Inter", sans-serif;
}
.glass-effect {
  backdrop-filter: blur(10px);
}

.floating-shapes {
  overflow: hidden;
}

.shape {
  position: absolute;
  background: linear-gradient(45deg, #f97316, #3b82f6);
  border-radius: 50%;
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.shape:nth-child(1) {
  width: 80px;
  height: 80px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape:nth-child(2) {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 10%;
  animation-delay: 2s;
}

.shape:nth-child(3) {
  width: 60px;
  height: 60px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

.shape:nth-child(4) {
  width: 100px;
  height: 100px;
  top: 30%;
  right: 30%;
  animation-delay: 1s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

.slide-in {
  animation: slideIn 0.6s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.input-focus:focus {
  transform: translateY(-2px);
}

.btn-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

/* @media (max-height: 500px) {
  .criteria-section {
    display: none;
  }
} */
</style>

 <template>
  <div class="gradient-bg h-screen relative overflow-hidden">

    <div class="floating-shapes">
      <div class="shape"></div>
      <div class="shape"></div>
      <div class="shape"></div>
    </div>


    <div class="flex items-center justify-center h-full p-2">
      <div
        class="flex flex-col lg:flex-row glass-effect w-full max-w-6xl h-[90%] rounded-3xl overflow-hidden slide-in"
      >

        <div class="w-full lg:w-1/2 p-4 lg:p-6 overflow-auto">
          <div class="mb-2 text-center">
            <div
              class="w-12 h-12 bg-gradient-to-r from-orange-500 to-customBlue rounded-2xl mx-auto flex items-center justify-center mb-1"
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-1">
              {{ $t('welcome') }}
            </h1>
            <p class="text-gray-600 text-base">{{ $t('login_into') }}</p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div class="space-y-1">
              <label class="text-sm font-medium text-gray-700"
                >{{ $t('email') }} <span class="text-red-500">*</span></label>
              <input
                type="email"
                v-model="email"
                placeholder="info@email.com"
                required
                class="w-full px-4 py-2.5 bg-white border-2 border-gray-200 rounded-xl focus:border-customBlue focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 input-focus text-gray-800 placeholder-gray-400"
              />
            </div>

            <div class="space-y-1">
               <label class="text-sm font-medium text-gray-700"
                        >{{ $t('password') }} <span class="text-red-500">*</span></label>
              <div class="relative">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  v-model="password"
                  id="password"
                  placeholder="••••••••"
                  required
                  class="w-full px-4 py-2.5 bg-white border-2 border-gray-200 rounded-xl focus:border-customBlue focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 input-focus text-gray-800 placeholder-gray-400"
                />
                <button
                  type="button"
                  @click="togglePassword"
                  class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600"
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

            <div class="flex items-center justify-between">
              <label class="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  class="w-4 h-4 rounded border-white/20 bg-white/10 text-blue-400 focus:ring-blue-400 focus:ring-2"
                />
                <span class="text-gray-800 text-sm">{{ $t('keep_me') }}</span>
              </label>
              <a
                href="#"
                class="text-customBlueVariant hover:text-customBlue font-medium text-sm hover:underline transition-colors"
              >
                {{ $t('forgotPassword') }}
              </a>
            </div>

            <button
              type="submit"
              class="w-full bg-gradient-to-r from-customRed to-orange-500 text-white font-semibold py-2 px-6 rounded-xl hover:from-red-600 hover:to-orange-600 focus:outline-none focus:ring-4 focus:ring-red-200 transition-all duration-300 btn-hover text-lg shadow-lg"
            >
              {{ $t('login') }}
            </button>

            <div class="text-center text-gray-600 text-sm">
              <span>{{ $t('dont_have_an_account') }}</span>
              <a
                href="/register"
                class="text-purple-500 hover:text-purple-400 font-medium"
                >{{ $t('sign_up') }}</a
              >
            </div>

            <div class="relative my-2">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-4 bg-white text-gray-500 font-medium">{{ $t('or') }}</span>
              </div>
            </div>

            <div>
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
                {{ $t('login_with_google') }}
              </button>
            </div>
          </form>
        </div>


        <div class="hidden lg:block lg:w-1/2 relative overflow-hidden">
          <div
            class="absolute inset-0 bg-gradient-to-br from-orange-500/40 to-customBlue/40 z-10"
          ></div>
          <img
            src="@/assets/Login-pana.svg"
            alt="Équipe collaborative moderne"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const termsAccepted = ref(false);
const showPassword = ref(false);

function togglePassword() {
  showPassword.value = !showPassword.value;
}

function handleSubmit() {
  if (!termsAccepted.value) {
    alert("Veuillez accepter les conditions.");
    return;
  }

  // Traitement de connexion
  console.log("Email:", email.value);
  console.log("Password:", password.value);
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

div {
  font-family: "Inter", sans-serif;
}

.glass-effect {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.gradient-bg {
  background: linear-gradient(135deg, #e6e6fa 0%, #e6e6fa 70%, #ffffff 100%);
}

.input-focus:focus {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.btn-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.social-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    rgba(139, 92, 246, 0.3),
    rgba(59, 130, 246, 0.3)
  );
  animation: float 6s ease-in-out infinite;
}

.shape:nth-child(1) {
  width: 80px;
  height: 80px;
  top: 20%;
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
  animation: slideIn 0.8s ease-out;
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
</style>

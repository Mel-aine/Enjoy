<template>
  <div >
    <div  class="min-h-screen bg-white">
      <!-- image -->
      <div class="relative w-full h-[470px] top-0 overflow-hidden ">
        <div class="absolute inset-0 transition-opacity duration-700 ease-in-out flex">
          <div class="absolute inset-0  flex justify-center hotels-center transition-opacity duration-700 ease-in-out">
            <div class="relative sm:flex w-full h-[720px]">
              <div v-for="(image, index) in hotel.images" :key="index" class="flex-1 h-[720px]">
                <img :src="image" class="w-full h-full object-cover" alt="Image Hôtel">
              </div>
            </div>
          </div>
        </div>

        <div
          class="absolute top-[52%] left-[22%] transform -translate-x-1/2 -translate-y-1/2 text-white p-5 sm:mx-0 mx-24">
          <h1 class="mb-4 text-5xl font-extrabold text-white">{{ hotel.name }}</h1>
          <div class="flex hotels-center mb-4 sm:mb-3 md:mb-4 space-x-1">
            <span v-for="star in hotel.rating" :key="star" class="">
              <svg v-if="star <= hotel.rating" xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 fill-current text-white rounded-md bg-orange-500 p-1" viewBox="0 0 24 24">
                <path d="M12 2l2.58 7.95H22l-6.29 4.74 2.58 7.95-6.29-4.74-6.29 4.74 2.58-7.95L2 9.95h7.42L12 2z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-white p-1 rounded-md bg-white/25"
                viewBox="0 0 24 24">
                <path d="M12 2l2.58 7.95H22l-6.29 4.74 2.58 7.95-6.29-4.74-6.29 4.74 2.58-7.95L2 9.95h7.42L12 2z" />
              </svg>
            </span>
          </div>
          <div class="flex flex-row gap-2 mb-2 hotels-center">
            <span class="flex flex-row gap-2 hotels-center text-ellipsis text-purple-800 font-semibold text-md">
              <svg viewBox="0 0 50 50" width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                <rect width="50" height="50" rx="30" ry="30" fill="purple" />
                <polyline points="12,25 20,35 38,15" fill="none" stroke="white" stroke-width="5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg> {{ $t('claimed') }} </span>. FCFA . <a v-for="cat in hotel.category" :key="cat.id" href="#"
              class="hover:underline font-semibold">{{ $t('Category.' + cat) }}</a>
          </div>
          <div class="mb-5"><span class="text-green-500">{{ $t('open') }}</span> <span
              class="font-semibold text-md">11:00 AM - 03:00 AM ({{ $t('next_day') }})</span>
            <button
              class="ml-2 bg-white/15 rounded-md px-1 py-1 text-sm font-semibold transition-transform duration-300 hover:scale-110">{{
                $t('see_hours') }}</button>
          </div>
        </div>

        <div
          class="absolute lg:top-[45%] top-[92%] left-[81%] transform -translate-x-1/2 -translate-y-1/2 text-white border lg:px-5 px-0 lg:py-2 py-0 rounded-md hover:bg-white/15">
          <button
            class="text-md md:text-sm lg:text-xl font-extrabold tracking-tight leading-none text-white transition-transform duration-300 hover:scale-110">
            {{ $t('see_photo') }}
          </button>
        </div>

      </div>
      <SearchHotel @search="handleSearch"></SearchHotel>
      <div class=" flex lg:flex-row justify-between flex-col mx-auto md:px-4 lg:px-8 mt-20"
        :class="{ 'hidden': search }">
        <div class="mx-auto">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  md:space-y-0 space-y-4  mt-40 mb-7 space-x-2 hotels-center sm:px-8 mx-8 md:mt-10 lg:mt-10 ">
            <!-- ajout button -->
            <div
              class="border border-gray-200 bg-orange-500 py-2 px-8 transition-transform duration-300 hover:scale-105 hover:bg-gray-100 rounded-md ">
              <button class="flex flex-row hotels-center space-x-2 text-white hover:text-orange-600">
                <svg class="h-8 w-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                  fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                </svg>
                <span class=" font-normal text-md">{{ $t('write_review') }}</span>
              </button>
            </div>
            <div
              class="border border-gray-200 py-2 px- transition-transform duration-300 hover:scale-105 hover:bg-gray-100 rounded-md">
              <button class="flex flex-row hotels-center space-x-2 text-gray-950 hover:text-green-600">
                <svg class="h-8 w-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                  fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="13" r="3" />
                  <path
                    d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h3m9 6v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                  <line x1="15" y1="6" x2="21" y2="6" />
                </svg>
                <span class=" font-normal text-md">{{ $t('add_photo') }}</span>
              </button>
            </div>
            <div
              class="border border-gray-200 py-2 px-8 transition-transform duration-300 hover:scale-105 hover:bg-gray-100 rounded-md">
              <button class="flex flex-row hotels-center space-x-2 text-gray-950 hover:text-red-600">
                <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
                <span class=" font-normal text-md">{{ $t('share') }}</span>
              </button>
            </div>
            <div
              class="border border-gray-200 py-2 lg:px-8 px-4 transition-transform duration-300 hover:scale-105 hover:bg-gray-100 rounded-md">
              <button class="flex flex-row hotels-center space-x-2 text-gray-950 hover:text-purple-600">
                <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
                <span class=" font-normal text-md">{{ $t('save') }}</span>
              </button>
            </div>

          </div>
          <!-- image inside outside -->
          <div class="w-full lg:px-8 lg:mx-8  ">
            <div class="w-[92%] px-5 lg:px-0 mx-auto">
              <hr class="h-px mb-6 bg-gray-200 border-0 dark:bg-gray-700">
              <span class="text-gray-950  font-semibold text-xl">{{ $t('whats') }}</span>
            </div>
          </div>
          <div class="w-full md:flex md:space-y-0 space-y-4 mb-14 gap-8 my-8 px-8 md:mx-8 lg:mx-8 ">
            <div class="flex flex-col hotels-center w-[300px] md:w-[200px] bg-white ">
              <!-- Image / Carousel -->
              <div class="relative w-full">
                <!-- Carousel wrapper -->
                <div class="relative h-[150px] overflow-hidden rounded-t-lg">
                  <div class="flex transition-transform duration-500 ease-in-out"
                    :style="{ transform: 'translateX(' + -currentIndex * 100 + '%)' }">
                    <div v-for="(img, index) in images" :key="index" class="w-full flex-shrink-0">
                      <img :src="img" alt="Menu hotel"
                        class="object-cover w-full  h-48 md:h-40 lg:h-48 rounded-t-lg transform hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
                <!-- Slider controls -->
                <button @click="prevSlide" type="button"
                  class="absolute top-1/2 left-0 z-30 flex hotels-center justify-center h-10 w-10 transform -translate-y-1/2 px-4 cursor-pointer group focus:outline-none">
                  <span
                    class="inline-flex hotels-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 1 1 5l4 4" />
                    </svg>
                    <span class="sr-only">Previous</span>
                  </span>
                </button>

                <button @click="nextSlide" type="button"
                  class="absolute top-1/2 right-0 z-30 flex hotels-center justify-center h-10 w-10 transform -translate-y-1/2 px-4 cursor-pointer group focus:outline-none">
                  <span
                    class="inline-flex hotels-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 9 4-4-4-4" />
                    </svg>
                    <span class="sr-only">Next</span>
                  </span>
                </button>

              </div>

              <!-- Contenu -->
              <div class="flex flex-col justify-between  w-full text-start">
                <h3
                  class="text-xl font-bold text-gray-900 mt-2 mb-1 dark:text-white transition-transform hover:scale-105">
                  {{ $t('inside') }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 ">
                  63 Photos
                </p>
                <div class="mt-4 ">
                  <span class="text-md font-normal text-gray-600 flex flex-row gap-2">
                    <svg width="24" height="24" class="icon_svg">
                      <path
                        d="M11 22.12a2 2 0 0 1-1.56-.76L5.25 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2.25l4.21-4.4A2 2 0 0 1 13 3.88v16.24a2 2 0 0 1-2 2ZM3 9v6h2.68a1 1 0 0 1 .72.31l4.6 4.82V3.88l-.06.12L6.4 8.69a1 1 0 0 1-.72.31H3Zm13 12.16a1.011 1.011 0 0 1-.3-2 7.54 7.54 0 0 0 0-14.4 1.001 1.001 0 1 1 .6-1.91 9.54 9.54 0 0 1 0 18.22 1 1 0 0 1-.3.09Zm0-4.42a1 1 0 0 1-.56-1.83 3.49 3.49 0 0 0 0-5.82 1 1 0 0 1-.27-1.38 1 1 0 0 1 1.39-.27 5.48 5.48 0 0 1 0 9.12 1 1 0 0 1-.56.18Z">
                      </path>
                    </svg>
                    {{ $t('moderate_noise') }}
                  </span>
                </div>
                <div class="mt-3 ">
                  <span class="text-md font-normal text-gray-600 flex flex-row gap-2">
                    <svg width="24" height="24" class="icon_svg">
                      <path
                        d="M7 22H3.516a1 1 0 0 1-.965-.737l-1.5-5.52a1 1 0 0 1 1.93-.525L4.28 20H7a1 1 0 0 1 0 2Zm13.516 0H17a1 1 0 1 1 0-2h2.751l1.3-4.782a1 1 0 0 1 1.93.525l-1.5 5.52a1 1 0 0 1-.965.737Zm1.975-13.985L12.477 2.126a1.001 1.001 0 0 0-1.015.001L1.477 8.016a1.001 1.001 0 0 0-.493.861v2.03a.999.999 0 0 0 .465.845 7.202 7.202 0 0 0 3.859 1.114 7.143 7.143 0 0 0 3.36-.833 7.093 7.093 0 0 0 2.348.748V16H7a1 1 0 1 0 0 2h4.016v3.012a1 1 0 0 0 2 0V18H17a1 1 0 0 0 0-2h-3.984v-3.23a7.076 7.076 0 0 0 2.292-.738 7.21 7.21 0 0 0 7.212-.28.999.999 0 0 0 .464-.845v-2.03a1 1 0 0 0-.493-.862Zm-1.507 2.31a5.206 5.206 0 0 1-5.09-.262.823.823 0 0 0-.09-.051.998.998 0 0 0-1.044.025 5.113 5.113 0 0 1-5.546 0 1.122 1.122 0 0 0-1.14.025 5.21 5.21 0 0 1-5.09.262v-.876l8.987-5.3 9.013 5.301v.875Z">
                      </path>
                    </svg>
                    {{ $t('outdor_seating') }}
                  </span>
                </div>
              </div>
            </div>
            <div class="flex flex-col hotels-center w-[300px] md:w-[200px] bg-white ">
              <!-- Image / Carousel -->
              <div class="relative w-full">
                <!-- Carousel wrapper -->
                <div class="relative h-[150px] overflow-hidden rounded-t-lg">
                  <div class="flex transition-transform duration-500 ease-in-out"
                    :style="{ transform: 'translateX(' + -currentIndex2 * 100 + '%)' }">
                    <div v-for="(img, index) in images" :key="index" class="w-full flex-shrink-0">
                      <img :src="img" alt="Menu hotel"
                        class="object-cover w-full h-48 md:h-40 lg:h-48 rounded-t-lg transform hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                <!-- Slider controls -->
                <button @click="prevSlide2" type="button"
                  class="absolute top-1/2 left-0 z-30 flex hotels-center justify-center h-10 w-10 transform -translate-y-1/2 px-4 cursor-pointer group focus:outline-none">
                  <span
                    class="inline-flex hotels-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 1 1 5l4 4" />
                    </svg>
                    <span class="sr-only">Previous</span>
                  </span>
                </button>

                <button @click="nextSlide2" type="button"
                  class="absolute top-1/2 right-0 z-30 flex hotels-center justify-center h-10 w-10 transform -translate-y-1/2 px-4 cursor-pointer group focus:outline-none">
                  <span
                    class="inline-flex hotels-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 9 4-4-4-4" />
                    </svg>
                    <span class="sr-only">Next</span>
                  </span>
                </button>

              </div>

              <!-- Contenu -->
              <div class="flex flex-col justify-between  w-full text-start">
                <h3
                  class="text-xl font-bold text-gray-900 mt-2 mb-1 dark:text-white transition-transform hover:scale-105">
                  {{ $t('outside') }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 ">
                  63 Photos
                </p>
                <div class="mt-4 ">
                  <span class="text-md font-normal text-gray-600 flex flex-row gap-2">
                    <svg width="24" height="24" class="icon_svg">
                      <path
                        d="M20.2 15.57a12.21 12.21 0 0 0-2.32-4.87l2.7-2.7h1.15a1 1 0 1 0 0-2H17.5a1 1 0 0 0 0 2h.25l-1.23 1.23A12.17 12.17 0 0 0 9 6V2a1 1 0 0 0-1-1H5a1 1 0 0 0 0 2h2v6.08a7 7 0 1 0 2 0V8a10.25 10.25 0 0 1 9.18 7.72 3.74 3.74 0 1 0 2-.18l.02.03ZM13 16a5 5 0 1 1-6-4.9V16a1 1 0 1 0 2 0v-4.9a5 5 0 0 1 4 4.9Zm6.5 5a1.75 1.75 0 0 1-1-3.17v1.67a1 1 0 1 0 2 0v-1.7a1.75 1.75 0 0 1-1 3.2Z">
                      </path>
                    </svg>
                    {{ $t('hipster') }}
                  </span>
                </div>
                <div class="mt-3 ">
                  <span class="text-md font-normal text-gray-600 flex flex-row gap-2">
                    <svg width="24" height="24" class="icon_svg">
                      <path
                        d="M22 6h-4.65a3 3 0 0 1-2.74-1.77l-1.18-2.64a1 1 0 0 0-.91-.59H6.1A5.11 5.11 0 0 0 1 6.1V13a5 5 0 0 0 5 5h6.3a3 3 0 0 0-.78 2A3 3 0 1 0 15 17.05v-1.14c1.9-.26 6-1.31 7.91-5.5A1 1 0 0 0 23 10V7a1 1 0 0 0-1-1Zm-6.5 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM21 9.78C19 13.84 14.19 14 14 14a1 1 0 0 0-1 1v1h-3c.076-.1.146-.203.21-.31a4.94 4.94 0 0 0 .31-4.78l-2.36-5a1 1 0 0 0-1.36-.53 1 1 0 0 0-.48 1.33l2.36 5A3 3 0 1 1 3 13V6.1A3.1 3.1 0 0 1 6.1 3h5.77l.92 2a5 5 0 0 0 4.56 3H21v1.78Z">
                      </path>
                    </svg>
                    {{ $t('dog_allow') }}
                  </span>
                </div>
              </div>
            </div>
            <div class="flex flex-col hotels-center w-[300px] md:w-[200px] bg-white ">
              <!-- Image / Carousel -->
              <div class="relative w-full">
                <!-- Carousel wrapper -->
                <div class="relative h-[150px] overflow-hidden rounded-t-lg">
                  <div class="flex transition-transform duration-500 ease-in-out"
                    :style="{ transform: 'translateX(' + -currentIndex1 * 100 + '%)' }">
                    <div v-for="(img, index) in images" :key="index" class="w-full flex-shrink-0">
                      <img :src="img" alt="Menu hotel"
                        class="object-cover w-full h-48 md:h-40 lg:h-48 rounded-t-lg transform hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                <!-- Slider controls -->
                <button @click="prevSlide1" type="button"
                  class="absolute top-1/2 left-0 z-30 flex hotels-center justify-center h-10 w-10 transform -translate-y-1/2 px-4 cursor-pointer group focus:outline-none">
                  <span
                    class="inline-flex hotels-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 1 1 5l4 4" />
                    </svg>
                    <span class="sr-only">Previous</span>
                  </span>
                </button>

                <button @click="nextSlide1" type="button"
                  class="absolute top-1/2 right-0 z-30 flex hotels-center justify-center h-10 w-10 transform -translate-y-1/2 px-4 cursor-pointer group focus:outline-none">
                  <span
                    class="inline-flex hotels-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 9 4-4-4-4" />
                    </svg>
                    <span class="sr-only">Next</span>
                  </span>
                </button>

              </div>

              <!-- Contenu -->
              <div class="flex flex-col justify-between  w-full text-start">
                <h3
                  class="text-xl font-bold text-gray-900 mt-2 mb-1 dark:text-white transition-transform hover:scale-105">
                  {{ $t('all_photo') }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 ">
                  63 Photos
                </p>
                <div class="mt-4 ">
                  <span class="text-md font-normal text-gray-600 flex flex-row gap-2">
                    <svg width="24" height="24" class="icon_svg">
                      <path
                        d="M22.129 11.22a11.45 11.45 0 0 0-3.24-1.77 4.497 4.497 0 0 0 .5-2.046V6.007a4.512 4.512 0 0 0-7.398-3.47 1 1 0 0 0 1.28 1.537 2.513 2.513 0 0 1 4.118 1.933v1.397a2.513 2.513 0 0 1-1.495 2.298 1 1 0 0 0 .808 1.83c.262-.119.511-.263.745-.43a9.516 9.516 0 0 1 3.445 1.69.597.597 0 0 1 0 .93c-.283.223-.925.635-1.149.774a1 1 0 0 0 1.059 1.697c.092-.057.908-.568 1.327-.898a2.596 2.596 0 0 0 0-4.074Z">
                      </path>
                      <path
                        d="M17.624 15.54a12.423 12.423 0 0 0-3.438-1.901 4.786 4.786 0 0 0 .418-1.947V9.784a4.829 4.829 0 0 0-9.658 0v1.908c.002.672.144 1.337.42 1.95a12.264 12.264 0 0 0-3.442 1.898 2.742 2.742 0 0 0 0 4.298 12.722 12.722 0 0 0 7.85 2.668 12.716 12.716 0 0 0 7.85-2.668 2.742 2.742 0 0 0 0-4.299ZM6.946 9.783a2.829 2.829 0 0 1 5.658 0v1.908a2.828 2.828 0 1 1-5.658 0V9.784Zm9.44 8.483a10.707 10.707 0 0 1-6.612 2.239 10.717 10.717 0 0 1-6.613-2.24.74.74 0 0 1 .001-1.156 10.327 10.327 0 0 1 3.476-1.776 4.735 4.735 0 0 0 6.27.003c1.26.367 2.44.97 3.479 1.773a.74.74 0 0 1 0 1.157Z">
                      </path>
                    </svg>
                    {{ $t('good_for_group') }}
                  </span>
                </div>
                <div class="mt-3 ">
                  <span class="text-md font-normal text-gray-600 flex flex-row gap-2">
                    <svg width="24" height="24" class="icon_svg">
                      <path
                        d="M20.92 17.16a.56.56 0 0 0-.05-.08L5.54 1.75A2.57 2.57 0 1 0 1.9 5.38l.74.74a1 1 0 0 0 1.41-1.41L3.31 4a.573.573 0 0 1 .81-.81L7 6v7a4 4 0 0 0 .83 2.42l-1 1A3.59 3.59 0 0 0 5.16 16a3.5 3.5 0 1 0 3.5 3.5 3.41 3.41 0 0 0-.43-1.65l1.18-1.18A4 4 0 0 0 11 17h7l.46.46a3 3 0 1 0 2.5-.3h-.04ZM5.16 21a1.5 1.5 0 1 1 1.06-2.56A1.51 1.51 0 0 1 5.16 21ZM11 15a2 2 0 0 1-2-2V8l7 7h-5Zm9 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z">
                      </path>
                    </svg>
                    {{ $t('good_for_kid') }}
                  </span>
                </div>
              </div>
            </div>

          </div>
          <div class="w-[90%] lg:mx-8 px-8 ">
            <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700">
          </div>
          <!-- Horaires et emplacement -->
          <div class="flex flex-row hotels-center gap-4 px-8 md:mx-8 lg:mx-8 justify-between">
            <span class="text-gray-950  font-semibold text-xl">{{ $t('location_schedule') }}</span>
            <div class="">
              <button @click="isModalOpen = true"
                class="text-black font-medium text-lg hover:underline inline-flex gap-2 ">{{ $t('suggest_edit') }}
                <svg class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
          </div>
          <div class="flex sm:flex-row flex-col">
            <div>
              <div class=" px-8 md:mx-8 lg:mx-8 my-7">
                <a href="">
                  <img src="@/assets/staticmap.png" />
                </a>
                <div class="flex flex-row gap-10">
                  <div class="flex flex-col mt-5">
                    <a href="" class="text-purple-500 hover:underline text-md font-medium">{{ hotel.location }}</a>
                    <span class="text-gray-950 text-md font-medium">{{ hotel.address }}</span>
                    <!-- <span class="text-gray-950 text-md font-medium">Allemage</span>
             <span class="text-gray-500 text-md font-normal">Kreuzberg</span> -->
                  </div>
                  <div class=" border rounded-md hover:bg-gray-200 hotels-center flex px-3 h-10 mt-5 ">
                    <a href=""
                      class=" text-md font-normal tracking-tight leading-none text-gray-800 transition-transform duration-300 hover:scale-110">
                      {{ $t('get_direction') }} </a>
                  </div>

                </div>
              </div>
            </div>

            <div>
              <div class="lg:p-3 bg-white lg:px-8 " v-if="hotel.opening_hours">
                <table class="min-w-full table-auto border-collapse ">
                  <thead>
                    <tr class="bg-gray-100 ">
                      <th class="py-3 px-3 text-left text-orange-500 font-semibold">{{ $t('day') }}</th>
                      <th class="py-3 px-3 text-left text-orange-500 font-semibold">{{ $t('openning') }}</th>
                      <th class="py-3 px-3 text-left text-orange-500 font-semibold">{{ $t('closing') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(schedule, index) in hotel.opening_hours" :key="index"
                      class="border-b hover:bg-purple-50">
                      <td class="py-2 px-3 text-gray-800">{{ $t('schedule.' + schedule.day) }}</td>
                      <td class="py-2 px-3 text-gray-500">{{ schedule.open }}</td>
                      <td class="py-2 px-3 text-gray-500">{{ schedule.close }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="p-3 bg-white" v-else>
                <p class="text-gray-600 text-center">Aucun horaire disponible pour ce service.</p>
              </div>
            </div>
          </div>
          <div class="w-[90%]  ">
            <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700">
          </div>
          <!-- Avis et commentaires composant -->
          <RewiewView :rating="hotel.rating" />
        </div>
        <!-- suggestion component -->
        <InfoService :phone="hotel.phone" :localisation="hotel.localisation" :address="hotel.address"
          :email="hotel.email" />
      </div>
      <div class="mx-auto max-w-screen-xl mt-44 md:mt-40 lg:mt-12" :class="{ 'hidden': !search }">
        <EHotelView :class="{ 'hidden': hotelStore.booking }"></EHotelView>
        <EBookingHotelView :class="{ 'hidden': !hotelStore.booking }" class="mt-20"></EBookingHotelView>

      </div>
    </div>
  </div>
  <!-- modal -->
  <ModalCategory :isOpen="isModalOpen" @close="isModalOpen = false" :title="'What’s your relationship to this business?'"
    :showActionButton="true" :actionText="$t('continuer')">
    <p class="text-md text-gray-500 font-medium">Any changes to a business page must be verified by Enjoy moderators.
    </p>
    <div class="mt-5 space-y-4">
      <div class="flex hotels-center p-3 border-b border-gray-200 me-4">
        <input id="orange-radio" type="radio" value="" name="colored-radio"
          class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="orange-radio" class="ms-2 text-md font-normal text-gray-900 dark:text-gray-300">I own this
          business</label>
      </div>
      <div class="flex hotels-center  p-3 border-b border-gray-200 me-4">
        <input id="orange-radio1" type="radio" value="" name="colored-radio"
          class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="orange-radio1" class="ms-2 text-md font-normal text-gray-900 dark:text-gray-300">I work at this
          business</label>
      </div>
      <div class="flex hotels-center  p-3 border-b border-gray-200 me-4">
        <input id="orange-radio2" type="radio" value="" name="colored-radio"
          class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="orange-radio2" class="ms-2 text-md font-normal text-gray-900 dark:text-gray-300">I’m a
          customer</label>
      </div>
    </div>
  </ModalCategory>
</template>

<script setup>
import RewiewView from "@/components/review/RewiewView.vue";
import InfoService from "@/components/review/InfoService.vue";
import { ref, onUnmounted, onMounted } from "vue";
import ModalCategory from "@/components/modals/ModalCategory.vue";
// import { Categories } from '@/mocks/categories';
import SearchHotel from "@/components/search/SearchHotel.vue";
import { useRoute } from 'vue-router';
import inside1 from '@/assets/inside1.jpg';
import inside2 from '@/assets/inside2.jpg';
import outside2 from '@/assets/outside2.jpg';
import EHotelView from "../hotel/EHotelView.vue";
import EBookingHotelView from "../hotel/EBookingHotelView.vue";
import outside1 from '@/assets/outside1.jpg';
import { useReservationHotelStore } from '@/stores/reservationHotel';
import { getServiceById } from '@/servicesApi/hotelServicesApi';



const hotelStore = useReservationHotelStore();
const isModalOpen = ref(false)


const route = useRoute();
const hotelId = route.params.id
// const filteredPlaces = ref([]);
// const filteredPlace = ref([]);
const hotel = ref({});

onMounted(async ()  => {
  // const selectedCategory = Categories.find(category => category.label === "Hôtels & Séjours");

  // if (selectedCategory) {
  //   filteredPlace.value = selectedCategory.places
  //   const place = selectedCategory.places.find(place => place.id === hotelId);
  //   filteredPlaces.value = place ? [place] : [];
  //   console.log("filteredPlaces", filteredPlaces.value);

  // }
try {
const response = await getServiceById(hotelId);
hotel.value = response.data;
console.log("hotel", hotel.value);
  // const selectedCategory = Categories.find(category => category.label === "Hôtels & Séjours");
  // if (selectedCategory) {
  //   filteredPlace.value = selectedCategory.places;
  //   const place = selectedCategory.places.find(place => place.id === hotelId);
  //   filteredPlaces.value = place ? [place] : [];
  //   console.log("filteredPlaces", filteredPlaces.value);
  // }
} catch (error) {
  console.error("Error fetching hotel data:", error);
}
});


defineProps({
  title: String,
  image: {
    type: String,
    required: true,
    default: "",
  },
});

const search = ref(false);
const images = ref([inside1, inside2, outside1, outside2]);
const images1 = ref([inside1, inside2]);
const images2 = ref([outside1, outside2]);

const currentIndex = ref(0);
const currentIndex1 = ref(0);
const currentIndex2 = ref(0);
let interval = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images2.value.length;
};
const nextSlide2 = () => {
  currentIndex2.value = (currentIndex2.value + 1) % images1.value.length;
};

const nextSlide1 = () => {
  currentIndex1.value = (currentIndex1.value + 1) % images.value.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images2.value.length) % images2.value.length;
};
const prevSlide1 = () => {
  currentIndex1.value =
    (currentIndex1.value - 1 + images.value.length) % images.value.length;
};
const prevSlide2 = () => {
  currentIndex2.value =
    (currentIndex2.value - 1 + images1.value.length) % images1.value.length;
};

// Auto-play carousel
// onMounted(() => {
//   interval = setInterval(nextSlide, 3000);
// });

onUnmounted(() => {
  clearInterval(interval);
});

const handleSearch = (hotel) => {
  search.value = !search.value;
  console.log('hotel', hotel)
}

</script>

<!-- </template>
<script setup>
// import RewiewView from "@/components/review/RewiewView.vue";
// import InfoService from "@/components/review/InfoService.vue";
import { useReservationHotelStore } from '@/stores/reservationHotel';

import { ref, onUnmounted } from "vue";
import ModalCategory from "@/components/modals/ModalCategory.vue";
import SearchHotel from "@/components/search/SearchHotel.vue";
import { useI18n } from "vue-i18n";
import inside1 from '@/assets/inside1.jpg';
import inside2 from '@/assets/inside2.jpg';
import outside2 from '@/assets/outside2.jpg';
import outside1 from '@/assets/outside1.jpg';
import EHotelView from "../hotel/EHotelView.vue";
import EBookingHotelView from "../hotel/EBookingHotelView.vue";
const hotelStore = useReservationHotelStore();


const { t } = useI18n();


const isModalOpen = ref(false)
const opening_hours = ref([
  { day: t('monday'), open: '10h00', close: '22h00' },
  { day: t('tuesday'), open: '10h00', close: '22h00' },
  { day: t('wednesday'), open: '10h00', close: '22h00' },
  { day: t('thursday'), open: '10h00', close: '22h00' },
  { day: t('friday'), open: '10h00', close: '22h00' },
  { day: t('sunday'), open: '10h00', close: '22h00' },
  { day: t('sunday'), open: '10h00', close: '22h00' }
])

defineProps({
  title: String,
  image: {
    type: String,
    required: true,
    default: "",
  },
});
// const images = ref([
//   "https://wallpaperaccess.com/full/1546182.jpg",
//   "https://wallpaperaccess.com/full/1546181.jpg",
// ]);

const images = ref([inside1, inside2, outside1, outside2]);
const images1 = ref([inside1, inside2]);
const images2 = ref([outside1, outside2]);
const search = ref(false);
const currentIndex = ref(0);
const currentIndex1 = ref(0);
const currentIndex2 = ref(0);
let interval = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images2.value.length;
};
const nextSlide2 = () => {
  currentIndex2.value = (currentIndex2.value + 1) % images1.value.length;
};

const nextSlide1 = () => {
  currentIndex1.value = (currentIndex1.value + 1) % images.value.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images2.value.length) % images2.value.length;
};
const prevSlide1 = () => {
  currentIndex1.value =
    (currentIndex1.value - 1 + images.value.length) % images.value.length;
};
const prevSlide2 = () => {
  currentIndex2.value =
    (currentIndex2.value - 1 + images1.value.length) % images1.value.length;
};

const handleSearch = (hotel) => {
  search.value = !search.value;
  console.log('hotel', hotel)
}

// Auto-play carousel
// onMounted(() => {
//   interval = setInterval(nextSlide, 3000);
// });

onUnmounted(() => {
  clearInterval(interval);
});


const rating = ref(4)

</script> -->
<template>
  <div class="min-h-screen bg-gray-50">

    <!-- <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <h1 class="text-2xl font-bold text-gray-900">{{ hotelInfo.name }}</h1>
            <div class="flex items-center space-x-1">
              <div v-for="star in 5" :key="star" class="flex">
                <svg class="w-4 h-4" :class="star <= Math.floor(hotelInfo.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <span class="text-sm text-gray-600 ml-1">
                {{ hotelInfo.rating }} ({{ hotelInfo.reviews }} avis)
              </span>
            </div>
          </div>
          <div class="flex items-center space-x-2 text-sm text-gray-600">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
            </svg>
            <span>{{ hotelInfo.location }}</span>
          </div>
        </div>
      </div>
    </header> -->
<!-- image et titre -->
    <div class="relative w-full h-[470px] sm:h-[500px] top-0 overflow-hidden">
      <div
        class="absolute inset-0 transition-opacity duration-700 ease-in-out flex"
      >
        <div
          class="absolute inset-0 flex justify-center items-center transition-opacity duration-700 ease-in-out"
        >
          <div class="relative flex w-full h-[470px] sm:h-[720px]">
            <div
              v-for="(image, index) in hotel.images"
              :key="index"
              class="flex-1 h-[470px] sm:h-[720px]"
            >
              <img
                :src="image"
                alt="Image Hôtel"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute sm:top-[52%] top-[30%]  lg:left-[22%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white p-5 sm:p-8 max-w-[90vw] sm:max-w-[600px]"
      >
        <h1 class="mb-4 text-3xl sm:text-5xl font-extrabold text-white">
          {{ hotel.name }}
        </h1>
        <div class="flex items-center mb-4 space-x-1">
          <span v-for="star in 5" :key="star">
            <svg
              v-if="star <= hotel.rating"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 fill-current text-white rounded-md bg-orange-500 p-1"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2l2.58 7.95H22l-6.29 4.74 2.58 7.95-6.29-4.74-6.29 4.74 2.58-7.95L2 9.95h7.42L12 2z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 fill-white p-1 rounded-md bg-white/25"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2l2.58 7.95H22l-6.29 4.74 2.58 7.95-6.29-4.74-6.29 4.74 2.58-7.95L2 9.95h7.42L12 2z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div
        class="absolute lg:top-[45%] top-[92%] left-[81%] transform -translate-x-1/2 -translate-y-1/2 text-white border lg:px-5 px-3 lg:py-2 py-1 rounded-md hover:bg-white/15"
      >
        <button
          class="text-md md:text-sm lg:text-xl font-extrabold tracking-tight leading-none text-white transition-transform duration-300 hover:scale-110"
        >
          {{ $t("see_photo") }}
        </button>
      </div>
    </div>
    <SearchHotel @search="handleSearch"></SearchHotel>
    <div
      class="flex lg:flex-row justify-between flex-col mx-auto md:px-4 lg:px-8 mt-20"
      :class="{ hidden: search }"
    >
      <div class="mx-auto translate-y-40 sm:translate-y-0">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-7 px-6 sm:px-8 mx-auto max-w-7xl"
        >
          <!-- Bouton 1 -->
          <div
            class="flex justify-center items-center border border-gray-300 bg-orange-500 rounded-md py-3 px-6 transition-transform duration-300 hover:scale-105 hover:bg-orange-600 cursor-pointer"
          >
            <button
              class="flex items-center space-x-2 text-white font-medium text-md"
              type="button"
            >
              <svg
                class="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                />
              </svg>
              <span>{{ $t("write_review") }}</span>
            </button>
          </div>

          <!-- Bouton 2 -->
          <div
            class="flex justify-center items-center border border-gray-300 rounded-md py-3 px-6 transition-transform duration-300 hover:scale-105 hover:bg-gray-100 cursor-pointer"
          >
            <button
              class="flex items-center space-x-2 text-gray-900 hover:text-green-600 font-medium text-md"
              type="button"
            >
              <svg
                class="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="13" r="3" />
                <path
                  d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h3m9 6v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"
                />
                <line x1="15" y1="6" x2="21" y2="6" />
              </svg>
              <span>{{ $t("add_photo") }}</span>
            </button>
          </div>

          <!-- Bouton 3 -->
          <div
            class="flex justify-center items-center border border-gray-300 rounded-md py-3 px-6 transition-transform duration-300 hover:scale-105 hover:bg-gray-100 cursor-pointer"
          >
            <button
              class="flex items-center space-x-2 text-gray-900 hover:text-red-600 font-medium text-md"
              type="button"
            >
              <svg
                class="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
              <span>{{ $t("share") }}</span>
            </button>
          </div>

          <!-- Bouton 4 -->
          <div
            class="flex justify-center items-center border border-gray-300 rounded-md py-3 px-6 transition-transform duration-300 hover:scale-105 hover:bg-gray-100 cursor-pointer"
          >
            <button
              class="flex items-center space-x-2 text-gray-900 hover:text-purple-600 font-medium text-md"
              type="button"
            >
              <svg
                class="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
              <span>{{ $t("save") }}</span>
            </button>
          </div>
        </div>

        <!-- description -->
   <div class="w-full px-4 sm:px-6 lg:px-12 py-20 mt-10">
  <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
    <!-- Description (plus large) -->
    <div class="flex-[1.8]">
      <div class="bg-white/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl text-gray-950">
        <h2 class="text-2xl font-bold mb-4">Description</h2>
        <p
          :class="{
            'max-h-[4.5rem] overflow-hidden': !showFull,
            'max-h-full': showFull,
          }"
          class="text-sm sm:text-base leading-relaxed text-gray-500 transition-all duration-300"
        >
          {{ hotel.description }}
        </p>
        <button
          @click="showFull = !showFull"
          class="mt-3 text-purple-400 font-semibold hover:underline focus:outline-none"
        >
          {{ showFull ? "Réduire" : "Lire plus" }}
        </button>
      </div>
    </div>

    <!-- Emplacement & Horaires -->
    <div class="flex-[1] space-y-8">
      <!-- Titre -->
      <div class="text-center lg:text-left">
        <span class="text-gray-900 text-xl font-semibold">
          {{ $t("location_schedule") }}
        </span>
      </div>

      <!-- Carte & Adresse -->
      <div class="bg-white rounded-xl shadow-lg p-2 space-y-6">
        <a href="#">
          <img
            src="@/assets/staticmap.png"
            alt="Map"
            class="rounded-md"
          />
        </a>
        <div class="flex flex-col sm:flex-row justify-between gap-6">
          <div class="flex-1">
            <a
              href="#"
              class="text-purple-600 hover:underline text-md font-medium"
            >
              {{ hotel.location }}
            </a>
            <p class="text-gray-800 font-medium">
              {{ hotel.address }}
            </p>
          </div>
          <div class="flex items-center">
            <button
              class="border border-gray-300 bg-white hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold transition-transform duration-300 hover:scale-105"
            >
              {{ $t("get_direction") }}
            </button>
          </div>
        </div>
      </div>

      <!-- Table Horaires -->
      <div class="bg-white rounded-xl shadow-lg p-6">
        <div v-if="hotel.opening_hours && hotel.opening_hours.length">
          <table class="w-full table-auto border-collapse">
            <thead>
              <tr class="bg-gray-50">
                <th class="text-left py-3 px-4 text-orange-500 font-semibold">
                  {{ $t("day") }}
                </th>
                <th class="text-left py-3 px-4 text-orange-500 font-semibold">
                  {{ $t("openning") }}
                </th>
                <th class="text-left py-3 px-4 text-orange-500 font-semibold">
                  {{ $t("closing") }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(schedule, index) in hotel.opening_hours"
                :key="index"
                class="border-t hover:bg-purple-50"
              >
                <td class="py-3 px-4 text-gray-800">
                  {{ $t("schedule." + schedule.day) }}
                </td>
                <td class="py-3 px-4 text-gray-600">
                  {{ schedule.open }}
                </td>
                <td class="py-3 px-4 text-gray-600">
                  {{ schedule.close }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else class="text-center py-4 text-gray-500">
          {{ $t("no_schedule_available") }}
        </div>
      </div>
    </div>
  </div>
</div>


      </div>
    </div>

  <div class="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto pt-10">
  <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
</div>


    <!-- Room Selection -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="text-center mb-12">
        <h3 class="text-3xl font-bold text-gray-900 mb-4">Nos Options</h3>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrez notre sélection soigneusement conçues pour votre confort
        </p>
      </div>

      <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div
          v-for="room in rooms"
          :key="room.id"
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          :class="{ 'opacity-60': !room.available }"
        >

          <div class="relative h-48 overflow-hidden">
            <img
              :src="room.images[0]"
              :alt="room.name"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div class="absolute top-4 right-4">
              <span
                v-if="!room.available"
                class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                Complet
              </span>
              <span
                v-else-if="room.originalPrice > room.price"
                class="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                -{{ Math.round((1 - room.price / room.originalPrice) * 100) }}%
              </span>
            </div>
          </div>


          <div class="p-6">
            <div class="mb-4">
              <h4 class="text-xl font-semibold text-gray-900 mb-2">{{ room.name }}</h4>
              <p class="text-gray-600 text-sm mb-3">{{ room.description }}</p>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clip-rule="evenodd"/>
                </svg>
                <span>{{ room.size }} m²</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                </svg>
                <span>{{ room.maxGuests }} pers.</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z"/>
                </svg>
                <span>{{ room.beds }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6.414A2 2 0 0016.414 5L13 1.586A2 2 0 0011.586 1H8zm2 2H8v12h8V6.414L14.414 4H10z" clip-rule="evenodd"/>
                </svg>
                <span>{{ room.bathroom }}</span>
              </div>
            </div>


            <div class="mb-4">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="amenity in room.amenities.slice(0, 3)"
                  :key="amenity"
                  class="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs"
                >
                  {{ amenity }}
                </span>
                <span
                  v-if="room.amenities.length > 3"
                  class="text-blue-600 text-xs cursor-pointer hover:underline"
                  @click="openRoomModal(room)"
                >
                  +{{ room.amenities.length - 3 }} autres
                </span>
              </div>
            </div>


            <div class="border-t pt-4">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center space-x-2">
                  <span v-if="room.originalPrice > room.price" class="text-sm text-gray-500 line-through">
                    {{ room.originalPrice }}€
                  </span>
                  <span class="text-2xl font-bold text-gray-900">{{ room.price }}€</span>
                  <span class="text-sm text-gray-600">/nuit</span>
                </div>
              </div>

              <div class="flex space-x-2">
                <button
                  @click="openRoomModal(room)"
                  class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Voir détails
                </button>
                <button
                  v-if="room.available"
                  class="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  Réserver
                </button>
                <button
                  v-else
                  disabled
                  class="flex-1 bg-gray-400 text-white py-2 px-4 rounded-lg cursor-not-allowed text-sm font-medium"
                >
                  Indisponible
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <div class="pb-10">
        <RoomList :rooms="rooms" @selected-room="selectedRooms" />
      </div>
    </section>


        <!-- Avis et commentaires composant-->
         <div class="mx-auto text-center ">
             <h3 class="text-3xl font-bold text-gray-900 mb-4">Avis et commentaires</h3>
             </div>
             <div class="translate-x-60">
          <RewiewView :rating="hotel.rating" />
          </div>


    <!-- Room Modal -->
    <div
      v-if="selectedRoom"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      @click="closeModal"
    >
      <div
        class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="relative">
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-6 border-b">
            <h3 class="text-2xl font-bold text-gray-900">
              {{ selectedRoom.name }}
            </h3>
            <button
              @click="closeModal"
              class="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <!-- Image Gallery -->
          <div class="relative h-96">
            <img
              :src="selectedRoom.images[currentImageIndex]"
              :alt="selectedRoom.name"
              class="w-full h-full object-cover"
            />
            <button
              @click="prevImage"
              class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button
              @click="nextImage"
              class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
            >
              <div
                v-for="(_, index) in selectedRoom.images"
                :key="index"
                class="w-2 h-2 rounded-full"
                :class="
                  index === currentImageIndex
                    ? 'bg-white'
                    : 'bg-white bg-opacity-50'
                "
              ></div>
            </div>
          </div>

          <!-- Room Details -->
          <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 class="text-lg font-semibold mb-4">Description</h4>
                <p class="text-gray-600 mb-6">{{ selectedRoom.description }}</p>

                <h4 class="text-lg font-semibold mb-4">Équipements</h4>
                <div class="grid grid-cols-2 gap-2">
                  <div
                    v-for="amenity in selectedRoom.amenities"
                    :key="amenity"
                    class="flex items-center space-x-2 text-sm text-gray-600"
                  >
                    <svg
                      class="w-4 h-4 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>{{ amenity }}</span>
                  </div>
                </div>
              </div>

              <div>
                <div class="bg-gray-50 p-6 rounded-lg">
                  <div class="grid grid-cols-2 gap-4 mb-6">
                    <div class="text-center">
                      <svg
                        class="w-6 h-6 mx-auto text-gray-400 mb-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <div class="text-sm text-gray-600">Superficie</div>
                      <div class="font-semibold">
                        {{ selectedRoom.size }} m²
                      </div>
                    </div>
                    <div class="text-center">
                      <svg
                        class="w-6 h-6 mx-auto text-gray-400 mb-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <div class="text-sm text-gray-600">Capacité</div>
                      <div class="font-semibold">
                        {{ selectedRoom.maxGuests }} personnes
                      </div>
                    </div>
                  </div>

                  <div class="border-t pt-4">
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-2">
                        <span
                          v-if="selectedRoom.originalPrice > selectedRoom.price"
                          class="text-lg text-gray-500 line-through"
                        >
                          {{ selectedRoom.originalPrice }}€
                        </span>
                        <span class="text-3xl font-bold text-gray-900"
                          >{{ selectedRoom.price }}€</span
                        >
                        <span class="text-gray-600">/nuit</span>
                      </div>
                    </div>

                    <button
                      v-if="selectedRoom.available"
                      class="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium"
                    >
                      Réserver maintenant
                    </button>
                    <button
                      v-else
                      disabled
                      class="w-full bg-gray-400 text-white py-3 px-6 rounded-lg cursor-not-allowed font-medium"
                    >
                      Chambre indisponible
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import RoomList from "./RoomList.vue";
import SearchHotel from "@/components/search/SearchHotel.vue";

const selectedRoom = ref(null);
const currentImageIndex = ref(0);
const showFull = ref(false);

const hotelInfo = reactive({
  name: "Grand Hôtel Étoile",
  rating: 4.5,
  reviews: 1247,
  location: "Centre-ville, Paris",
  description:
    "Un hôtel de luxe au cœur de Paris, offrant un service exceptionnel et des chambres élégantes avec vue sur la ville.",
  amenities: [
    { name: "WiFi gratuit" },
    { name: "Parking" },
    { name: "Restaurant" },
    { name: "Salle de sport" },
  ],
  contact: {
    phone: "+33 1 42 60 34 12",
    email: "contact@grandhotel-etoile.fr",
    address: "123 Avenue des Champs-Élysées, 75008 Paris",
  },
});

const rooms = reactive([
  {
    id: 1,
    name: "Chambre Standard",
    description: "Chambre confortable avec toutes les commodités essentielles",
    price: 120,
    originalPrice: 150,
    size: 25,
    capacity: 2,
    beds: "1 lit double",
    bathroom: "Salle de bain privée",
    amenities: ["WiFi gratuit", "Climatisation", "TV écran plat", "Minibar"],
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    ],
    available: true,
  },
  {
    id: 2,
    name: "Chambre Supérieure",
    description: "Chambre spacieuse avec vue sur la ville et balcon privé",
    price: 180,
    originalPrice: 220,
    size: 35,
    capacity: 3,
    beds: "1 lit king-size",
    bathroom: "Salle de bain avec baignoire",
    amenities: [
      "WiFi gratuit",
      "Climatisation",
      "TV écran plat",
      "Minibar",
      "Balcon",
      "Coffre-fort",
    ],
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
    ],
    available: true,
  },
  {
    id: 3,
    name: "Suite Junior",
    description: "Suite élégante avec salon séparé et vue panoramique",
    price: 280,
    originalPrice: 350,
    size: 50,
    capacity: 4,
    beds: "1 lit king-size + canapé-lit",
    bathroom: "Salle de bain avec douche à l'italienne",
    amenities: [
      "WiFi gratuit",
      "Climatisation",
      "TV écran plat",
      "Minibar",
      "Salon séparé",
      "Service d'étage 24h/24",
    ],
    images: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    ],
    available: true,
  },
  {
    id: 4,
    name: "Suite Présidentielle",
    description: "Suite de luxe avec terrasse privée et services premium",
    price: 450,
    originalPrice: 550,
    size: 80,
    capacity: 6,
    beds: "1 lit king-size + 2 lits simples",
    bathroom: "2 salles de bain avec jacuzzi",
    amenities: [
      "WiFi gratuit",
      "Climatisation",
      "TV écran plat",
      "Minibar",
      "Terrasse privée",
      "Butler personnel",
      "Spa privé",
    ],
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop",
    ],
    available: false,
  },
]);

const openRoomModal = (room) => {
  selectedRoom.value = room;
  currentImageIndex.value = 0;
};

const selectedRooms = (room) => {
  openRoomModal(room);
};

const closeModal = () => {
  selectedRoom.value = null;
  currentImageIndex.value = 0;
};

const nextImage = () => {
  if (selectedRoom.value) {
    currentImageIndex.value =
      currentImageIndex.value === selectedRoom.value.images.length - 1
        ? 0
        : currentImageIndex.value + 1;
  }
};

const prevImage = () => {
  if (selectedRoom.value) {
    currentImageIndex.value =
      currentImageIndex.value === 0
        ? selectedRoom.value.images.length - 1
        : currentImageIndex.value - 1;
  }
};

import RewiewView from "@/components/review/RewiewView.vue";
import InfoService from "@/components/review/InfoService.vue";
import { onUnmounted, onMounted } from "vue";
import ModalCategory from "@/components/modals/ModalCategory.vue";
import { useRoute } from "vue-router";
import inside1 from "@/assets/inside1.jpg";
import inside2 from "@/assets/inside2.jpg";
import outside2 from "@/assets/outside2.jpg";
import EHotelView from "../hotel/EHotelView.vue";
import EBookingHotelView from "../hotel/EBookingHotelView.vue";
import outside1 from "@/assets/outside1.jpg";
import { useReservationHotelStore } from "@/stores/reservationHotel";
import { getServiceById } from "@/servicesApi/hotelServicesApi";

const hotelStore = useReservationHotelStore();
const isModalOpen = ref(false);

const route = useRoute();
const hotelId = route.params.id;
// const filteredPlaces = ref([]);
// const filteredPlace = ref([]);
const hotel = ref({});

onMounted(async () => {
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
  console.log("hotel", hotel);
};
</script>

<template>
  <!-- <div v-if="isLoading">

    <div v-if="isLoading" class="space-y-6">
      <div v-for="i in 4" :key="`skeleton-${i}`" class="flex items-start p-6 bg-white rounded-xl shadow-sm">
        <Skeletor circle size="96px" />

        <div class="ml-6 flex-1 space-y-3">
          <Skeletor width="40%" height="20px" />
          <Skeletor width="60%" height="16px" />
          <Skeletor width="80%" height="14px" />

          <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
            <Skeletor v-for="j in 5" :key="`icon-${j}`" width="100%" height="40px" />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div v-for="k in 4" :key="`input-${k}`" class="space-y-2">
              <Skeletor width="30%" height="16px" />
              <Skeletor width="100%" height="36px" />
            </div>
          </div>

          <div class="mt-6">
            <Skeletor width="50%" height="20px" />
            <div v-for="l in 2" :key="`addon-${l}`" class="flex items-center justify-between mt-4">
              <div class="flex items-center space-x-3">
                <Skeletor circle size="16px" />
                <div class="space-y-1">
                  <Skeletor width="100px" height="14px" />
                  <Skeletor width="80px" height="12px" />
                </div>
              </div>
              <Skeletor width="50px" height="16px" />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div> -->
  <div class="bg-white rounded-xl shadow-sm overflow-hidden">
    <div class="p-6">
      <div class="flex items-start">
        <!-- Image at the beginning -->
        <img
          :src='hotelStore.this_hotel?.images?.[0] || "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1470"'
          alt="Room" class="w-48 h-40 object-cover rounded-lg mr-6" />

        <!-- Content beside the image -->
        <div class="flex-1">

          <div class="flex items-start justify-between space-x-3">
            <span class=" px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-md mb-2">
              {{ $t('appServices.hotel.bestChoice') }}</span>
            <div class="flex space-x-3 mt-1 ">
              <WifiIcon v-if="amenitiesStatus.wifi" size="18" class="text-gray-600" />
              <CoffeeIcon v-if="amenitiesStatus.breakfast" size="18" class="text-gray-600" />
              <WavesLadderIcon v-if="amenitiesStatus.pool" size="18" class="text-gray-600" />
              <DumbbellIcon v-if="amenitiesStatus.gym" size="18" class="text-gray-600" />
            </div>

          </div>
          <h2 class="text-xl font-semibold text-gray-900 mb-2 mt-2" role="title">
            {{ hotelStore.this_hotel?.name || $t("notAvaible") }} <span class="text-gray-700">•</span> {{
              RoomsWithLowPrice.productName || $t("notAvaible") }}
          </h2>
          <!-- <div class="flex items-center space-x-2 mb-4 mt-2">
            <div class="flex">
              <StarIcon v-for="star in stars" :key="star" size="16" class="text-yellow-400 fill-yellow-400" />
            </div>
            <span class="font-medium text-gray-900">4.87</span>
            <span class="text-gray-500">(262 {{ $t('appServices.hotel.review') }}s )</span>
          </div> -->

          <!-- Icons section (beds, guests, etc.) - moved inside the flex container -->
          <div class="grid grid-cols-2 md:grid-cols-5 gap-2 mt-8">
            <div class="flex items-center space-x-2">
              <BedDoubleIcon size="20" class="text-slate-600" />
              <div>
                <div class="text-sm font-medium text-gray-900">
                  {{
                    RoomsWithLowPrice.options &&
                    RoomsWithLowPrice.options.find(opt => opt.optionName === 'Number of beds')?.value
                    || $t("notAvaible")
                  }}
                </div>
                <div class="text-xs text-gray-500">{{ $t('appServices.hotel.beds') }} </div>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"
                stroke="#475569" stroke-width="2">
                <!-- Carré avec coins arrondis -->
                <rect x="1" y="1" width="18" height="18" rx="3" ry="3" stroke="#475569" />

                <!-- Ligne diagonale -->
                <line x1="4" y1="16" x2="16" y2="4" stroke="#475569" />

                <!-- Pointe de flèche en haut -->
                <polyline points="16,4 14,4 15,6" fill="none" stroke="#475569" />

                <!-- Pointe de flèche en bas -->
                <polyline points="4,16 6,16 5,14" fill="none" stroke="#475569" />
              </svg>
              <div>
                <!-- <div class="text-sm font-medium text-gray-900">{{ sizeValue }} m² </div> -->
                <div class="text-sm font-medium text-gray-900">
                  {{
                    RoomsWithLowPrice.options &&
                    RoomsWithLowPrice.options.find(opt => opt.optionName === 'Number of beds')?.value
                    || $t("notAvaible")
                  }} m²
                </div>

                <div class="text-xs text-gray-500">{{ $t('appServices.hotel.area') }} </div>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <Users2Icon size="20" class="text-slate-600" />
              <div>
                <div class="text-sm font-medium text-gray-900">
                  {{
                    RoomsWithLowPrice.options &&
                    RoomsWithLowPrice.options.find(opt => opt.optionName === 'Maximum Occupancy')?.value
                    || $t("notAvaible")
                  }}
                </div>
                <div class="text-xs text-gray-500">{{ $t('appServices.hotel.guests') }} </div>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <Bath size="20" class="text-slate-600" />
              <div>
                <div class="text-sm font-medium text-gray-900">
                  {{
                    RoomsWithLowPrice.options &&
                    RoomsWithLowPrice.options.find(opt => opt.optionName === 'Number of bathrooms')?.value
                    || $t("notAvaible")
                  }}
                </div>
                <div class="text-xs text-gray-500">{{ $t('appServices.hotel.bathroom') }} </div>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <BadgeCheck size="20" class="text-slate-600" />
              <div>
                <div v-if="RoomsWithLowPrice.availability === true" class="text-sm font-medium text-gray-900">{{
                  $t('appServices.hotel.yes') }}</div>
                <div v-else class="text-sm font-medium text-gray-900">{{ $t('appServices.hotel.no') }}</div>
                <div class="text-xs text-gray-500">{{ $t('appServices.hotel.availability') }} </div>
              </div>
            </div>
            <!-- <div class="flex items-center space-x-2">
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"
                stroke="#475569" stroke-width="2">
                <path d="M1 16 H6 M6 12 H10 M10 8 H14 M14 4 H18" />
              </svg>
              <div>
                <div class="text-sm font-medium text-gray-900">4</div>
                <div class="text-xs text-gray-500">{{ $t('appServices.hotel.floor') }} </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>




    <div class="max-w-6xl mx-auto p-6 space-y-8">
      <!-- Header -->
      <!-- <div class="text-center space-y-2">
      <h1 class="text-3xl font-bold text-gray-900">Accommodation Details</h1>
      <p class="text-gray-600">Complete overview of room features and amenities</p>
    </div> -->

      <!-- Categories -->
      <!-- <div class="grid gap-6">
      <div 
        v-for="(category, categoryIndex) in categories" 
        :key="categoryIndex" 
        class="bg-white rounded-lg border border-gray-200 shadow-sm"
      > -->
      <!-- Card Header -->
      <!-- <div class="px-6 py-4 border-b border-gray-200">
          <h2 class="text-lg font-semibold text-gray-800">{{ category.title }}</h2>
        </div>
         -->
      <!-- Card Content -->
      <!-- <div class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="option in category.options"
              :key="option.optionId"
              class="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div class="flex items-center space-x-3">
                <div class="flex-shrink-0">
                  <span class="text-lg">{{ getIcon(option.optionName) }}</span>
                </div>
                <div class="min-w-0 flex-1">
                  <p class="text-sm font-medium text-gray-900 truncate">{{ option.optionName }}</p>
                </div>
              </div>
              <span 
                class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors"
                :class="getValueColor(option.value)"
              >
                {{ option.value }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div> -->

      <!-- Summary Stats -->
      <!-- <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
      <div class="p-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div class="text-2xl font-bold text-blue-600">15</div>
            <div class="text-sm text-gray-600">Room Size (sqm)</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-blue-600">1</div>
            <div class="text-sm text-gray-600">Guest Capacity</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-blue-600">3</div>
            <div class="text-sm text-gray-600">Bathrooms</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-green-600">{{ includedFeaturesCount }}</div>
            <div class="text-sm text-gray-600">Included Features</div>
          </div>
        </div>
      </div>
    </div>-->
    </div>




    <!-- <div class="px-6 py-2">
      <h2 class="font-semibold text-lg -900 mb-4">{{ $t('appServices.hotel.getStarted') }} :</h2>
      <div class="space-y-3 text-gray-600 text-sm">
        <p>{{ $t('appServices.hotel.freeCancellation') }}</p>
        <p>
          {{ $t('appServices.hotel.chargeDate') }} {{ $t('appServices.hotel.ifYouCancel') }}
          {{ $t('appServices.hotel.apartmentDescription') }}
        </p>

        <template v-if="expanded">
          <p>
            {{ $t('appServices.hotel.bookNowAgreement') }}
          </p>
        </template>

<button class="text-customBlue font-medium flex items-center" @click="toggleExpanded">
  {{ $t('read') }} {{ expanded ? $t('less') : $t('Plus') }}
  <ChevronDownIcon size="16" class="ml-1 mt-1.5 transform transition-transform" :class="{ 'rotate-180': expanded }" />
</button>
</div>
</div> -->
    <!-- User Details Form start-->
    <div class="bg-white rounded-xl px-6 py-2 shadow-sm">
      <h2 class="font-semibold text-lg text-gray-900 mb-4">{{ $t('appServices.hotel.enterYourDetails') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- First Name -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            {{ $t('appServices.hotel.firstName') }}
            <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <input type="text" v-model="firstName" @input="firstNameTouched = true" :class="[
              'w-full px-3 py-2 border rounded-lg focus:ring-2',
              !firstNameTouched
                ? 'border-gray-300 focus:ring-indigo-500'
                : validateFirstName(firstName)
                  ? 'border-green-500 focus:ring-indigo-500'
                  : 'border-red-500 focus:ring-red-200'
            ]" />
            <div class="absolute right-3 top-1/2 -translate-y-1/2">
              <div v-if="firstNameTouched && validateFirstName(firstName)"
                class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <CheckIcon size="12" class="text-white" />
              </div>
              <div v-else-if="firstNameTouched && !validateFirstName(firstName)"
                class="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <XIcon size="12" class="text-white" />
              </div>
            </div>
          </div>
          <p v-if="firstNameTouched && !validateFirstName(firstName)" class="mt-1 text-sm text-red-600">
            {{ $t('appServices.hotel.firstNameError') }}
          </p>
        </div>

        <!-- Last Name -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            {{ $t('appServices.hotel.lastName') }}
            <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <input type="text" v-model="lastName" @input="lastNameTouched = true" :class="[
              'w-full px-3 py-2 border rounded-lg focus:ring-2',
              !lastNameTouched
                ? 'border-gray-300 focus:ring-indigo-500'
                : validateLastName(lastName)
                  ? 'border-green-500 focus:ring-indigo-500'
                  : 'border-red-500 focus:ring-red-200'
            ]" />
            <div class="absolute right-3 top-1/2 -translate-y-1/2">
              <div v-if="lastNameTouched && validateLastName(lastName)"
                class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <CheckIcon size="12" class="text-white" />
              </div>
              <div v-else-if="lastNameTouched && !validateLastName(lastName)"
                class="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <XIcon size="12" class="text-white" />
              </div>
            </div>
          </div>
          <p v-if="lastNameTouched && !validateLastName(lastName)" class="mt-1 text-sm text-red-600">
            {{ $t('appServices.hotel.lastNameError') }}
          </p>
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            {{ $t('appServices.hotel.email') }}
            <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <input type="email" v-model="emailAddress" @input="emailTouched = true" :class="[
              'w-full px-3 py-2 border rounded-lg focus:ring-2',
              !emailTouched
                ? 'border-gray-300 focus:ring-indigo-500'
                : validateEmail(emailAddress)
                  ? 'border-green-500 focus:ring-indigo-500'
                  : 'border-red-500 focus:ring-red-200'
            ]" />
            <div class="absolute right-3 top-1/2 -translate-y-1/2">
              <div v-if="emailTouched && validateEmail(emailAddress)"
                class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <CheckIcon size="12" class="text-white" />
              </div>
              <div v-else-if="emailTouched && !validateEmail(emailAddress)"
                class="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <XIcon size="12" class="text-white" />
              </div>
            </div>
          </div>
          <p v-if="emailTouched && !validateEmail(emailAddress)" class="mt-1 text-sm text-red-600">
            {{ $t('appServices.hotel.emailError') }}
          </p>
        </div>

        <!-- Phone -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            {{ $t('appServices.hotel.phone') }}
            <span class="text-red-500">*</span>
          </label>
          <div class="relative flex">
            <select v-model="countryCode"
              class="px-3 py-2 border border-gray-300 rounded-lg rounded-r-none border-r-0 bg-gray-50 text-gray-500">
              <option value="+237">+237</option>
              <option value="+33">+33</option>
              <option value="+1">+1</option>
            </select>
            <input type="tel" v-model="phoneNumber" @input="phoneTouched = true" :class="[
              'flex-1 px-3 py-2 border rounded-lg rounded-l-none focus:ring-2',
              !phoneTouched
                ? 'border-gray-300 focus:ring-indigo-500'
                : validatePhoneNumber(phoneNumber)
                  ? 'border-green-500 focus:ring-indigo-500'
                  : 'border-red-500 focus:ring-red-200'
            ]" />
            <div class="absolute right-3 top-1/2 -translate-y-1/2">
              <div v-if="phoneTouched && validatePhoneNumber(phoneNumber)"
                class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <CheckIcon size="12" class="text-white" />
              </div>
              <div v-else-if="phoneTouched && !validatePhoneNumber(phoneNumber)"
                class="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <XIcon size="12" class="text-white" />
              </div>
            </div>
          </div>
          <p v-if="phoneTouched && !validatePhoneNumber(phoneNumber)" class="mt-1 text-sm text-red-600">
            {{ $t('appServices.hotel.phoneError') }}
          </p>
        </div>
      </div>
      <!-- picklist start-->
      <!-- <div class=" mt-4">
        <div>
          <label for="packageSelect" class="block mb-2">{{ $t('appServices.hotel.choiceOnePackage') }}</label>
          <select id="packageSelect" v-model="selectedPackage" class="border border-gray-300 p-2 rounded-lg w-full">
            <option v-for="pkg in Package" :key="pkg.value" :value="pkg.value">
              {{ pkg.label }}
            </option>
          </select>
        </div>
      </div> -->
      <!-- picklist end-->
    </div>
    <!-- User Details Form end-->





    <!-- Additional ways to booking start -->
    <!-- isPresentInDB doit provenir de la bd -->
    <div class="bg-white rounded-xl p-6 shadow-sm">
      <h2 v-if="isPresentInDB" class="font-semibold text-lg text-gray-900 mb-4">{{ $t('appServices.hotel.addToYourStay')
      }}
      </h2>
      <!-- Car Park Section -->
      <div v-if="isPresentInDB" class="border-b" :class="selectedOptions.carPark ? 'pb-6 mb-6' : ''">
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center space-x-3">
            <input type="checkbox" class="w-4 h-4 rounded border-customRed" :checked="selectedOptions.carPark"
              @click="toggleOption('carPark')" />
            <div>
              <div class="font-medium flex items-start justify-start">
                <span> {{ $t('appServices.hotel.carPark') }}
                </span>
                <!-- <ChevronDownIcon size="16" class="ml-1 mt-1.5 transform transition-transform"
                  :class="{ 'rotate-180': selectedOptions.carPark }" /> -->
              </div>
              <div class="text-sm text-gray-500">{{ $t('appServices.hotel.familyChoice') }}
              </div>
            </div>
          </div>
          <div class="text-right">
            <div class="font-medium">
              FCFA 20000 <span class="text-sm text-gray-500">/{{ $t('appServices.hotel.night') }}
              </span>
            </div>
          </div>
        </div>

        <!-- Vehicle Type Selection - Only shown when carPark is selected -->
        <div class="space-y-4" v-if="selectedOptions.carPark">
          <div>
            <div class="text-sm font-medium text-gray-700 mb-2">{{ $t('appServices.hotel.vehicleType') }}
            </div>
            <div class="grid grid-cols-3 gap-3">
              <!-- Motorcycle -->
              <button :class="[
                'p-4 border rounded-lg flex flex-col items-center justify-center text-sm',
                selectedVehicle === 'motorcycle'
                  ? 'border-customBlue bg-indigo-50'
                  : 'border-gray-200',
              ]" @click="setSelectedVehicle('motorcycle')">
                <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"
                  stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <!-- Guidon -->
                  <path d="M4 5h3l3 5h4l3-5h3" />
                  <!-- Phare -->
                  <circle cx="12" cy="10" r="2" />
                  <!-- Cadre -->
                  <path d="M12 12v4" />
                  <!-- Roues -->
                  <circle cx="7" cy="19" r="3" />
                  <circle cx="17" cy="19" r="3" />
                  <!-- Fourche et suspension -->
                  <path d="M7 19h10" />
                  <path d="M12 14l-5 5" />
                  <path d="M12 14l5 5" />
                </svg>
                <div>{{ $t('appServices.hotel.motorcycle') }}
                </div>
                <div class="text-gray-500">FCFA 20000/{{ $t('appServices.hotel.night') }}
                </div>
              </button>

              <!-- Car -->
              <button :class="[
                'p-4 border rounded-lg flex flex-col items-center justify-center text-sm',
                selectedVehicle === 'car'
                  ? 'border-customBlue bg-indigo-50'
                  : 'border-gray-200',
              ]" @click="setSelectedVehicle('car')">
                <CarFrontIcon class="mb-1" size="30" />
                <div>Car</div>
                <div class="text-gray-500">FCFA 30000/{{ $t('appServices.hotel.night') }}
                </div>
              </button>

              <!-- Bus -->
              <button :class="[
                'p-4 border rounded-lg flex flex-col items-center justify-center text-sm',
                selectedVehicle === 'bus'
                  ? 'border-customBlue bg-indigo-50'
                  : 'border-gray-200',
              ]" @click="setSelectedVehicle('bus')">
                <BusFrontIcon class="mb-1" size="30" />
                <div>{{ $t('appServices.hotel.bus') }}
                </div>
                <div class="text-gray-500">FCFA 50000/{{ $t('appServices.hotel.night') }}
                </div>
              </button>
            </div>
          </div>

          <!-- Parking Type Selection -->
          <div>
            <div class="text-sm font-medium text-gray-700 mb-2">{{ $t('appServices.hotel.placeType') }}
            </div>
            <div class="grid grid-cols-2 gap-3">
              <!-- Default Parking -->
              <button :class="[
                'p-4 border rounded-lg flex flex-col items-center justify-center text-sm',
                selectedParkingType === 'default'
                  ? 'border-customBlue bg-indigo-50'
                  : 'border-gray-200',
              ]" @click="setSelectedParkingType('default')">
                <CarFrontIcon class="mb-1" size="30" />
                <div>{{ $t('appServices.hotel.default') }}
                </div>
              </button>

              <!-- Disabled Parking -->
              <button :class="[
                'p-4 border rounded-lg flex flex-col items-center justify-center text-sm',
                selectedParkingType === 'disabled'
                  ? 'border-customBlue bg-indigo-50'
                  : 'border-gray-200',
              ]" @click="setSelectedParkingType('disabled')">
                <Accessibility class="mb-1" size="30" />
                <div>{{ $t('appServices.hotel.disabledParking') }}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottle of Wine Section -->
      <div v-if="isPresentInDB" class="border-b" :class="selectedOptions.wine ? 'pb-6 mb-6' : ''">
        <div class="flex items-start justify-between">
          <div class="flex items-center space-x-3 mt-2">
            <input type="checkbox" class="w-4 h-4 rounded text-customRed" :checked="selectedOptions.wine"
              @click="toggleOption('wine')" />
            <div>
              <div class="font-medium flex items-start justify-start">
                <span>{{ $t('appServices.hotel.bottle') }}
                </span>
                <!-- <ChevronDownIcon size="16" class="ml-1 mt-1.5 transform transition-transform"
                  :class="{ 'rotate-180': selectedOptions.wine }" /> -->
              </div>
              <div class="text-sm text-gray-500">
                Ventisquero Reserva Chardonnay/Valle de Casablanca Aconcagua
              </div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-right mt-2">
              <div class="font-medium">
                FCFA 50000 <span class="text-sm text-gray-500">/{{ $t('appServices.hotel.piece') }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional wine info - Only shown when wine is selected -->
        <div v-if="selectedOptions.wine" class="mt-4">
          <p class="text-sm text-gray-600">
            This premium Chardonnay comes from the Casablanca Valley and pairs perfectly with seafood and poultry.
          </p>
        </div>
      </div>

      <!-- Stay of a Pet Section -->
      <div v-if="isPresentInDB" :class="selectedOptions.pet ? 'pb-6' : ''">
        <div class="flex items-start justify-between">
          <div class="flex items-center space-x-3 mt-2">
            <input type="checkbox" class="w-4 h-4 rounded text-customRed" :checked="selectedOptions.pet"
              @click="toggleOption('pet')" />
            <div>
              <div class="font-medium flex items-start justify-start">
                <span>Stay of a pet</span>
                <!-- <ChevronDownIcon size="16" class="ml-1 mt-1.5 transform transition-transform"
                  :class="{ 'rotate-180': selectedOptions.pet }" /> -->
              </div>
              <div class="text-sm text-gray-500">
                Traveling with pets can seem like a daunting task
              </div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-right mt-2">
              <div class="font-medium">
                FCFA 50000 <span class="text-sm text-gray-500">/{{ $t('appServices.hotel.night') }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional pet info - Only shown when pet is selected -->
        <div v-if="selectedOptions === 'pet'" class="mt-4">
          <p class="text-sm text-gray-600">
            Please inform us about the type and size of your pet. Additional cleaning fees may apply.
          </p>
        </div>
      </div>
      <!-- Navigation Buttons -->
      <div class="mx-auto max-w-5xl mt-12 justify">
        <!-- Version mobile -->
        <div class="flex justify-between flex-1 sm:hidden">
          <button @click="handleBack"
            class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd" />
            </svg>
            {{ $t('appServices.hotel.previous') }}

          </button>
          <button @click="handleNext"
            class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            {{ $t('appServices.hotel.requestToBook') }}
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 ml-2" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <!-- Version desktop -->
        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div class="relative z-0 flex justify-between w-full -space-x-px rounded-md" aria-label="Navigation">
            <button @click="handleBack"
              class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 sm:rounded-l-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="isFirstPage">
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 mr-2"
                aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd" />
              </svg>
              {{ $t('appServices.hotel.previous') }}

            </button>
            <button @click="handleNext"
              class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 sm:rounded-r-md hover:bg-gray-50">
              {{ $t('appServices.hotel.requestToBook') }}
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 ml-2"
                aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <LoadingSpinner v-if="hotelStore.isSpinnerDisplayed" />

</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router';

import {
  DumbbellIcon,
  XIcon,
  WifiIcon,
  WavesLadderIcon,
  CoffeeIcon,
  BedDoubleIcon,
  Users2Icon,
  Bath,
  Accessibility,
  CheckIcon,
  BusFrontIcon,
  CarFrontIcon,
  ChevronDownIcon,
  StarIcon,
  BadgeCheck
} from 'lucide-vue-next';
import { useMIHStore } from '@/stores/manageHotelInterface';
import { getAllServicesByServiceId, getOptionsByServiceId } from '@/servicesApi/hotelServicesApi.js';
import "vue-skeletor/dist/vue-skeletor.css"
// import { Skeletor } from "vue-skeletor"
import LoadingSpinner from '@/components/spiner/LoaodingSpinner.vue';
import { validateFirstName, validateLastName, validateEmail, validatePhoneNumber } from '@/utils/functions';
// import { useI18n } from 'vue-i18n';
const router = useRouter()
const { t } = useI18n()
const defaultValues = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  emailAddress: '',
  countryCode: '+237'
}
// const { t } = useI18n();
// const valid = ref({
//   firstName: true,
//   lastName: null,
//   email: null,
//   phone: null
// });
// Props
const props = defineProps({
  roomId: {
    type: Number
  },
  roomData: {
    type: Object,
    required: false,
    default: () => ({})
  }
})

// Initialisation avec fallback vers les valeurs par défaut
const firstName = ref('')
const lastName = ref('')
const phoneNumber = ref('')
const emailAddress = ref('')
const countryCode = ref('')
const isLoading = ref(false)
const isPresentInDB = ref(false)
const firstNameTouched = ref(false)
const lastNameTouched = ref(false)
const emailTouched = ref(false)
const phoneTouched = ref(false)
// const selectedPackage = ref('Individual');

// const Package = computed(() => [
//   { value: 'Individual', label: t('appServices.hotel.Individual') },
//   { value: 'Group', label: t('appServices.hotel.Group') },
//   { value: 'Corporate', label: t('appServices.hotel.Corporate') },
//   { value: 'Wedding', label: t('appServices.hotel.Wedding') },
//   { value: 'Honeymoon', label: t('appServices.hotel.Honeymoon') },
//   { value: 'Standard', label: t('appServices.hotel.Standard') },
// ]);

// Fonction pour initialiser les champs depuis les props ou les defaults
const initializeForm = () => {
  const guestInfo = props.roomData?.guestInfo || {}

  firstName.value = guestInfo.firstName ?? defaultValues.firstName
  lastName.value = guestInfo.lastName ?? defaultValues.lastName
  phoneNumber.value = guestInfo.phone?.number ?? defaultValues.phoneNumber
  emailAddress.value = guestInfo.email ?? defaultValues.emailAddress
  countryCode.value = guestInfo.phone?.countryCode ?? defaultValues.countryCode
}

// Appel initial
initializeForm()

const hotelStore = useMIHStore();
const emit = defineEmits(['next', 'back']);
const Rooms = ref([]);
const options = ref([]);
const sizeValue = ref(0);
// const priceOption = ref([
//   { id: 1, name: 'Car Park', price: 0 },
//   { id: 2, name: 'Wine', price: 0 },
//   { id: 3, name: 'Pet', price: 0 }
// ]);

// const setOptionsPrice = () =>{
//   if(selectedOptions.value.carPark){
//     priceOption.value[0].price = getOptionPrice('carPark');
//     console.log('priceOption.value.price',priceOption.value.price)
//     console.log('getOptionPrice carkPark',getOptionPrice('carPark'))
// }
//   if(selectedOptions.value.carPark){
//     priceOption.value[1].price = getOptionPrice('wine');
//   }

//   if(selectedOptions.value.carPark){
//     priceOption.value[2].price = getOptionPrice('pet');
//   }
// hotelStore.priceOption = priceOption.value;
// console.log('priceOption store',hotelStore.priceOption)
// }

// Options supplémentaires
const selectedOptions = ref({
  carPark: false,
  wine: false,
  pet: false,
});
const verifyCarParkOptionSelected = () => {
  if (selectedOptions.value.carPark) {
    hotelStore.setIsCarParkSelected();
  }
}

const selectedVehicle = ref('motorcycle');
const selectedParkingType = ref('default');
const expanded = ref(false);

// Données de la chambre
// const stars = ref([1, 2, 3, 4, 5]);

const amenitiesStatus = computed(() => {
  return {
    wifi: hotelStore.this_hotel?.amenities?.includes('wifi') || false,
    breakfast: hotelStore.this_hotel?.amenities?.includes('breakfast') || false,
    pool: hotelStore.this_hotel?.amenities?.includes('pool') || false,
    gym: hotelStore.this_hotel?.amenities?.includes('gym') || false
  };
});

const toggleOption = (option) => {
  selectedOptions.value[option] = !selectedOptions.value[option];
  if (option === 'carPark') {
    hotelStore.carParkPrice = getOptionPrice(option);
    setSelectedVehicle(selectedVehicle.value)
    console.log('carParkPrice', hotelStore.carParkPrice);
  } else if (option === 'wine') {
    hotelStore.winePrice = getOptionPrice(option);
  } else if (option === 'pet') {
    hotelStore.petPrice = getOptionPrice(option);
  }

};

const setSelectedVehicle = (vehicle) => {
  selectedVehicle.value = vehicle;
  if (selectedOptions.value.carPark) {
    hotelStore.carParkPrice = getOptionPrice('carPark');
    console.log('carParkPrice', hotelStore.carParkPrice);
  }
};

const setSelectedParkingType = (type) => {
  selectedParkingType.value = type;
};

// const toggleExpanded = () => {
//   expanded.value = !expanded.value;
// };

const handleBack = () => {
  emit('back');
  hotelStore.listHotel();
  router.back()
  console.log('handleBack');
};
// const firstNameValid = ref(null);
// const lastNameValid = ref(null);
// const emailValid = ref(null);
// const phoneValid = ref(null);

// // Fonctions de validation
// const validateFirstName = () => {
//   firstNameValid.value = firstName.value.length >= 2;
// };

// const validateLastName = () => {
//   lastNameValid.value = lastName.value.length >= 2;
// };

// const validateEmail = () => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   emailValid.value = emailRegex.test(emailAddress.value);
// };

// const validatePhoneNumber = () => {
//   // Supprime tous les caractères non numériques
//   const cleanedPhone = phoneNumber.value.replace(/\D/g, '');
//   phoneValid.value = cleanedPhone.length >= 8 && cleanedPhone.length <= 15;
// };

// Validation globale avant soumission
// const isFormValid = () => {

//   return validateFirstName(firstName) &&
//     validateLastName(lastName) &&
//     validateEmail(emailAddress) &&
//     validatePhoneNumber(phoneNumber);

// };
const handleNext = () => {
  firstNameTouched.value = true;
  lastNameTouched.value = true;
  emailTouched.value = true;
  phoneTouched.value = true;

  if (validateFirstName(firstName) &&
    validateLastName(lastName) &&
    validateEmail(emailAddress) &&
    validatePhoneNumber(phoneNumber)) {
    return console.log('handleBack');

  }
  const roomData = {
    guestInfo: {
      firstName: firstName.value,
      lastName: lastName.value,
      email: emailAddress.value,
      phone: {
        countryCode: countryCode.value,
        number: phoneNumber.value
      }
    },

    // Options supplémentaires sélectionnées
    additionalOptions: {
      carPark: selectedOptions.value === 'carPark' ? {
        vehicleType: selectedVehicle.value,
        parkingType: selectedParkingType.value,
        price: getOptionPrice('carPark')
      } : null,

      wine: selectedOptions.value === 'wine' ? {
        price: getOptionPrice('wine')
      } : null,

      pet: selectedOptions.value === 'pet' ? {
        price: getOptionPrice('pet')
      } : null
    },


    // Détails de la réservation
    bookingDetails: {
      hotelName: hotelStore.this_hotel?.name || t('notAvaible'),
      rating: 4.87,
      reviewCount: 262,
      amenities: amenitiesStatus.value,
      cancellationPolicy: expanded.value ?
        "Free cancellation until 11:59 PM on May 21, 2022. Your account will be charged on Sunday, May 22, 2022. If you cancel by 11:59 PM on Tuesday, May 31, 2022 you'll get your money back!" :
        "Free cancellation until 11:59 PM on May 21, 2022"
    }
  };

  // hotelStore.this_hotel.price = hotelStore.this_hotel.price + getOptionPrice('carPark') + getOptionPrice('wine') + getOptionPrice('pet');
  // console.log('hotelStore.this_hotel.price:', hotelStore.this_hotel.price);
  console.log('selectedOption:', selectedOptions.value);
  // setOptionsPrice();
  if (isPresentInDB.value) {
    verifyCarParkOptionSelected();
  }
  emit('next', roomData, RoomsWithLowPrice.value.id);
};

// Helper function to get option prices
const getOptionPrice = (option) => {
  if (!selectedOptions.value[option]) return 0;

  if (option === 'carPark') {
    switch (selectedVehicle.value) {
      case 'motorcycle': return 20000;
      case 'car': return 30000;
      case 'bus': return 50000;
      default: return 0;
    }
  }

  if (option === 'wine' || option === 'pet') {
    return 50000;
  }

  return 0;
};
console.log('gets', getOptionPrice('carPark'), getOptionPrice('wine'), getOptionPrice('pet'));

const serviceId = ref(0);
const RoomsWithLowPrice = ref({})
// Fonction pour charger les chambres
const loadRooms = async () => {
  try {
    isLoading.value = true;
    console.log('serviceId:', serviceId.value);
    const roomsResponse = await getAllServicesByServiceId(hotelStore.hotelId);
    console.log('roomsResponse:', hotelStore.hotelId);
    Rooms.value = roomsResponse.data;
    console.log('Rooms chargés:', Rooms.value);
    console.log('props.roomId', props.roomId)
    if (Rooms.value.length > 0) {
      const cheapestRoom = Rooms.value.filter((e) => {
        console.log('e.id', e.id)
        return e.id == props.roomId;
      });
      RoomsWithLowPrice.value = cheapestRoom[0];
      console.log('Chambre la moins chère:', cheapestRoom);
      // loadOptions(RoomsWithLowPrice.value.id); // Charger les options pour la chambre la moins chère
      hotelStore.roomPrice = RoomsWithLowPrice.value.price; // Mettre à jour le store avec la chambre la moins chère
      const optionIds = RoomsWithLowPrice.value.options?.map(opt => opt.optionId) || [];
      console.log("IDs des options:", optionIds);
      await loadOptions();
      const roomSizeOption = options.value.find(opt => opt.optionName === "Room Size (sqm)");

      // Ensuite, tu peux accéder à la valeur "15" comme ceci :
      sizeValue.value = roomSizeOption?.values?.find(v => v === "15");

      console.log(sizeValue); // Affichera "15" si elle est présente


    } else {
      RoomsWithLowPrice.value = {}; // ou null si tu préfères
    }

  } catch (error) {
    console.error('Erreur lors du chargement:', error);
  } finally {
    isLoading.value = false;
  }
};

const loadOptions = async () => {
  try {
    const optionIds = RoomsWithLowPrice.value.options?.map(opt => opt.optionId) || [];

    if (!optionIds.length) {
      console.warn('Aucune option à charger');
      options.value = [];
      return;
    }

    console.log('Chargement des options pour IDs:', optionIds);

    const responses = await Promise.all(
      optionIds.map(id => getOptionsByServiceId(id))
    );

    // Fusionner toutes les options retournées
    options.value = responses.flatMap(res => res.data || []);
    console.log('Options chargées:', options.value);

  } catch (error) {
    console.error('Erreur lors du chargement des options:', error);
  }
};

// Observer les changements de l'ID depuis le store
watch(
  () => hotelStore.this_hotel?.id,
  (newId, oldId) => {
    if (newId && newId !== oldId) {
      console.log('serviceId changed:', newId);
      serviceId.value = newId;
      loadRooms();
    }
  },
  { immediate: true }
);

onMounted(() => {
  // Scroll en haut de la page quand le composant est monté
  window.scrollTo({ top: 0, behavior: 'smooth' });

});


const accommodationOptions = [
  { optionId: 1, optionName: "Accommodation Type", value: "Single Room" },
  { optionId: 2, optionName: "Bed Type", value: "Single Bed" },
  { optionId: 3, optionName: "View", value: "Sea View" },
  { optionId: 4, optionName: "Balcony", value: "Yes" },
  { optionId: 5, optionName: "Terrace", value: "Yes" },
  { optionId: 6, optionName: "Air Conditioning", value: "Yes" },
  { optionId: 7, optionName: "Wi-Fi", value: "Free" },
  { optionId: 8, optionName: "Breakfast Included", value: "Yes" },
  { optionId: 9, optionName: "Private Bathroom", value: "Yes" },
  { optionId: 10, optionName: "Kitchen / Kitchenette", value: "Yes" },
  { optionId: 11, optionName: "Washing Machine", value: "Yes" },
  { optionId: 12, optionName: "Room Size (sqm)", value: "15" },
  { optionId: 13, optionName: "Number of Rooms", value: "1" },
  { optionId: 14, optionName: "Maximum Occupancy", value: "1" },
  { optionId: 15, optionName: "TV", value: "None" },
  { optionId: 16, optionName: "Mini Bar", value: "Yes" },
  { optionId: 17, optionName: "Safe Deposit Box", value: "Yes" },
  { optionId: 18, optionName: "Extra Bed", value: "Yes" },
  { optionId: 19, optionName: "Wheelchair Accessible", value: "Yes" },
  { optionId: 20, optionName: "Private Pool", value: "Yes" },
  { optionId: 21, optionName: "Jacuzzi / Spa", value: "Yes" },
  { optionId: 22, optionName: "Smoking Allowed", value: "Smoking" },
  { optionId: 23, optionName: "Pets Allowed", value: "Yes" },
  { optionId: 24, optionName: "Housekeeping", value: "Daily" },
  { optionId: 25, optionName: "Parking", value: "Free" },
  { optionId: 26, optionName: "Room Service", value: "Yes" },
  { optionId: 27, optionName: "Self Check-in", value: "Yes" },
  { optionId: 30, optionName: "House Rules", value: "Quiet Hours" },
  { optionId: 31, optionName: "Number of beds", value: "1" },
  { optionId: 32, optionName: "Number of bathrooms", value: "3" },
]

const getIcon = (optionName) => {
  const iconMap = {
    "Accommodation Type": "🏠",
    "Bed Type": "🛏️",
    "View": "👁️",
    "Balcony": "🚪",
    "Terrace": "🌿",
    "Air Conditioning": "❄️",
    "Wi-Fi": "📶",
    "Breakfast Included": "☕",
    "Private Bathroom": "🚿",
    "Kitchen / Kitchenette": "👨‍🍳",
    "Washing Machine": "🧺",
    "Room Size (sqm)": "📏",
    "Number of Rooms": "🏠",
    "Maximum Occupancy": "👥",
    "TV": "📺",
    "Mini Bar": "🍷",
    "Safe Deposit Box": "🔒",
    "Extra Bed": "🛏️",
    "Wheelchair Accessible": "♿",
    "Private Pool": "🏊",
    "Jacuzzi / Spa": "✨",
    "Smoking Allowed": "🚬",
    "Pets Allowed": "🐾",
    "Housekeeping": "🧹",
    "Parking": "🚗",
    "Room Service": "🛎️",
    "Self Check-in": "🔑",
    "House Rules": "⏰",
    "Number of beds": "🛏️",
    "Number of bathrooms": "🚿",
  }
  return iconMap[optionName] || "🏠"
}

const getValueColor = (value) => {
  if (value === "Yes" || value === "Free" || value === "Daily") {
    return "bg-green-100 text-green-800 hover:bg-green-200"
  }
  if (value === "None") {
    return "bg-gray-100 text-gray-600 hover:bg-gray-200"
  }
  if (value === "Smoking") {
    return "bg-orange-100 text-orange-800 hover:bg-orange-200"
  }
  return "bg-blue-100 text-blue-800 hover:bg-blue-200"
}

const categories = computed(() => [
  {
    title: "Accommodation Details",
    options: accommodationOptions.filter((opt) =>
      [
        "Accommodation Type",
        "Room Size (sqm)",
        "Number of Rooms",
        "Maximum Occupancy",
        "Number of beds",
        "Number of bathrooms",
      ].includes(opt.optionName)
    ),
  },
  {
    title: "Room Features",
    options: accommodationOptions.filter((opt) =>
      ["Bed Type", "View", "Balcony", "Terrace", "Private Bathroom", "Kitchen / Kitchenette", "Extra Bed"].includes(
        opt.optionName
      )
    ),
  },
  {
    title: "Amenities & Comfort",
    options: accommodationOptions.filter((opt) =>
      ["Air Conditioning", "Wi-Fi", "TV", "Mini Bar", "Safe Deposit Box", "Washing Machine"].includes(opt.optionName)
    ),
  },
  {
    title: "Premium Features",
    options: accommodationOptions.filter((opt) => ["Private Pool", "Jacuzzi / Spa"].includes(opt.optionName)),
  },
  {
    title: "Services",
    options: accommodationOptions.filter((opt) =>
      ["Breakfast Included", "Housekeeping", "Room Service", "Parking", "Self Check-in"].includes(opt.optionName)
    ),
  },
  {
    title: "Policies & Accessibility",
    options: accommodationOptions.filter((opt) =>
      ["Wheelchair Accessible", "Smoking Allowed", "Pets Allowed", "House Rules"].includes(opt.optionName)
    ),
  },
])

const includedFeaturesCount = computed(() =>
  accommodationOptions.filter((opt) => opt.value === "Yes").length
)
</script>

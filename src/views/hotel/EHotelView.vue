zz
<template>
    <div class="container mx-auto justify-center ">
        <!-- <div class="bg-customBlue dark:bg-gray-900 fixed w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Agency Bus</span>
    </div>
    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
    </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <CustomDropdownD :menuData="menuRestaurants" columnClass="grid-cols-2">
          <template #button>
            <span class="text-white">{{$t('navbar.restaurant')}}</span>
          </template>
</CustomDropdownD>
<CustomDropdownD :menuData="menuHouseWork" columnClass="grid-cols-2">
    <template #button>
            <span class="text-white">{{$t('navbar.homeAndWork')}}</span>
          </template>
</CustomDropdownD>
<router-link class="px-3 py-4">
    <a href="#"
        class="block text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
</router-link>
<router-link class="px-3 py-4">
    <a href="#"
        class="block  text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
</router-link>
</ul>
</div>
</div>
</div> -->
    </div>

    <!-- <div class="container mx-auto">
          <RadioButton v-model="selectedOption" :options="radioOptions" />
      </div> -->
    <div>
        <div class="bg-customBlue dark:bg-gray-900 w-full top-0 start-0 dark:border-gray-600">
            <div class="max-w-screen-xl min-w-screen-md flex flex-wrap items-center justify-between mx-auto p-0">
                <!-- boutton mobile start -->
                <button @click="toggleSidebar" data-collapse-toggle="navbar-sticky" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-dark-500 ml-5 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-sticky" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <!-- boutton mobile end -->

                <!-- sidebar mobile start -->

                <div v-if="isSidebarOpen" class="absolute inset-0 space-x-10 bg-black bg-opacity-50 z-[999] md:hidden"
                    @click.self="toggleSidebar">
                    <div class="absolute transform h-full bg-customBlue shadow-lg p-4 transition-transform w-[66.666%]"
                        :class="{
                            'translate-x-0': isSidebarOpen,
                            'translate-x-full': !isSidebarOpen,
                        }">
                        <div class="flex flex-col space-y-6 mt-10">
                            <!-- Contenu de la sidebar -->

                            <div class="flex flex-col items-center justify-between w-full md:w-auto md:order-1"
                                id="navbar-sticky">
                                <ul
                                    class="flex flex-col p-1 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <CustomDropdownD :menuData="menuRestaurants" columnClass="grid-cols-2">
                                        <template #button>
                                            <span class="text-white">{{ $t("appServices.agency.organizeYourTrip") }}
                                            </span>
                                        </template>
                                    </CustomDropdownD>

                                    <CustomDropdownD :menuData="menuHouseWork" columnClass="grid-cols-2">
                                        <template #button>
                                            <span class="text-white">{{
                                                $t("appServices.agency.services")
                                            }}</span>
                                        </template>
                                    </CustomDropdownD>

                                    <router-link class="px-5 py-5">
                                        <span
                                            class="block text-white rounded-sm hover:bg-white/50 md:hover:bg-transparent px-2 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            {{ $t("appServices.agency.trackATrip") }}
                                        </span>
                                    </router-link>

                                    <router-link class="px-6 py-5">
                                        <span
                                            class="block text-white rounded-sm hover:bg-white/50 md:hover:bg-transparent px-2 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            {{ $t("appServices.hotel.help") }}
                                        </span>
                                    </router-link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- sidebar mobile start -->

                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hotel Find</span>
                </div>
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse mr-7">
                    <LanguageButton @changeLang="langChanged" />
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul
                        class="flex flex-col p-3 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <CustomDropdownD :menuData="menuRestaurants" columnClass="grid-cols-2">
                            <template #button>
                                <span class="text-white">{{
                                    $t("appServices.agency.organizeYourTrip")
                                }}</span>
                            </template>
                        </CustomDropdownD>
                        <CustomDropdownD :menuData="menuHouseWork" columnClass="grid-cols-2">
                            <template #button>
                                <span class="text-white">{{
                                    $t("appServices.agency.services")
                                }}</span>
                            </template>
                        </CustomDropdownD>
                        <router-link to="/recherche" class="px-3 py-5">
                            <span
                                class="block text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{{
                                    $t("appServices.agency.trackATrip") }}</span>
                        </router-link>
                        <router-link to="/recherche" class="px-3 py-5">
                            <span
                                class="block text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{{
                                    $t("appServices.agency.help") }}</span>
                        </router-link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="relative background" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <!-- ✅ Checkbox caché pour gérer l'affichage -->
        <input type="checkbox" id="toggle-passager" class="peer hidden" />

        <!-- ✅ Overlay sombre qui met en avant la div principale et la modale -->
        <label for="toggle-passager" class="fixed inset-0 bg-black opacity-50 z-50 hidden peer-checked:block"></label>

        <!-- ✅ Modale pour configurer les voyageurs -->
        <div v-if="!isSmallScreen" id="modalPassager"
            class="h-64 overflow-x-auto absolute left-[1250px] top-[495px] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-6 w-96 lg:w-[500px] hidden peer-checked:block">

            <div id="modalVoyageur" class="bg-white p-6 rounded-lg w-full lg:w-[500px]">
                <div v-for="(room, index) in rooms" :key="room.id" class="mb-4">
                <h3 class="font-bold text-lg">{{$t("appServices.hotel.room")}} {{ index + 1 }}</h3>
                <Counter v-model="room.adults">{{$t("appServices.agency.oneAdult")}}</Counter>
                <Counter class="mt-2" v-model="room.childrens">{{$t("appServices.agency.children")}}</Counter>
                <div class="w-full h-[2px] bg-gradient-to-r from-customBlue via-purple-800 to-customRed my-4"></div>
                <div class="flex justify-between">
                <button
                    @click="removeRoom(index)"
                    class="px-4 py-2 ml-auto font-medium rounded-full text-red-600 hover:bg-red-200"
                    v-if="rooms.length > 1"
                >
                    Supprimer une chambre
                </button>

                <!-- <button
                    @click="addRoom"
                    class="px-4 py-2 ml-auto rounded-full text-blue-600 hover:bg-blue-200"
                >
                    Ajouter une chambre
                </button> -->
                </div>
                </div>

                <!-- Boutons Ajouter/Supprimer une chambre -->
                <div class="flex justify-between">
                <!-- <button
                    @click="removeRoom"
                    class="px-4 py-2 ml-auto  rounded-full text-red-600 hover:bg-red-200"
                    v-if="rooms.length > 1"
                >
                    Supprimer une chambre
                </button> -->

                <button
                    @click="addRoom"
                    class="px-4 py-2 font-medium ml-auto rounded-full text-blue-600 hover:bg-blue-200"
                >
                    Ajouter une chambre
                </button>
                </div>
            </div>


            <!-- <div v-for="room in rooms" :key="room" class="">
                <Counter v-model="adults">{{
                $t("appServices.agency.oneAdult")
            }}</Counter>
                <div class="w-full h-[2px] rounded-full bg-gradient-to-r from-customBlue via-purple-800 to-customRed my-4">
                </div>
            <Counter v-model="childrens">{{
                $t("appServices.agency.children")
            }}</Counter>

            <div class="w-full h-[2px] rounded-full bg-gradient-to-r from-customBlue via-purple-800 to-customRed my-4">
            </div>
            <div v-if="rooms>1" class="flex">
                <button @click="deleteElement" class="ml-auto px-4 py-2 font-medium rounded-full text-blue-600 flex-wrap  hover:bg-blue-200">
                    Supprimer une chambre                </button>
            </div>

            </div>
            <div class="flex">
                <button @click="addElement" class="ml-auto px-4 py-2 font-medium rounded-full text-blue-600 flex-wrap  hover:bg-blue-200">
                    Ajouter une chambre                </button>
            </div> -->
        </div>

        <!-- ✅ Modale pour configurer les passagers end -->

        <!-- Modale pour configurer les passagers mobile start -->

        <div v-if="isSmallScreen" id="modalPassager"
            class="absolute left-[208px] top-[600px] transform -translate-x-1/2 -translate-y-1/3 bg-white rounded-lg shadow-xl p-6 w-screen-sm hidden peer-checked:block">
            <div id="modalVoyageur" class="bg-white p-6 rounded-lg w-96 lg:w-[500px]">
                <div v-for="(room, index) in rooms" :key="room.id" class="mb-4">
                <h3 class="font-bold text-lg">{{$t("appServices.hotel.room")}} {{ index + 1 }}</h3>
                <Counter v-model="room.adults">{{$t("appServices.agency.oneAdult")}}</Counter>
                <Counter class="mt-2" v-model="room.childrens">{{$t("appServices.agency.children")}}</Counter>
                <div class="w-full h-[2px] bg-gradient-to-r from-customBlue via-purple-800 to-customRed my-4"></div>
                <div class="flex justify-between">
                <button
                    @click="removeRoom(index)"
                    class="px-4 py-2 ml-auto font-medium rounded-full text-red-600 hover:bg-red-200"
                    v-if="rooms.length > 1"
                >
                    Supprimer une chambre
                </button>

                <!-- <button
                    @click="addRoom"
                    class="px-4 py-2 ml-auto rounded-full text-blue-600 hover:bg-blue-200"
                >
                    Ajouter une chambre
                </button> -->
                </div>
                </div>

                <!-- Boutons Ajouter/Supprimer une chambre -->
                <div class="flex justify-between">
                <!-- <button
                    @click="removeRoom"
                    class="px-4 py-2 ml-auto  rounded-full text-red-600 hover:bg-red-200"
                    v-if="rooms.length > 1"
                >
                    Supprimer une chambre
                </button> -->

                <button
                    @click="addRoom"
                    class="px-4 py-2 ml-auto font-medium rounded-full text-blue-600 hover:bg-blue-200"
                >
                    Ajouter une chambre
                </button>
                </div>
            </div>
        </div>

        <!-- Modale pour configurer les passagers mobile end -->

        <!-- ✅ Ton code existant SANS MODIFICATION -->
        <div class="absolute inset-0 bg-black opacity-50"></div>

        <!-- Div centrée et superposée à moitié sur l'image -->
        <div
            class="absolute top-[10px] left-1/2 transform -translate-x-1/2 translate-y-1/3 rounded-sm max-w-screen-xl w-full">
            <span class="text-5xl text-white font-medium">{{
                $t("appServices.hotel.hotelAnnouncement")
            }}</span>
        </div>

        <!-- ✅ Ajout de la classe peer-checked pour mettre en avant la div -->
        <div id="maDivPrincipale"
            class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-2/3 bg-white rounded-sm max-w-screen-xl min-w-screen-sm p-4 shadow-lg transition-all peer-checked:shadow-2xl peer-checked:scale-105 peer-checked:bg-white">
            <!-- <div class="flex space-x-4 mx-auto px-4 py-4 rounded-md w-full">
                <label for="aller-simple"
                    class="font-medium relative hover:bg-zinc-100 flex items-center px-3 gap-2 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none">
                    <input type="radio" name="status" id="aller-simple" value="aller-simple" v-model="picked"
                        class="w-4 h-4 accent-blue-500" />
                    {{ $t('appServices.agency.oneWay') }}
                </label>

                <label for="aller-retour"
                    class="font-medium relative hover:bg-zinc-100 flex items-center px-3 gap-2 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none">
                    <input type="radio" name="status" id="aller-retour" value="aller-retour" v-model="picked"
                        class="w-4 h-4 accent-blue-500" />
                    {{ $t('appServices.agency.roundTrip') }} </label>
            </div> -->

            <div
                class="flex flex-col sm:flex-row md:grid-cols-2 sm:grid-cols-2 items-center justify-center sm:justify-between w-full">
                <!-- Search Section -->
                <div class="lg:flex justify-center">
                    <div class="bg-transparent mt-4 rounded-lg cursor-pointer" @click="toggleDropdown">
                        <div @click="toggleDropdown"
                            class="relative bg-inherit border-2 border-black rounded-lg px-3  focus:ring-2 focus:ring-blue-500 cursor-pointer flex items-start justify-between w-60 md:min-w-56 lg:w-96">
                            <i
                                class="fas fa-location-dot absolute left-3 top-1/2 transform -translate-y-1/2 text-black"></i>
                            <input type="text" id="destination" @click="toggleDropdown" v-model="destination"
                                class="opacity-0 peer bg-transparent h-14 rounded text-black pl-8 py-3 placeholder-transparent ring-2 px-6 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                                placeholder="Type inside me" />
                            <label for="destination"
                                class="absolute left-8 top-6 text-md bg-inherit place-self-auto mt-1 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 ">
                               <span class="text-black"> {{ destination }} </span> </label>
                            <label for="destination"
                                class="absolute left-8 -top-0 text-sm text- bg-inherit place-self-auto mt-1 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 ">
                                <span class="text-black">{{ $t("appServices.hotel.destination") }}</span></label>
                        </div>
                    </div>
                    <div v-show="isOpen"
                        class="absolute bg-white border h-[500px] mt-4 shadow-xl rounded w-full max-w-sm sm:min-w-56 md:min-w-56 lg:min-w-96 transition duration-300"
                        :style="dropdownStyle">
                        <div class="p-3">
                            <input ref="searchInput"
                                class="text-3xl text-black  outline-none h-full  w-full placeholder-gray-800 text-start  resize-none my-2"
                                placeholder="OU ALLEZ VOUS ?" />

                            <div class="w-full border-b rounded-full mt-2"></div>

                            <div v-if="isLoading">
                                <div class="flex justify-start items-center mt-2">
                                    <Skeletor circle size="30" class="post__avatar" />
                                    <Skeletor class="ml-3" width="75%" />
                                </div>
                                <div class="flex justify-start items-center mt-2">
                                    <Skeletor circle size="30" class="post__avatar" />
                                    <Skeletor class="ml-3" width="75%" />
                                </div>
                                <div class="flex justify-start items-center mt-2">
                                    <Skeletor circle size="30" class="post__avatar" />
                                    <Skeletor class="ml-3" width="75%" />
                                </div>
                            </div>
                            <div v-else @click="toggleDropdown" class="mt-2">
                                <div class="flex justify-center mt-10">
                                    <h1 class="text-2xl">Aucune Recherche Recente </h1>

                                    <BaseIcon class="fast-pin" name="Search" size="20" stroke-width="2" />
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
                <div class=" bg-transparent p-4 mt-4 rounded-sm cursor-pointer">
                    <div
                        class="datepicker aller relative bg-inherit border-2 border-black rounded-lg px-3  focus:ring-2 focus:ring-blue-500 cursor-pointer flex items-start justify-between w-60 md:min-w-56 lg:w-76">
                        <i
                            class="fas fa-calendar-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-black"></i>
                        <input type="text" ref="datepickerAller" id="dateAller" v-model="formattedDateAller"
                            class=" opacity-0 peer bg-transparent h-14 w-56 rounded text-black pl-8 py-3 placeholder-transparent ring-2 px-6 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                            placeholder="Type inside me" />
                        <label for="dateAller"
                            class="absolute left-8 top-6 text-md text-black bg-inherit place-self-auto mt-1 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 ">
                            <span class="text-black font-medium">{{ formattedDateAller }}</span></label>
                        <label for="dateAller"
                            class="absolute left-8 -top-0 text-sm text-black bg-inherit place-self-auto mt-1 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 ">
                            <span class="text-black font-medium">{{ $t("appServices.hotel.arrival") }}</span></label>
                    </div>
                </div>

                <div class="datepicker retour bg-transparent mt-4 rounded-sm cursor-pointer">
                    <div
                        class="relative bg-inherit border-2 border-black rounded-lg px-3  focus:ring-2 focus:ring-blue-500 cursor-pointer flex items-start justify-between w-60 md:min-w-56 lg:w-76">
                        <i
                            class="fas fa-calendar-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-black"></i>
                        <input type="text" ref="datepickerRetour" id="dateRetour" v-model="formattedDateRetour"
                            class=" opacity-0 peer bg-transparent h-14 w-56 rounded text-black pl-8 py-3 placeholder-transparent ring-2 px-6 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                            placeholder="Type inside me" />
                        <label for="dateRetour"
                            class="absolute left-8 top-6 text-md text-black bg-inherit place-self-auto mt-1 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 ">
                            <span class="text-black">{{ formattedDateRetour }}</span></label>
                        <label for="deteRetour"
                            class="absolute left-8 -top-0 text-sm text-black bg-inherit place-self-auto mt-1 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 ">
                            <span class="text-black">{{ $t("appServices.hotel.departure") }}</span></label>
                    </div>
                </div>

                <div class="bg-transparent p-4 mt-4 rounded-sm">
                    <label for="toggle-passager"></label>
                    <div
                        class="relative bg-inherit border-2 border-black rounded-lg px-3  focus:ring-2 focus:ring-blue-500 cursor-pointer flex items-start justify-between w-60 md:min-w-56 lg:w-76">
                        <i class="fas fa-users absolute left-3 top-1/2 transform -translate-y-1/2 text-black"></i>
                        <input type="text" id="travelers" name="travelers" v-model="formattedDateAller"
                            class="opacity-0 peer bg-transparent h-14 w-56 rounded text-black pl-8 py-3 placeholder-transparent ring-2 px-6 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                            placeholder="Type inside me" />
                        <label for="toggle-passager"
                            class="absolute left-8 top-6 text-md text-black bg-inherit place-self-auto mt-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 ">
                            <div class="flex items-center justify-center">
                                <span class="text-black"><span class="text-lg">{{ totalPersons }}</span> <span class="text-sm font-medium">{{ $t("appServices.hotel.persons") }}</span> ,
                                <span class="text-lg">{{ rooms.length }} </span> <span class="text-sm font-medium">{{ $t("appServices.hotel.rooms") }}</span>
                                </span>
                                <!-- Chevron down icon added here -->

                            </div>
                        </label>
                        <label for="travelers"
                            class="absolute left-8 -top-0 text-sm text-gray-500 bg-inherit place-self-auto mt-1 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 ">
                            <span class="text-black">{{ $t("appServices.hotel.travelers") }}</span></label>
                    </div>
                </div>
                <div class="">
                    <button @click="handleSearch" class="bg-customRed text-white w-full h-14 py-2 px-2 rounded-lg mt-3">
                        {{ $t("appServices.agency.search") }}
                    </button>
                </div>
            </div>
        </div>

        <div class="p-24"></div>
    </div>
    <!-- <div class="p-7"></div> -->

    <div></div>
    <!-- <div class="card">
        <div class="card__image">
            <Skeletor height="200" />
        </div>

        <div class="card__slim">
            <div class="card__avatar">
                <Skeletor circle size="48" class="post__avatar" />
            </div>

            <div class="card__meta">
                <h2>
                    <Skeletor width="50%" />
                </h2>

                <p>
                    <Skeletor width="75%" />
                </p>
            </div>
        </div>

        <div class="card__text">
            <Skeletor v-for="i in 5" :key="i" />
        </div>

        <div class="card__actions">
            <Skeletor width="96" height="36" pill style="margin-right: 4px" />
            <Skeletor width="96" height="36" pill />
        </div>
    </div> -->

    <!-- <div class="bg-transparent p-4 mt-4 rounded-sm">
        <div class="relative bg-inherit">
            <i class="fas fa-location-dot absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input type="text" id="destination" name="destination"
                class="peer bg-transparent h-14 w-72 rounded text-gray-200 pl-8 py-3 placeholder-transparent ring-2 px-6 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                placeholder="Type inside me" />
            <label for="destination"
                class="absolute left-8 -top-2 text-sm text-gray-500 bg-inherit mt-1 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-0 peer-focus:text-sky-600 peer-focus:text-sm transition-all">
                Destination</label>
        </div>
    </div> -->















</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed } from "vue";
import backgroundImage from "@/assets/bg-hotel.jpg";
import LanguageButton from "@/components/buttons/LanguageButton.vue";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { French, English } from "flatpickr/dist/l10n/fr.js";
import Counter from "@/components/counter/Counter.vue";
import BaseIcon from '@/components/icons/BaseIcon.vue';


// import FloatingInput from '../input/FloatingInput.vue';
import CustomDropdownD from "@/components/dropDown/dropdownColumnsP.vue";

// import DropDown from '../dropDown/DropDown.vue';
import { useI18n } from "vue-i18n";

import "vue-skeletor/dist/vue-skeletor.css";
import { Skeletor } from "vue-skeletor";

// Utilisation de useI18n pour accéder aux traductions
const langChange = ref(false);
const isDropdownVisible = ref(false);
const scrollMenu = ref(null);
const showLeftButton = ref(false);
const showRightButton = ref(false);
const destination = ref(null);
const isOpen = ref(false);
const isLoading = ref(true);


const datepickerAller = ref(null);
const datepickerRetour = ref(null);
const formattedDateAller = ref("");
const formattedDateRetour = ref("");

const currentLanguage = ref("en");
const isSidebarOpen = ref(false);
// const adults = ref(1);
// const childrens = ref(0);
// const rooms = ref(1);


const showFilter = ref(false);
const searchInput = ref(null);


const toggleDropdown = async () => {
    isOpen.value = !isOpen.value;
    nextTick(() => {
        searchInput.value?.focus();
        searchInput.value.style.caretColor = "#FF5400"; // Appliquer la couleur du curseur

    });
};

const rooms = ref([
  { id: 1, adults: 1, childrens: 0 } // Une chambre par défaut
]);

// Ajouter une nouvelle chambre avec des valeurs indépendantes
const addRoom = () => {
  rooms.value.push({
    id: rooms.value.length + 1, // ID unique
    adults: 1, // Valeur par défaut
    childrens: 0
  });
};

// Supprimer la dernière chambre (uniquement si > 1 chambre)
const removeRoom = (index) => {
  if (rooms.value.length > 1) {
    rooms.value.splice(index, 1);
  }
};

const totalPersons = computed(() => {
  return rooms.value.reduce((total, room) => total + room.adults + room.childrens, 0);
});

const handleSearch = () => {
    showFilter.value = true;
};

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};

const formatDate = (date) => {
    const options = { day: "2-digit", month: "short" };
    return `${t("appServices.agency.today")}, ${new Intl.DateTimeFormat(
        currentLanguage.value,
        options
    ).format(date)}`;
};

const _formatDate = (date) => {
    const options = {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
    };
    return new Intl.DateTimeFormat(currentLanguage.value, options).format(date);
};

const langChanged = (lang) => {
    currentLanguage.value = lang;
    langChange.value = !langChange.value;

    // Mettre à jour la locale de Flatpickr
    flatpickr(".datepicker", {
        mode: "range",
        locale: lang === "en" ? English : French,
        dateFormat: "d M Y",
        minDate: "today",
        onChange: (selectedDates) => {
            if (selectedDates.length > 0) {
                formattedDateAller.value = _formatDate(selectedDates[0]);
                datepickerAller.value.value = formattedDateAller.value; // Mettre à jour l'input
            }
            if (selectedDates.length > 1) {
                formattedDateRetour.value = _formatDate(selectedDates[1]);
                datepickerRetour.value.value = formattedDateRetour.value; // Mettre à jour l'input retour
            }
        },
    });

    const today = new Date();
    formattedDateAller.value = formatDate(today);
    formattedDateRetour.value = formatDate(today);

    console.log("formattedDateAller.value", formattedDateAller.value);
};

// window.onload = function() {
//     document.getElementById("searchInput").focus();
//   };

onMounted(() => {
    // rooms.value = 1;
    isLoading.value = true;
    setTimeout(() => {
        isLoading.value = false;
    }, 5000);
    langChanged("en"); // Initialiser avec le français au premier chargement
});

const checkScrollButtonsVisibility = () => {
    if (!scrollMenu.value) return;

    const element = scrollMenu.value;
    showLeftButton.value = element.scrollLeft > 0;
    showRightButton.value =
        element.scrollWidth > element.clientWidth + element.scrollLeft;
};

// const scrollLeft = () => {
//   scrollMenu.value.scrollLeft -= 100;
//   checkScrollButtonsVisibility();
// };

// const scrollRight = () => {
//   scrollMenu.value.scrollLeft += 100;
//   checkScrollButtonsVisibility(); // Update visibility after scrolling
// };

const handleClickOutside = (event) => {
    if (!event.target.closest(".group")) {
        isDropdownVisible.value = false;
    }
};

const isSmallScreen = ref(window.innerWidth < 1024);

const updateScreenSize = () => {
    isSmallScreen.value = window.innerWidth < 1024;
};
// const showLeft = ref(false);
// const showRight = ref(false);

// const hide = (side) => {
//   setTimeout(() => {
//     if (side === 'left') showLeft.value = false;
//     if (side === 'right') showRight.value = false;
//   }, 200);
// };

// const select = (side, item) => {
//   if (side === 'left') {
//     leftValue.value = item;
//     showLeft.value = false;
//   } else {
//     rightValue.value = item;
//     showRight.value = false;
//   }
// };

onMounted(() => {

    checkScrollButtonsVisibility(); // Initial check after component is mounted
    document.addEventListener("click", handleClickOutside);
    // Re-check when the window resizes (for responsiveness)
    window.addEventListener("resize", checkScrollButtonsVisibility);
    window.addEventListener("resize", updateScreenSize);
});
onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
    window.removeEventListener("resize", updateScreenSize);
});

const { t } = useI18n();

// const menuData = computed(() => [
//     { label: "Yaounde, CE," + t('navbar.cameroon') },
//     { label: "Douala, LT , " + t('navbar.cameroon') },
//     { label: "Bamenda, NW, " + t('navbar.cameroon') },
//     { label: "Garoua, NO, " + t('navbar.cameroon') },
//     { label: "Bafoussam, OU, " + t('navbar.cameroon') },
//     { label: "Limbe, SO, " + t('navbar.cameroon') },
//     { label: "Kribi, SU, " + t('navbar.cameroon') },
//     { label: "Buea, SW, " + t('navbar.cameroon') },
//     { label: "Maroua, EN, " + t('navbar.cameroon') },
//     { label: "Dschang, OU, " + t('navbar.cameroon') },
// ]);
</script>

<style scoped>
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.menu-item:hover .base-icon {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

.background {
    background-image: url("@/assets/wp7388245-satisfied-wallpapers.jpg");
    background-size: cover;
    background-position: center;
}

@keyframes fast-spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(-360deg);
    }

    /* Une rotation */
}

.fast-spin {
    animation: fast-spin 0.4s ease-in-out;
}

/* ✅ Met les deux divs au premier plan */
#maDivPrincipale,
#modalPassager {
    z-index: 50 !important;
    /* Passe au-dessus de tout */
}
</style>

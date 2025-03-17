
<template>
    <!-- ✅ Checkbox caché pour gérer l'affichage -->
    <input type="checkbox" id="toggle-passager" class="peer hidden" />

    <!-- ✅ Overlay sombre qui met en avant la div principale et la modale -->
    <label for="toggle-passager" class="fixed inset-0 bg-black opacity-50 z-50 hidden peer-checked:block"></label>

    <!-- ✅ Modale pour configurer les voyageurs -->
    <div v-if="!isSmallScreen" id="modalPassager"
        class="ma-div overflow-x-auto absolute bg-white rounded-lg h-96 mt-16 left-1/2 shadow-xl p-3 lg:w-[500px] hidden peer-checked:block">
        <div id="modalVoyageur" class="bg-white p-6 rounded-lg ">
            <div v-for="(room, index) in rooms" :key="room.id" class="mb-4">
                <h3 class="font-bold text-lg">{{ $t("appServices.hotel.room") }} {{ index + 1 }}</h3>
                <Counter v-model="room.adults">{{ $t("appServices.agency.oneAdult") }}</Counter>
                <Counter class="mt-2" v-model="room.childrens">{{ $t("appServices.agency.children") }}</Counter>
                <div class="w-full h-[2px] bg-gradient-to-r from-customBlue via-purple-800 to-customRed my-4"></div>
                <div class="flex justify-between">
                    <button @click="removeRoom(index)"
                        class="px-4 py-2 ml-auto font-medium rounded-full text-red-600 hover:bg-red-200"
                        v-if="rooms.length > 1">
                        {{ $t("appServices.hotel.deleteRoom") }}
                    </button>

                </div>
            </div>

            <!-- Boutons Ajouter/Supprimer une chambre -->
            <div class="flex justify-between">

                <button @click="addRoom" :class="addRoomDisabled ? 'cursor-not-allowed' : ''"
                    class="px-4 py-2 font-medium ml-auto rounded-full text-blue-600 hover:bg-blue-200">
                    {{ $t("appServices.hotel.addRoom") }}
                </button>

            </div>
            <div class="flex justify-between mt-2">
                <label for="toggle-passager"
                    class="px-4 py-2 font-medium ml-auto rounded-full text-blue-600 bg-blue-200 cursor-pointer peer-checked:bg-blue-200">
                    {{ $t("appServices.hotel.valid") }}</label>

            </div>
        </div>

    </div>

    <!-- ✅ Modale pour configurer les passagers end -->

    <!-- Modale pour configurer les passagers mobile start -->

    <div v-if="isSmallScreen" id="modalPassager"
        class="ma-div overflow-x-auto absolute ml-[51.6%] mt-[45%] h-96 transform -translate-x-1/2 -translate-y-2/3 bg-white rounded-lg shadow-xl p-3 w-screen-sm hidden peer-checked:block">
        <div id="modalVoyageur" class="bg-white p-6 rounded-lg w-96 lg:w-[500px]">
            <div v-for="(room, index) in rooms" :key="room.id" class="mb-4">
                <h3 class="font-bold text-lg">{{ $t("appServices.hotel.room") }} {{ index + 1 }}</h3>
                <Counter v-model="room.adults">{{ $t("appServices.agency.oneAdult") }}</Counter>
                <Counter class="mt-2" v-model="room.childrens">{{ $t("appServices.agency.children") }}</Counter>
                <div class="w-full h-[2px] bg-gradient-to-r from-customBlue via-purple-800 to-customRed my-4"></div>
                <div class="flex justify-between">
                    <button @click="removeRoom(index)"
                        class="px-4 py-2 ml-auto font-medium rounded-full text-red-600 hover:bg-red-200"
                        v-if="rooms.length > 1">
                        {{ $t("appServices.hotel.deleteRoom") }}
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

                <button @click="addRoom"
                    class="px-4 py-2 ml-auto font-medium rounded-full text-blue-600 hover:bg-blue-200">
                    {{ $t("appServices.hotel.addRoom") }}
                </button>
            </div>
            <div class="flex justify-between mt-2">
                <label for="toggle-passager"
                    class="px-4 py-2 font-medium ml-auto rounded-full text-blue-600 bg-blue-200 cursor-pointer peer-checked:bg-blue-200">
                    {{ $t("appServices.hotel.valid") }}           
                </label>

            </div>
        </div>
    </div>

    <!-- Modale pour configurer les passagers mobile end -->

    <!-- ✅ Ajout de la classe peer-checked pour mettre en avant la div -->


    <!-- il yavait bottom-0 -->

    <div
        class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md max-w-screen-xl min-w-screen-md py-4 md:p-4 lg:p-4 shadow-lg ">

        <div ref="dropdown"
            class="flex flex-col sm:flex-row md:grid-cols-2 sm:grid-cols-2 items-center justify-center sm:justify-between w-full">
            <!-- Search Section -->
            <div class="lg:flex justify-center">
                <div class="bg-transparent mt-1 rounded-lg cursor-pointer" @click="toggleDropdown">
                    <div
                        class="relative bg-inherit border-2 border-black rounded-lg px-3  focus:ring-2 focus:ring-blue-500 cursor-pointer flex items-start justify-between w-80 md:min-w-56 lg:w-80">
                        <i
                            class="fas fa-location-dot absolute left-3 top-1/2 transform -translate-y-1/2 text-black"></i>
                        <input type="text" id="destination" v-model="destination"
                            class="cursor-pointer opacity-0 peer bg-transparent h-14 rounded text-black pl-8 py-3 placeholder-transparent ring-2 px-6 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                            placeholder="Type inside me" />
                        <label for="destination" @click="toggleDropdown"
                            class="cursor-pointer absolute left-8 top-6 text-md bg-inherit place-self-auto mt-1 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 ">
                            <span class="text-black font-medium cursor-pointer"> {{ destination }} </span> </label>
                        <label for="destination"
                            class=" cursor-pointer  absolute left-8 -top-0 text-sm text- bg-inherit place-self-auto mt-1 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 ">
                            <span class="text-black  cursor-pointer ">{{ $t("appServices.hotel.destination")
                                }}</span></label>
                    </div>
                </div>
                <div v-if="isOpen"
                    class=" absolute z-9999 bg-white border h-[350px] lg:h-[500px] overflow-x-auto scrollbar-hide mt-4 shadow-xl rounded w-full max-w-sm sm:min-w-56 md:min-w-56 lg:w-80 transition duration-300">
                    <div class="p-3 ">
                        <div class="search-container relative">
                            <input ref="searchInput" @input="filterSuggestions" v-model="destination"
                                class="text-xl font-medium text-black outline-none h-full w-full placeholder-black text-start resize-none my-2 pr-10"
                                :placeholder="$t('appServices.hotel.question')" />
                            <button v-if="destination" @click="clearInput"
                                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-black text-xl">
                                <BaseIcon name="X" size="20" stroke-width="3" class="bg-red-200 rounded-full p-2 w-8 h-8" />
                            </button>
                        </div>

                        <div class="w-full border-b rounded-full mt-2"></div>

                        <div v-if="isLoading" class="z-[999px]">
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
                        <div v-else @click="toggleDropdown" class="mt-2 z-[999px] ">
                            <div v-if="!filteredWords.length" class="flex justify-start mt-10">
                                <div v-if="!recentSearch.length" class="flex justify-start items-center">

                                    <h1 class="text-2xl ml-2">{{ $t("appServices.hotel.info") }}</h1>
                                    <BaseIcon class="ml-2 fast-pin" name="Search" size="20" stroke-width="2" />

                                </div>
                                <div v-else>
                                    <ul class="suggestions">
                                        <li v-for="item in recentSearch" :key="item.label"
                                            class="flex justify-start items-center mt-3 cursor-pointer"
                                            @click="selectSuggestion(item)">
                                            <BaseIcon name="History" size="20" stroke-width="2" />
                                            <span class="ml-3 text-2xl">{{ item }}</span>
                                        </li>
                                    </ul>

                                </div>


                            </div>
                            <div class="z-50">
                                <ul v-if="filteredWords.length" class="suggestions">
                                    <li v-for="item in filteredWords" :key="item.label"
                                        class="flex justify-start items-center mt-3 cursor-pointer"
                                        @click="selectSuggestion(item.label)">
                                        <BaseIcon :name="item.icon" size="20" stroke-width="2" class="ml-2" />
                                        <span class="ml-3 text-2xl">{{ item.label }}</span>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <div class=" bg-transparent p-4 mt-1 rounded-sm cursor-pointer">
                <div
                    class="datepicker aller relative bg-inherit border-2 border-black rounded-lg px-3  focus:ring-2 focus:ring-blue-500 cursor-pointer flex items-start justify-between w-80 lg:w-64">
                    <i class="fas fa-calendar-alt hidden md:block absolute left-3 top-1/2 transform -translate-y-1/2 text-black"></i>
                    <input type="text" ref="datepickerAller" id="dateAller" v-model="formattedDateAller"
                        class=" opacity-0 peer bg-transparent h-14 w-56 rounded text-black pl-8 py-3 placeholder-transparent ring-2 px-6 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                        placeholder="Type inside me" />
                    <label for="dateAller"
                        class="absolute left-8 top-6 text-md text-black bg-inherit place-self-auto mt-1 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 ">
                        <span class="text-black font-medium">{{ formattedDateAller }}</span></label>
                    <label for="dateAller"
                        class="absolute left-8 -top-0 text-sm text-black bg-inherit place-self-auto mt-1 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 ">
                        <span class="text-black ">{{ $t("appServices.hotel.arrival") }}</span></label>
                </div>
            </div>

            <div class="datepicker retour bg-transparent mt-1 rounded-sm cursor-pointer">
                <div
                    class="relative bg-inherit border-2 border-black rounded-lg px-3  focus:ring-2 focus:ring-blue-500 cursor-pointer flex items-start justify-between w-80 md:min-w-56 lg:w-64">
                    <i class="fas fa-calendar-alt hidden md:block absolute left-3 top-1/2 transform -translate-y-1/2 text-black"></i>
                    <input type="text" ref="datepickerRetour" id="dateRetour" v-model="formattedDateRetour"
                        class=" opacity-0 peer bg-transparent h-14 w-56 rounded text-black pl-8 py-3 placeholder-transparent ring-2 px-6 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                        placeholder="Type inside me" />
                    <label for="dateRetour"
                        class="absolute left-8 top-6 text-md text-black bg-inherit place-self-auto mt-1 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 ">
                        <span class="text-black font-medium">{{ formattedDateRetour }}</span></label>
                    <label for="deteRetour"
                        class="absolute left-8 -top-0 text-sm text-black bg-inherit place-self-auto mt-1 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 ">
                        <span class="text-black">{{ $t("appServices.hotel.departure") }}</span></label>
                </div>
            </div>

            <div class="bg-transparent p-4 mt-1 rounded-sm">
                <label for="toggle-passager">
                    <div
                        class="relative bg-inherit border-2 border-black rounded-lg px-3  focus:ring-2 focus:ring-blue-500 cursor-pointer flex items-start justify-between w-80 md:min-w-56 lg:w-72">
                        <i class="fas fa-users absolute left-3 top-1/2 transform -translate-y-1/2 text-black"></i>
                        <input type="text" id="travelers" name="travelers" v-model="nothing"
                            class="opacity-0 peer bg-transparent h-14 w-56 rounded text-black pl-8 py-3 placeholder-transparent ring-2 px-6 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                            placeholder="Type inside me" />
                        <label for="toggle-passager"
                            class="absolute left-8 top-6 text-md text-black bg-inherit place-self-auto mt-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 ">
                            <div class="flex items-center justify-center">
                                <span class="text-black"><span class="text-lg">{{ totalPersons }}</span> <span
                                        class="text-md font-medium">{{ $t("appServices.hotel.persons") }}</span> ,
                                    <span class="text-lg">{{ rooms.length }} </span> <span
                                        class="text-md font-medium">{{
                                            $t("appServices.hotel.rooms") }}</span>
                                </span>
                                <!-- Chevron down icon added here -->

                            </div>
                        </label>
                        <label for="toggle-passager"
                            class="absolute left-8 -top-0 text-sm text-gray-500 bg-inherit place-self-auto mt-1 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 ">
                            <span class="text-black">{{ $t("appServices.hotel.travelers") }}</span></label>
                    </div>
                </label>
            </div>
            <div class="">
                <button @click="handleSearch"
                    class="bg-customRed text-white w-80 h-14 py-2 px-2 rounded-lg mt-1 md:w lg:w-full">
                    {{ $t("appServices.agency.search") }}
                </button>
            </div>
        </div>
    </div>


</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed,defineEmits } from "vue";
// import router from "vue-router";
// import router from "@/router";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { French, English } from "flatpickr/dist/l10n/fr.js";
import Counter from "@/components/counter/Counter.vue";
import BaseIcon from '@/components/icons/BaseIcon.vue';

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
const nothing = ref('true');
const addRoomDisabled = ref(false);



const datepickerAller = ref(null);
const datepickerRetour = ref(null);
const formattedDateAller = ref("");
const formattedDateRetour = ref("");

const currentLanguage = ref("en");
const dropdown = ref(null);

// const showFilter = ref(false);
const searchInput = ref(null);

const filteredWords = ref([]);
const recentSearch = ref([]);
const emit = defineEmits(["search"]);


const filterSuggestions = () => {
    if (destination.value.length === 0) {
        filteredWords.value = [];
        return;
    }
    filteredWords.value = menuData.value.filter(item =>
        item.label.toLowerCase().includes(destination.value.toLowerCase())
    );
};

const selectSuggestion = (label) => {
    destination.value = label;
    recentSearch.value.push(label);
    console.log("recentSearch", recentSearch.value);
    filteredWords.value = [];
};

const clearInput = () => {
    destination.value = "";
    filteredWords.value = [];


};

const toggleDropdown = async () => {
    if (isOpen.value === true) {
        isOpen.value = false;
        console.log("isOpen", isOpen.value);
    } else {
        isOpen.value = !isOpen.value;
        console.log("isOpen", isOpen.value);

    }
    nextTick(() => {
        searchInput.value?.focus();
        searchInput.value.style.caretColor = "#FF5400"; // Appliquer la couleur du curseur

    });
};

const rooms = ref([
    { id: 1, adults: 2, childrens: 0 } // Une chambre par défaut
]);

// Ajouter une nouvelle chambre avec des valeurs indépendantes
const addRoom = () => {
    if (rooms.value.length > 9) {
        addRoomDisabled.value = true;
    }
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
emit('search', { destination: destination.value, dateAller: formattedDateAller.value, dateRetour: formattedDateRetour.value, rooms: rooms.value });

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
    isOpen.value = false;
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


const handleClickOutside = (event) => {
    if (!event.target.closest(".group")) {
        isDropdownVisible.value = false;
        // isOpen.value =!isOpen.value ;
    }

    if (dropdown.value && !dropdown.value.contains(event.target)) {
        isOpen.value = false;

    }
};

const isSmallScreen = ref(window.innerWidth < 1024);

const updateScreenSize = () => {
    isSmallScreen.value = window.innerWidth < 1024;
};


onMounted(() => {
    document.addEventListener("click", handleClickOutside);
    checkScrollButtonsVisibility(); // Initial check after component is mounted
    // Re-check when the window resizes (for responsiveness)
    window.addEventListener("resize", checkScrollButtonsVisibility);
    window.addEventListener("resize", updateScreenSize);
});
onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
    window.removeEventListener("resize", updateScreenSize);
});

const { t } = useI18n();

const menuData = computed(() => [
    { label: "Yaounde, CE," + t('navbar.cameroon'), icon: "Luggage" },
    { label: "Douala, LT , " + t('navbar.cameroon'), icon: "PlaneTakeoff" },
    { label: "Bamenda, NW, " + t('navbar.cameroon'), icon: "Luggage" },
    { label: "Garoua, NO, " + t('navbar.cameroon'), icon: "PlaneTakeoff" },
    { label: "Bafoussam, OU, " + t('navbar.cameroon'), icon: "Luggage" },
    { label: "Limbe, SO, " + t('navbar.cameroon'), icon: "PlaneTakeoff" },
    { label: "Kribi, SU, " + t('navbar.cameroon'), icon: "Ship" },
    { label: "Buea, SW, " + t('navbar.cameroon'), icon: "PlaneTakeoff" },
    { label: "Maroua, EN, " + t('navbar.cameroon'), icon: "Ship" },
    { label: "Dschang, OU, " + t('navbar.cameroon'), icon: "PlaneTakeoff" },
]);
</script>

<style scoped>
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.ma-div::-webkit-scrollbar {
    width: 6px;
}

.ma-div::-webkit-scrollbar-thumb {
    background: #FF5400;
    /* Rouge */
    border-radius: 0px;
}

.ma-div::-webkit-scrollbar-track {
    background: #ecf0f1;
    /* Gris clair */
}

.menu-item:hover .base-icon {
    opacity: 1 !important;
    transform: translateY(0) !important;
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

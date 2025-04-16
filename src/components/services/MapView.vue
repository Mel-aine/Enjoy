<script setup>
import { ref, onMounted, watch } from "vue";
import { useCategoryStore } from "@/stores/map";
import { getServices } from "@/services/api";

const store = useCategoryStore();
const mapRef = ref(null);
const map = ref(null);
const markers = ref([]);
const mapsLoaded = ref(false);
const mapsLoadingError = ref(null);
const locations = ref([]); // Stocke les résultats de la recherche

// Charger Google Maps
const loadGoogleMapsScript = () => {
  return new Promise((resolve, reject) => {
    if (window.google) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_API_KEY}&libraries=places`;
    script.onload = resolve;
    script.onerror = () => reject(new Error("Erreur lors du chargement de Google Maps"));
    document.head.appendChild(script);
  });
};

// Initialisation de la carte
const initMap = () => {
  map.value = new google.maps.Map(mapRef.value, {
    center: { lat: 3.848, lng: 11.502 }, // Yaoundé par défaut
    zoom: 12,
  });
};


const deleteMarkers = () => {
  console.log("Suppression des marqueurs... Nombre actuel :", markers.value.length);

  markers.value.forEach(marker => {
    marker.setMap(null);
  });

  markers.value = []; // Réinitialiser le tableau pour éviter les références obsolètes
  console.log("Marqueurs supprimés ! Nouveau total :", markers.value.length);
};
const refreshMap = () => {
  if (!map.value) return;
  const currentZoom = map.value.getZoom();
  map.value.setZoom(currentZoom - 1); // Zoom arrière
  setTimeout(() => {
    map.value.setZoom(currentZoom); // Revenir au zoom initial
  }, 200);
};




// Mettre à jour la carte avec les emplacements récupérés
const updateMapWithLocations = () => {
  console.log("Mise à jour de la carte...");
  if (!map.value) return;

  deleteMarkers();
  refreshMap()

  const infoWindow = new google.maps.InfoWindow();

  locations.value.forEach(location => {
    try {
      const parsedLocation = typeof location === "string" ? JSON.parse(location) : location;
      if (!parsedLocation?.lat || !parsedLocation?.lng) return;

      const marker = new google.maps.Marker({
        position: { lat: parsedLocation.lat, lng: parsedLocation.lng },
        map: map.value,
        title: parsedLocation.text,
      });
      const service = Services.value.find(service => {
        if (!service.address) return false;

        try {
          const serviceAddress = JSON.parse(service.address);
          return (
            Math.abs(serviceAddress.lat - parsedLocation.lat) < 0.0001 &&
            Math.abs(serviceAddress.lng - parsedLocation.lng) < 0.0001
          );
        } catch (e) {
          console.warn("Erreur de parsing JSON pour l'adresse du service :", service.address, e);
          return false;
        }
      });

      marker.addListener("click", () => {
        const addressText = service?.address ? (() => {
          try {
            return JSON.parse(service.address).text;
          } catch {
            return service.address;
          }
        })() : "Non spécifiée";

        infoWindow.setContent(`
          <div style="color: #000; font-size: 16px;">
            <strong> ${service ? service.name : "Non spécifié"}</strong><br>
             ${addressText}<br>
            <a href="https://enjoy-em7y.onrender.com/hotelList" style="color: blue; text-decoration: underline; transition: text-decoration 0.2s ease-in-out;" class="custom-link"> Visitez nous  </a> 😃
          </div>
        `);
        infoWindow.open(map.value, marker);
      });

      markers.value.push(marker);
    } catch (error) {
      console.error("Erreur de parsing JSON pour la localisation :", location, error);
    }
  });
  console.log("Nouveaux marqueurs ajoutés :", markers.value.length);
};









const Services = ref([])

const fetchService = async () => {
  try {
    const response = await getServices();
    const data = response.data.data;
    Services.value = data
    if (!Array.isArray(data)) {
      console.error("Les données récupérées ne sont pas valides :", data);
      return;
    }


    const filteredLocations = data
      .filter(service => service.categoryId === store.category)
      .flatMap(service => service.address)
      .map(location => {
        try {
          return typeof location === "string" ? JSON.parse(location) : location;
        } catch (error) {
          console.warn("Erreur de parsing JSON pour la localisation :", error);
          return null;
        }
      })
      .filter(location => location && location.lat && location.lng);

      if (filteredLocations.length === 0) {
      locations.value = [];
      console.log("Aucun service trouvé pour cette catégorie.");
    } else {
      locations.value = filteredLocations;
      updateMapWithLocations();
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des services :", error);
  }
};
onMounted(async () => {
  try {
    await loadGoogleMapsScript();
    mapsLoaded.value = true;
    initMap();
  } catch (error) {
    mapsLoadingError.value = error.message;
    console.error("Erreur de chargement Google Maps:", error);
  }
});



// Surveiller les changements de catégorie pour récupérer les services
watch(() => store.category, (newCategory) => {
  console.log("Nouvelle catégorie sélectionnée :", newCategory);
  fetchService();
}, { immediate: true });
</script>

<template>
  <div class="space-y-6">
    <div v-if="mapsLoadingError" class="p-4 bg-red-100 text-red-700 rounded">
      Erreur de chargement de Google Maps: {{ mapsLoadingError }}
    </div>

    <div v-if="!mapsLoaded && !mapsLoadingError" class="p-4 bg-blue-100 text-blue-700 rounded">
      Chargement de la carte en cours...
    </div>



    <div v-show="mapsLoaded" class="">
      <div ref="mapRef" class="w-screen md:w-[930px] h-[900px] lg:w-full   rounded-md border border-gray-300"></div>
      <p class="mt-1 text-sm text-gray-500">Cliquez sur la carte ou recherchez une adresse pour définir l'emplacement.</p>
    </div>
  </div>
</template>

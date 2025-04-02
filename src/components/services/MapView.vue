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
  if (markers.value) {
    markers.value.forEach(marker => {
      marker.setMap(null);
    });
    markers.value = [];
  }
};

// Mettre à jour la carte avec les emplacements récupérés
const updateMapWithLocations = () => {
  if (!map.value) return;

  // Supprimer les anciens marqueurs
  deleteMarkers()

  const infoWindow = new google.maps.InfoWindow();

  locations.value.forEach(location => {
    try {
      const parsedLocation = typeof location === "string" ? JSON.parse(location) : location;

      if (parsedLocation.lat && parsedLocation.lng) {
        const marker = new google.maps.Marker({
          position: { lat: parsedLocation.lat, lng: parsedLocation.lng },
          map: map.value,
          title: parsedLocation.name || parsedLocation.text, // Nom du lieu
        });

        const filtered = Services.value.filter(service => service.categoryId === store.category).map(service => service.name)
        console.log("filtered" , filtered)
        // Ajouter une infoWindow au clic
        marker.addListener("click", () => {
          infoWindow.setContent(`
            <div>
              <strong>${parsedLocation.name || parsedLocation.text}</strong><br/>
              ${parsedLocation.address ? `<small>${parsedLocation.address}</small>` : ""}
            </div>
          `);
          infoWindow.open(map.value, marker);
        });

        markers.value.push(marker);
      }
    } catch (error) {
      console.warn("Erreur de parsing JSON pour la localisation :", location, error);
    }
  });

  // Centrer la carte sur le premier emplacement valide
  const firstValidLocation = locations.value.find(loc => loc.lat && loc.lng);
  if (firstValidLocation) {
    map.value.setCenter({ lat: firstValidLocation.lat, lng: firstValidLocation.lng });
    map.value.setZoom(12);
  }
};
const Services = ref([])
// Récupérer les services depuis l'API en fonction de la catégorie
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
          console.warn("Erreur de parsing JSON pour la localisation :", location);
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
      <div ref="mapRef" class="w-screen h-[900px] lg:w-full   rounded-md border border-gray-300"></div>
      <p class="mt-1 text-sm text-gray-500">Cliquez sur la carte ou recherchez une adresse pour définir l'emplacement.</p>
    </div>
  </div>
</template>

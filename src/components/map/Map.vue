<script setup>
import { defineProps, ref, onMounted, computed, watch } from 'vue';

const props = defineProps({
  places: {
    type: Array,
    default: () => [],
  },
  size: {
    type: String,
    default: 'lg', // 'sm' ou 'lg'
  },
  showMarkers: {
    type: Boolean,
    default: true,
  },
});

const mapRef = ref(null);
const map = ref(null);
const markers = ref([]);
const mapsLoaded = ref(false);
const mapsLoadingError = ref(null);

const loadGoogleMapsScript = () => {
  return new Promise((resolve, reject) => {
    if (window.google) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_API_KEY}`;
    script.onload = resolve;
    script.onerror = () => reject(new Error("Erreur lors du chargement de l'API Google Maps"));
    document.head.appendChild(script);
  });
};

const clearMarkers = () => {
  markers.value.forEach(marker => marker.setMap(null));
  markers.value = [];
};

const initMapWithMarkers = () => {
  if (!props.places.length) return;

  const center = {
    lat: props.places[0].lat || 0,
    lng: props.places[0].lng || 0,
  };

  map.value = new google.maps.Map(mapRef.value, {
    center,
    zoom: 8,
  });

  clearMarkers();

  if (props.showMarkers) {
    props.places.forEach((place, index) => {
  setTimeout(() => {
    const marker = new google.maps.Marker({
      position: { lat: place.lat, lng: place.lng },
      map: map.value,
      title: place.name || '',
      animation: google.maps.Animation.DROP,
    });
    markers.value.push(marker);
  }, index * 150); // 150ms entre chaque "chute"
});
  }
};

// Regénérer les marqueurs si `showMarkers` change
watch(() => props.showMarkers, (newVal) => {
  if (map.value) {
    clearMarkers();
    if (newVal) {
      props.places.forEach(place => {
        const marker = new google.maps.Marker({
          position: { lat: place.lat, lng: place.lng },
          map: map.value,
          title: place.name || '',
        });
        markers.value.push(marker);
      });
    }
  }
});

const mapSizeClass = computed(() => {
  return props.size === 'sm' ? 'w-full h-[100px]' : 'w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded border border-gray-300';
});

onMounted(async () => {
  try {
    await loadGoogleMapsScript();
    mapsLoaded.value = true;
    initMapWithMarkers();
  } catch (error) {
    mapsLoadingError.value = error.message;
    console.error(error);
  }
});
</script>

<template>
  <div class="space-y-4">
    <div v-if="mapsLoadingError" class="text-red-600">
      Erreur Google Maps: {{ mapsLoadingError }}
    </div>

    <div v-if="!mapsLoaded && !mapsLoadingError" class="text-blue-500">
      Chargement de Google Maps...
    </div>

    <div class="w-full">
      <div
        v-show="mapsLoaded"
        ref="mapRef"
        :class="mapSizeClass"
      ></div>
    </div>
  </div>
</template>

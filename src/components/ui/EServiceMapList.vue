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
    address: Object
});

const mapDisplay = ref(null);
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
const contentString = `
    <div style="min-width:200px;">
      <h3 style="margin:0; color:#6B21A8;">Paris</h3>
      <p style="margin:4px 0;">Ville lumière 🌟</p>
      <button style="background:#6B21A8; color:white; padding:4px 8px; border:none; border-radius:4px;">
        Voir plus
      </button>
    </div>
  `
const infoWindow = new google.maps.InfoWindow({
    content: contentString,
})

const clearMarkers = () => {
    markers.value.forEach(marker => marker.setMap(null));
    markers.value = [];
};

const initMapWithMarkers = () => {
    let center = {}
    if (props.places.length) {
        center = {
            lat: props.places[0].lat,
            lng: props.places[0].lng,
        };
    } else {
        center = {
            lat: 3.8485,
            lng: 11.5022,
        }

    }

    map.value = new google.maps.Map(mapDisplay.value, {
        center,
        zoom: 8,
    });
    map.value.addListener('gmp-click', () => {
        infoWindow.open(map, marker)
    })
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
    return props.size === 'sm' ? 'w-full h-[100px]' : 'w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen xl::h-screen   border-gray-300';
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

watch(
    () => props.address,
    (newAddress) => {
        console.log('new address', newAddress)
        if (newAddress && newAddress.location?.lat && newAddress.location?.lng && map.value) {
            map.value.setCenter({ lat: newAddress.location.lat, lng: newAddress.location.lng });
            map.value.setZoom(15); // Adjust zoom level as needed
        }
    },
    { deep: true }
);


watch(
    () => props.places,
    () => {
        if (mapsLoaded.value && map.value) {
            clearMarkers();
            initMapWithMarkers();
        }
    },
    { deep: true }
);

//
</script>

<template>
    <div class="space-y-4">
        <div v-if="mapsLoadingError" class="text-red-600">
            {{ $t('appServices.hotel.mapError') }} {{ mapsLoadingError }}
        </div>

        <div v-if="!mapsLoaded && !mapsLoadingError" class="text-blue-500">
            {{ $t('appServices.hotel.loadingMaps') }}
        </div>

        <div class="w-full">
            <div v-show="mapsLoaded" ref="mapDisplay" :class="mapSizeClass"></div>
        </div>
    </div>
</template>

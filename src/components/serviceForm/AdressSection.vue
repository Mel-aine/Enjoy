<script setup>
import { defineProps, defineEmits, ref, onMounted } from 'vue';

const props = defineProps({
  formData: Object,
});

const emit = defineEmits(['updateFormData']);

const mapRef = ref(null);
const map = ref(null);
const marker = ref(null);
const autocomplete = ref(null);
const mapsLoaded = ref(false);
const mapsLoadingError = ref(null);
const addressInput = ref(null); // Référence pour l'input de l'adresse

const loadGoogleMapsScript = () => {
  return new Promise((resolve, reject) => {
    if (window.google) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_API_KEY}&libraries=places`;
    script.onload = resolve;
    script.onerror = () => reject(new Error('Erreur lors du chargement de l\'API Google Maps'));
    document.head.appendChild(script);
  });
};

onMounted(async () => {
  try {
    await loadGoogleMapsScript();
    mapsLoaded.value = true;
    initMap();
    initAutocomplete();
  } catch (error) {
    mapsLoadingError.value = error.message;
    console.error('Erreur de chargement Google Maps:', error);
  }
});

const initMap = () => {
  map.value = new google.maps.Map(mapRef.value, {
    center: { lat: props.formData.latitude || 3.8480, lng: props.formData.longitude || 11.5021 }, // yaounde par défaut
    zoom: 12,
  });

  marker.value = new google.maps.Marker({
    position: { lat: props.formData.latitude || 3.8480, lng: props.formData.longitude || 11.5021 },
    map: map.value,
    draggable: true,
  });

  marker.value.addListener('dragend', (event) => {
    updateAddressFromPosition(event.latLng);
  });

  map.value.addListener('click', (event) => {
    placeMarker(event.latLng);
    updateAddressFromPosition(event.latLng);
  });
};

const initAutocomplete = () => {
  // Définir les limites pour Yaoundé (à adapter selon vos besoins)
  const cityBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(3.80, 11.45),
    new google.maps.LatLng(3.90, 11.55)
  );

  autocomplete.value = new google.maps.places.Autocomplete(addressInput.value, {
    types: ['geocode'],
    bounds: cityBounds,
    componentRestrictions: { country: 'cm' },
    fields: ['address_components', 'geometry', 'formatted_address']
  });

  autocomplete.value.addListener('place_changed', () => {
    const place = autocomplete.value.getPlace();
    if (!place.geometry) return;

    // Extraire les composants d'adresse
    const addressComponents = {
      quartier: getAddressComponent(place, 'sublocality'),
      ville: getAddressComponent(place, 'locality'),
      pays: getAddressComponent(place, 'country')
    };

    const location = place.geometry.location;
    map.value.setCenter(location);
    placeMarker(location);

    emit('updateFormData', {
      latitude: location.lat(),
      longitude: location.lng(),
      address: place.formatted_address,
      ...addressComponents
    });
  });
};

// Helper pour extraire les composants d'adresse
const getAddressComponent = (place, type) => {
  const component = place.address_components.find(c => 
    c.types.includes(type)
  );
  return component ? component.long_name : '';
};

const placeMarker = (location) => {
  marker.value.setPosition(location);
  map.value.setCenter(location);

  emit('updateFormData', {
    latitude: location.lat(),
    longitude: location.lng(),
  });
};

const updateAddressFromPosition = async (latLng) => {
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ location: latLng }, (results, status) => {
    if (status === 'OK' && results[0]) {
      const formattedAddress = results[0].formatted_address;
console.log('Adresse formatée:', formattedAddress);
      // Mise à jour du champ d'input visuel
      addressInput.value.value = formattedAddress;

      // Déclenche manuellement l'event @input
      addressInput.value.dispatchEvent(new Event('input'));

      // Émission des données vers le parent
      emit('updateFormData', {
        latitude: latLng.lat(),
        longitude: latLng.lng(),
        address: formattedAddress,
      });
    }
  });
};



const handleChange = (event) => {
  emit('updateFormData', { address: event.target.value });
};
</script>

<template>
  <div class="space-y-6">
    <div v-if="mapsLoadingError" class="p-4 bg-red-100 text-red-700 rounded">
      {{ $t('errorLoad') }} {{ mapsLoadingError }}
    </div>

    <div v-if="!mapsLoaded && !mapsLoadingError" class="p-4 bg-blue-100 text-blue-700 rounded">
      {{ $t('loadprogressing') }}...
    </div>

    <div v-show="mapsLoaded">
      <label for="address" class="block text-sm font-medium text-gray-700">{{ $t('address') }}</label>
      <input ref="addressInput" id="address" name="address" type="text"
        class="w-full px-2 py-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 sm:text-sm"
        :placeholder="$t('searchAddress')" :value="formData.address" @input="handleChange" required />
    </div>

    <div v-show="mapsLoaded">
      <label class="block text-sm font-medium text-gray-700">{{ $t('positionMap') }}</label>
      <div ref="mapRef" class="w-full h-64 mt-2 rounded-md border border-gray-300"></div>
      <p class="mt-1 text-sm text-gray-500">{{ $t('descriptionTodoInMap') }}</p>
    </div>

    <!-- Champs cachés pour les coordonnées -->
    <input type="hidden" name="latitude" :value="formData.latitude" />
    <input type="hidden" name="longitude" :value="formData.longitude" />
  </div>
</template>

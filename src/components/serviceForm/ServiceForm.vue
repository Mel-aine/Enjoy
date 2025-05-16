<script setup>
import { ref, onMounted } from 'vue';
import BasicInfoSection from '@/components/serviceForm/BasicInfoSection.vue';
import ContactInfoSection from '@/components/serviceForm/ContactInfoSection.vue';
import OperationalInfoSection from '@/components/serviceForm/OperationalInfoSection.vue';
import AdditionalInfoSection from '@/components/serviceForm/AdditionalInfoSection.vue';
import AdressSection from '@/components/serviceForm/AdressSection.vue';
import { createService } from '@/servicesApi/hotelServicesApi';
import { CheckIcon } from 'lucide-vue-next';
import AlertInfo from '../alert/AlertInfo.vue';
import { useMIHStore } from '@/stores/manageHotelInterface'
import Prog from '@/components/hotel/Progress.vue';
import { useI18n } from 'vue-i18n';


const isVisible = ref(false);
const { t } = useI18n();
const infoAlert = ref('')
const closeAlert = () => {
  isVisible.value = false;
};
const categories = ref([]);
const hotelStore = useMIHStore();
onMounted(() => {
  categories.value = hotelStore.allCategories;
  console.log('getCategories', categories.value);
});
const activeStep = ref(0);
const formSubmitted = ref(false);
const formData = ref({
  name: '',
  description: '',
  category_id: '',
  address: '',
  phone_number: '',
  email: '',
  website: '',
  openings: {},
  price_range: '',
  facilities: [],
  policies: '',
  capacity: '',
  payment_methods: [],
  status: 'active',
});

const updateFormData = (newData) => {
  formData.value = { ...formData.value, ...newData };
};

const handleNext = () => {
  if (!validateStep()) {
    return; // Arrête la fonction si validation échoue
  }
  if (activeStep.value < 4) {
    activeStep.value++;

  }
};

const handlePrevious = () => {
  console.log(activeStep.value);

  if (activeStep.value > 0) {
    activeStep.value--;
    console.log(activeStep.value);
  } else {
    activeStep.value = 0;
  }
};
const validateStep = () => {
  switch (activeStep.value) {
    case 0:
      if (!formData.value.name || !formData.value.category_id) {
        isVisible.value = true;
        infoAlert.value = ' Veuillez remplir tous les champs obligatoires : Nom et Catégorie.';
        return false;
      }
      break;
    case 1:
      if (!formData.value.address) {
        isVisible.value = true;
        infoAlert.value = ' Veuillez renseigner l\'adresse.';
        return false;
      }
      break;
    case 2:
      if (!formData.value.phone_number || !formData.value.email) {
        isVisible.value = true;
        infoAlert.value = ' Veuillez entrer un numéro de téléphone et une adresse e-mail.';
        return false;
      }
      break;
    case 3:
      if (!formData.value.openings || Object.keys(formData.value.openings).length === 0) {
        isVisible.value = true;
        console.log('formData.value.openings', formData.value.openings);
        infoAlert.value = ' Veuillez sélectionner les jours d\'ouverture.';
        return false;
      }
      break;
    case 4:
      if (!formData.value.policies) {
        isVisible.value = true;
        infoAlert.value = ' Veuillez renseigner les politiques du service.';
        return false;
      }
      break;
    default:
      return true;
  }
  return true;
};


const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.value.name || !formData.value.category_id) {
    alert('Les champs "Nom" et "Catégorie" sont obligatoires');
    return;
  }

  const payload = {
    name: formData.value.name,
    description: formData.value.description,
    category_id: Number(formData.value.category_id),
    address: JSON.stringify({
      text: formData.value.address || '',
      lat: formData.value.latitude ?? null,
      lng: formData.value.longitude ?? null
    }),
    phone_number: formData.value.phone_number,
    email: formData.value.email,
    website: formData.value.website,
    openings: formData.value.openings ? JSON.stringify(formData.value.openings) : '{}',
    price_range: formData.value.price_range || null,
    facilities: formData.value.facilities.length ? JSON.stringify(formData.value.facilities) : '[]',
    policies: formData.value.policies || null,
    capacity: formData.value.capacity ? Number(formData.value.capacity) : null,
    payment_methods: formData.value.payment_methods.length ? JSON.stringify(formData.value.payment_methods) : '[]',
    images: formData.value.url.length ? JSON.stringify(formData.value.url) : '[]',
    status: formData.value.status || 'active',
    firstname: formData.value.firstName,
    lastname: formData.value.lastName,
    password: formData.value.password,
    emailU: formData.value.email,
    phone_numberU: formData.value.phone_number
  };

  try {
    console.log('Données du formulaire:', formData.value);
    console.log('Payload envoyé:', payload);

    const response = await createService(payload);
    console.log('Réponse du serveur:', response.data);

    formSubmitted.value = true;
    setTimeout(() => {
      formSubmitted.value = false;
      formData.value = {
        name: '',
        description: '',
        category_id: '',
        address: '',
        phone_number: '',
        email: '',
        website: '',
        openings: {},
        price_range: '',
        facilities: [],
        policies: '',
        capacity: '',
        payment_methods: [],
        url: [],
        status: 'active',
        lastname: '',
        firstname: '',
        password: '',
        emailU: '',
        phone_numberU: ''
      };
      activeStep.value = 1;
    }, 3000);
  } catch (error) {
    console.error('Erreur complète:', error);
    console.error('Détails de l\'erreur:', error.response?.data);
    alert(`Erreur lors de l'envoi: ${error.response?.data?.message || error.message}`);
  }
};

</script>

<template>
  

  <div class="bg-white shadow rounded-lg">
    <div v-if="formSubmitted" class="p-8 text-center">

      <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
        <CheckIcon class="h-6 w-6 text-green-600" />
      </div>
      <h2 class="text-2xl font-semibold text-gray-900">Service enregistré avec succès!</h2>
      <p class="mt-2 text-gray-600">Votre service a été ajouté à notre base de données.</p>
    </div>
    <div v-else class="px-4 py-5 sm:p-6">
      <div class="mb-8">
        <AlertInfo v-if="isVisible" @close="closeAlert" type="danger" :message="infoAlert" />
        <Prog :steps="[t('baseInfos'), t('address'), t('contact'), t('operational'), t('additional')]" :currentStep="activeStep" />

      </div>
      <form @submit="handleSubmit">
        <BasicInfoSection v-if="activeStep === 0" :formData="formData" @updateFormData="updateFormData"
          :categoriesItems="hotelStore.allCategories || []" />
        <AdressSection v-if="activeStep === 1" :formData="formData" @updateFormData="updateFormData" />
        <ContactInfoSection v-if="activeStep === 2" :formData="formData" @updateFormData="updateFormData" />
        <OperationalInfoSection v-if="activeStep === 3" :formData="formData" @updateFormData="updateFormData" />
        <AdditionalInfoSection v-if="activeStep === 4" :formData="formData" @updateFormData="updateFormData" />

        <div class="mt-8 flex justify-between">
          <button type="button" @click="handlePrevious" :disabled="activeStep === 0"
            class="px-4 py-2 border rounded-md shadow-sm text-sm font-medium"
            :class="activeStep === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'">
            {{ $t('previous') }}
          </button>
          <button v-if="activeStep < 4" type="button" @click="handleNext"
            class="ml-3 px-4 py-2 border rounded-md shadow-sm text-sm font-medium text-white bg-customBlue hover:bg-blue-700">
            {{ $t('next') }}
          </button>
          <button v-else type="submit"
            class="ml-3 px-4 py-2 border rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
            {{ $t('saveService') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

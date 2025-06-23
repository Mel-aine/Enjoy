<script setup>
import { defineProps, defineEmits, ref, computed, watch } from 'vue';
import FormField from '@/components/serviceForm/field/FormField.vue';
import { validateFirstName, validateLastName, validateEmail, validatePhoneNumber } from '@/utils/functions';

// import {
// ArrowUpToLine
// } from 'lucide-vue-next';
// import { useI18n } from 'vue-i18n';
const props = defineProps({
  formData: Object,
  categoriesItems: Array
});
// const t = useI18n();
const emit = defineEmits(['updateFormData']);
const validName = ref(null)
console.log('props', props.categoriesItems)
// const categories = [
//     { id: 1, name: 'Restaurant' }, { id: 2, name: 'Hôtel' }, { id: 3, name: 'Spa' },
//     { id: 4, name: 'Salle de sport' }, { id: 5, name: 'Divertissement' },
//     { id: 6, name: 'Éducation' }, { id: 7, name: 'Santé' }, { id: 8, name: 'Transport' }, { id: 9, name: 'Autre' },
// ];

const handleChange = (e) => {
  // Create a new object with the uploaded field and include the uploaded URLs
  const updatedField = {
    [e.target.name]: e.target.value,
    establishmentType: establishmentType.value,
    establishmentName: establishmentName.value,
    image: image.value,
    logo: logo.value
  };
  emit('updateFormData', updatedField);
};

watch(() => props.formData.name, (newName) => {
  if (newName) {
    validName.value = validateFirstName(newName)
  }

});


const establishmentType = computed(() => {
  const category = props.categoriesItems.find(c => c.id === Number(props.formData.category_id));
  console.log('category', category)
  return category ? category.categoryName : '';
});

const establishmentName = computed(() => props.formData.name);
const image = ref([]);
const logo = ref([]);

// const uploadedUrls = ref([]);
// const uploading = ref(false);
// const uploaded = ref(false);


const previewUrlImage = ref('')
const previewUrlLogo = ref('')


const handleFilesImage = (event) => {
  const selectedImage = Array.from(event.target.files)

  if (selectedImage.length > 0) {

    image.value = selectedImage
    console.log('selectedFiles', selectedImage, image.value)

    // Crée une URL temporaire locale pour la prévisualisation
    previewUrlImage.value = URL.createObjectURL(selectedImage[0])
    // previewUrlImage.value = URL.createObjectURL(selectedFiles[1])
console.log('selectedFiles', selectedImage)
  }
  emit('updateFormData', {
    ...props.formData,
    image: selectedImage,
  });
}
const handleFilesLogo = (event) => {
  const selectedLogo = Array.from(event.target.files)

  if (selectedLogo.length > 0) {

    logo.value = selectedLogo
    console.log('selectedFiles', selectedLogo, logo.value)

    // Crée une URL temporaire locale pour la prévisualisation
    previewUrlLogo.value = URL.createObjectURL(selectedLogo[0])
    // previewUrlImage.value = URL.createObjectURL(selectedFiles[1])
console.log('selectedFiles', selectedLogo)
  }
  emit('updateFormData', {
    ...props.formData,
    logo: selectedLogo,
  });
}
console.log('establishmentName', establishmentName.value)
console.log('establishmentType', establishmentType.value)
// Fonction pour générer un slug à partir du nom
// const slugify = (text) =>
//   text
//     .toLowerCase()
//     .normalize('NFD')
//     .replace(/[\u0300-\u036f]/g, '') // enlever accents
//     .replace(/\s+/g, '-')            // espaces → tirets
//     .replace(/[^\w-]/g, '');         // enlever caractères spéciaux

// const test = () => {
//   console.log('test', files.value);
// }

// const uploadImages = async () => {
//   const cloudName = 'dylb6x7hj';
//   const uploadPreset = 'preset_hotels';
//   const type = establishmentType.value;
//   const nameSlug = slugify(establishmentName.value);
//   const folder = `${slugify(type)}s/${nameSlug}`;
//   uploadedUrls.value = [];
//   uploading.value = true;
//   for (const file of files.value) {
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', uploadPreset);
//     formData.append('folder', folder);

//     try {
//       const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await res.json();
//       console.log('Image uploadée:', data.secure_url);
//       uploadedUrls.value.push(data.secure_url);
//       uploaded.value = true;

//     } catch (err) {
//       console.error('Erreur dupload:', err);
//       uploaded.value = false;

//     }
//   }

//   uploading.value = false;

//   // Emit an update with the current form data and the new URLs
// emit('updateFormData', {
//   ...props.formData,
//   'test': 'test',
//   establishmentType: establishmentType.value,
//   establishmentName: establishmentName.value,
//   files: [...files.value] // clone du tableau pour éviter les effets de bord
// })
// }
</script>

<template>
  <div class=" border border-gray-200 bg-white p-4 rounded-lg">
    <h3 class="text-lg font-medium text-gray-900">{{ $t('baseInfo') }}</h3>
    <p class="text-sm text-gray-500">{{ $t('pleaseGiveInfo') }}</p>

    <div class="flex items-end gap-4 space-y-6">
      <FormField class="flex-1" :label="$t('nameOfService')" id="name" name="name" type="text" :value="formData.name"
        @input="handleChange" :placeholder="$t('exampleServiceName')" required />

      <div class="flex-1 ">
        <label for="category_id" class="block text-sm font-medium text-gray-700">{{ $t('category') }}<span
            class="text-red-500">*</span></label>
        <select id="category_id" name="category_id" class="form-select" :value="formData.category_id"
          @change="handleChange" required>
          <option value="">{{ $t('selectCategory') }}</option>
          <option v-for="category in props.categoriesItems" :key="category.id" :value="category.id">{{
            category.categoryName }}</option>
        </select>
      </div>
    </div>

    <div class="mt-4">
      <label for="description" class="block text-sm font-medium text-gray-700">{{ $t('description') }}</label>
      <textarea id="description" name="description" rows="4" class="form-textarea"
        :placeholder="$t('serviceDescriptionPlaceholder')" :value="formData.description" @input="handleChange"
        required></textarea>
      <p class="mt-1 text-sm text-gray-500">{{ $t('descriptionUtilBasicInfo') }}</p>
    </div>
  </div>
  <div class="space-y-6 mt-8 border border-gray-200 bg-white p-4 rounded-lg">
    <label class="block text-sm font-medium text-gray-700 mb-2">
      {{ $t('mainImage') }} <span class="text-red-500">*</span>
    </label>

    <div class="flex items-center justify-between gap-4 flex-wrap">
      <div class="flex items-center gap-4">
        <label for="file-uploadLogo"
          class="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded sm:text-sm">
          {{ $t('chooseLogo') }}
        </label>
        <span class="text-gray-600 text-sm">
          {{logo.length > 0 ? logo.map(l => l.name).join(', ')  : $t('noLogoSelected')}}
        </span>
      </div>

      <!-- Image preview -->
      <img v-if="previewUrlLogo" :src="previewUrlLogo" class="w-16 h-16 object-cover rounded-full shadow" alt="PreviewLogo" />
    </div>

    <input id="file-uploadLogo" type="file" accept="image/*" @change="handleFilesLogo" class="hidden" />

    <p class="text-sm text-gray-500">
      {{ $t('descriptionUtilBasicInfoLogo') }}
    </p>


    <div class="flex items-center justify-between gap-4 flex-wrap">
      <div class="flex items-center gap-4">
        <label for="file-uploadImage"
          class="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded sm:text-sm">
          {{ $t('chooseImage') }}
        </label>
        <span class="text-gray-600 text-sm">
          {{image.length > 0 ? image.map(i => i.name).join(', ')  : $t('noFileSelected')}}
        </span>
      </div>

      <!-- Image preview -->
      <img v-if="previewUrlImage" :src="previewUrlImage" class="w-24 h-24 object-cover rounded shadow" alt="PreviewImage" />
    </div>

    <input id="file-uploadImage" type="file" accept="image/*" @change="handleFilesImage" class="hidden" />

    <p class="text-sm text-gray-500">
      {{ $t('descriptionUtilBasicInfoImage') }}
    </p>
  </div>
  <!-- <button @click="test">test </button> -->
</template>

<style scoped>
input[type="file"]::file-selector-button {
  padding: 0.5rem 1rem;
  border: none;
  background: #8F3BCC;
  color: white;
  border-radius: 4px;
  margin-right: 1rem;
  cursor: pointer;
}

.form-select {
  @apply w-full px-2 py-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 sm:text-sm;
}

.form-textarea {
  @apply w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 sm:text-sm;
}
</style>

<script setup>
import { defineProps, defineEmits, ref, computed, watch } from 'vue';
import FormField from '@/components/serviceForm/field/FormField.vue';
import { validateFirstName, validateLastName, validateEmail, validatePhoneNumber } from '@/utils/functions';

;
const props = defineProps({
  formData: Object,
  categoriesItems: Array
});
// const t = useI18n();
const emit = defineEmits(['updateFormData']);
const validName = ref(null)
console.log('props', props.categoriesItems)


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

</script>

<template>
  <div class=" border border-gray-200 bg-white p-4 rounded-lg">
    <h3 class="text-lg font-medium text-gray-900">{{ $t('baseInfo') }}</h3>
    <p class="text-sm text-gray-500">{{ $t('pleaseGiveInfo') }}</p>

    <div class="flex items-end gap-4 space-y-6">
      <FormField class="flex-1" :label="$t('nameOfService')" id="name" name="name" type="text" v-model="formData.name"
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
          {{logo.length > 0 ? logo.map(l => l.name).join(', ') : $t('noLogoSelected')}}
        </span>
      </div>

      <!-- Image preview -->
      <img v-if="previewUrlLogo || formData.logo" :src="formData.logo??previewUrlLogo" class="w-16 h-16 object-cover rounded-full shadow"
        alt="PreviewLogo" />
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
          {{image.length > 0 ? image.map(i => i.name).join(', ') : $t('noFileSelected')}}
        </span>
      </div>

      <!-- Image preview -->
      <img v-if="previewUrlImage" :src="previewUrlImage" class="w-24 h-24 object-cover rounded shadow"
        alt="PreviewImage" />
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
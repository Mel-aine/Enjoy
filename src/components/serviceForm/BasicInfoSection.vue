<script setup>
import { defineProps, defineEmits, ref, computed } from 'vue';
import FormField from '@/components/serviceForm/field/FormField.vue';


const props = defineProps({
  formData: Object, categoriesItems: Array
});
const emit = defineEmits(['updateFormData']);
console.log('props', props.categoriesItems)
// const categories = [
//     { id: 1, name: 'Restaurant' }, { id: 2, name: 'Hôtel' }, { id: 3, name: 'Spa' },
//     { id: 4, name: 'Salle de sport' }, { id: 5, name: 'Divertissement' },
//     { id: 6, name: 'Éducation' }, { id: 7, name: 'Santé' }, { id: 8, name: 'Transport' }, { id: 9, name: 'Autre' },
// ];

const handleChange = (e) => {
  // Create a new object with the updated field and include the uploaded URLs
  const updatedData = {
    [e.target.name]: e.target.value,
    url: uploadedUrls.value
  };
  emit('updateFormData', updatedData);
};

const establishmentType = computed(() => {
  const category = props.categoriesItems.data.find(c => c.id === Number(props.formData.category_id));
  return category ? category.categoryName : '';
});

const establishmentName = computed(() => props.formData.name);
const files = ref([]);
const uploadedUrls = ref([]);
const uploading = ref(false);

const handleFiles = (event) => {
  files.value = Array.from(event.target.files);
};
console.log('establishmentName', establishmentName.value)
console.log('establishmentType', establishmentType.value)
// Fonction pour générer un slug à partir du nom
const slugify = (text) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // enlever accents
    .replace(/\s+/g, '-')            // espaces → tirets
    .replace(/[^\w-]/g, '');         // enlever caractères spéciaux

const uploadImages = async () => {
  const cloudName = 'dylb6x7hj';
  const uploadPreset = 'preset_hotels';

  const type = establishmentType.value;
  const nameSlug = slugify(establishmentName.value);
  const folder = `${slugify(type)}s/${nameSlug}`;
  uploadedUrls.value = [];
  uploading.value = true;

  for (const file of files.value) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    formData.append('folder', folder);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      console.log('Image uploadée:', data.secure_url);
      uploadedUrls.value.push(data.secure_url);
    } catch (err) {
      console.error('Erreur dupload:', err);
    }
  }

  uploading.value = false;

  // Emit an update with the current form data and the new URLs
  emit('updateFormData', {
    ...props.formData,
    url: uploadedUrls.value
  });
}
</script>

<template>
  <div class="space-y-6 border border-gray-200 bg-white p-4 rounded-lg">
    <h3 class="text-lg font-medium text-gray-900">Informations de base</h3>
    <p class="text-sm text-gray-500">Veuillez fournir les informations principales concernant votre service.</p>

    <div class="flex items-end gap-4">
      <FormField class="flex-1" label="Nom du service" id="name" name="name" type="text" :value="formData.name"
        @input="handleChange" placeholder="Ex: Restaurant Le Gourmet" required />

      <div class="flex-1">
        <label for="category_id" class="block text-sm font-medium text-gray-700">Catégorie <span
            class="text-red-500">*</span></label>
        <select id="category_id" name="category_id" class="form-select" :value="formData.category_id"
          @change="handleChange" required>
          <option value="">Sélectionnez une catégorie</option>
          <option v-for="category in props.categoriesItems.data" :key="category.id" :value="category.id">{{
            category.categoryName }}</option>
        </select>
      </div>
    </div>

    <div>
      <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
      <textarea id="description" name="description" rows="4" class="form-textarea"
        placeholder="Décrivez votre service en détail..." :value="formData.description" @input="handleChange"
        required></textarea>
      <p class="mt-1 text-sm text-gray-500">Une description détaillée aidera les utilisateurs à comprendre votre
        service.</p>
    </div>
  </div>
  <div class="space-y-6 mt-8 border border-gray-200 bg-white p-4 rounded-lg">

    <label for="file-upload" class="block text-sm font-medium text-gray-700 mb-2">
      Image principale du service
    </label>

    <div class="flex items-center gap-4">
      <label for="file-upload" class="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
        Choisir l'image
      </label>
      <span class="text-gray-600 text-sm">
        {{files.length > 0 ? files.map(f => f.name).join(', ') : "Aucun fichier sélectionné"}}
      </span>
    </div>

    <input id="file-upload" type="file" multiple accept="image/*" @change="handleFiles" class="hidden" />
    <button @click="uploadImages" :disabled="!establishmentName || files.length === 0 || uploading"
      class="bg-customBlue text-white px-4 py-2 rounded mt-2">
      {{ uploading ? "Upload en cours..." : "Uploader l'image" }}
    </button>
    <p class="text-sm text-gray-500">Image principale du service – elle sera visible par vos clients</p>
  </div>
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
  @apply mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md;
}

.form-textarea {
  @apply shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md;
}
</style>
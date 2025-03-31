<script setup>
import { defineProps, defineEmits } from 'vue';
import FormField from '@/components/serviceForm/field/FormField.vue';
import { Categories } from '@/mocks/categories';
const props = defineProps({ formData: Object });
const emit = defineEmits(['updateFormData']);

// const categories = [
//     { id: 1, name: 'Restaurant' }, { id: 2, name: 'Hôtel' }, { id: 3, name: 'Spa' },
//     { id: 4, name: 'Salle de sport' }, { id: 5, name: 'Divertissement' },
//     { id: 6, name: 'Éducation' }, { id: 7, name: 'Santé' }, { id: 8, name: 'Transport' }, { id: 9, name: 'Autre' },
// ];

const handleChange = (e) => emit('updateFormData', { [e.target.name]: e.target.value });
</script>

<template>
    <div class="space-y-6">
        <h3 class="text-lg font-medium text-gray-900">Informations de base</h3>
        <p class="text-sm text-gray-500">Veuillez fournir les informations principales concernant votre service.</p>

        <div class="flex items-end gap-4">
            <FormField class="flex-1" label="Nom du service" id="name" name="name" type="text" :value="formData.name" @input="handleChange" placeholder="Ex: Restaurant Le Gourmet" required />

            <div class="flex-1">
                <label for="category_id" class="block text-sm font-medium text-gray-700">Catégorie <span class="text-red-500">*</span></label>
                <select id="category_id" name="category_id" class="form-select" :value="formData.category_id" @change="handleChange" required>
                    <option value="">Sélectionnez une catégorie</option>
                    <option v-for="category in Categories" :key="category.id" :value="category.id">{{ category.label }}</option>
                </select>
            </div>
        </div>

        <div>
            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
            <textarea id="description" name="description" rows="4" class="form-textarea" placeholder="Décrivez votre service en détail..." :value="formData.description" @input="handleChange" required></textarea>
            <p class="mt-1 text-sm text-gray-500">Une description détaillée aidera les utilisateurs à comprendre votre service.</p>
        </div>
    </div>
</template>

<style scoped>
.form-select {
    @apply mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md;
}

.form-textarea {
    @apply shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md;
}
</style>

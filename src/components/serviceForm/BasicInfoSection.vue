<script setup>
import { defineProps, defineEmits } from 'vue';
import FormField from '@/components/serviceForm/field/FormField.vue';

const props = defineProps({
    formData: Object,
});
const emit = defineEmits(['updateFormData']);

const categories = [
    { id: 1, name: 'Restaurant' },
    { id: 2, name: 'Hôtel' },
    { id: 3, name: 'Spa' },
    { id: 4, name: 'Salle de sport' },
    { id: 5, name: 'Divertissement' },
    { id: 6, name: 'Éducation' },
    { id: 7, name: 'Santé' },
    { id: 8, name: 'Transport' },
    { id: 9, name: 'Autre' },
];

const handleChange = (event) => {
    const { name, value } = event.target;
    emit('updateFormData', { [name]: value });
};
</script>

<template>
    <div class="space-y-6">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Informations de base</h3>
        <p class="text-sm text-gray-500">Veuillez fournir les informations principales concernant votre service.</p>

        <div class="flex items-end gap-4">
            <div class="flex-1">
                <label for="category_id" class="block text-sm font-medium text-gray-700">Service <span class="text-red-500"> *</span></label>
                <select id="category_id" name="category_id"
                    class="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    :value="formData.category_id" @change="handleChange" required>
                    <option value="">Sélectionnez votre service</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">
                        {{ category.name }}
                    </option>
                </select>
            </div>

            <FormField class="flex-1" label="Nom du service" id="name" name="name" type="text" :value="formData.name"
                @input="handleChange" placeholder="Ex: Restaurant Le Gourmet" required />
        </div>

        <div>
            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
            <textarea id="description" name="description" rows="4"
                class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Décrivez votre service en détail..." :value="formData.description" @input="handleChange"
                required />
            <p class="mt-1 text-sm text-gray-500">Une description détaillée aidera les utilisateurs à comprendre votre
                service.</p>
        </div>

        <div>
            <label for="category_id" class="block text-sm font-medium text-gray-700">Catégorie</label>
            <select id="category_id" name="category_id"
                class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                :value="formData.category_id" @change="handleChange" required>
                <option value="">Sélectionnez une catégorie</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}
                </option>
            </select>
        </div>

        <div>
            <label for="status" class="block text-sm font-medium text-gray-700">Statut</label>
            <select id="status" name="status"
                class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                :value="formData.status" @change="handleChange">
                <option value="active">Actif</option>
                <option value="inactive">Inactif</option>
                <option value="suspended">Suspendu</option>
            </select>
        </div>
    </div>
</template>

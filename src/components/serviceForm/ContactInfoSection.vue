<script setup>
import { defineProps, defineEmits } from 'vue';
import { Phone, AtSign, Globe, MapPin } from 'lucide-vue-next';

const props = defineProps({
    formData: Object
});
const emit = defineEmits(['updateFormData']);

const handleChange = (event) => {
    emit('updateFormData', { [event.target.name]: event.target.value });
};
</script>

<template>
    <div class="space-y-6">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Informations de contact</h3>
        <p class="text-sm text-gray-500">Comment les clients peuvent-ils vous contacter et vous trouver?</p>

        <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-6">
                <div class="flex items-center">
                    <MapPin class="h-5 w-5 text-gray-400 mr-2" />
                    <label for="address" class="block text-sm font-medium text-gray-700">Adresse</label>
                </div>
                <input type="text" name="address" id="address"
                    class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 bg-gray-100 cursor-not-allowed"
                    placeholder="123 rue de ville, 75001 ville" :value="formData.address" readonly required />

            </div>

            <div class="sm:col-span-3">
                <div class="flex items-center">
                    <Phone class="h-5 w-5 text-gray-400 mr-2" />
                    <label for="phone_number" class="block text-sm font-medium text-gray-700">Numéro de
                        téléphone</label>
                </div>
                <input type="tel" name="phone_number" id="phone_number"
                    class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="+237 640 23 45 67 89" :value="formData.phone_number" @input="handleChange" required />
            </div>

            <div class="sm:col-span-3">
                <div class="flex items-center">
                    <AtSign class="h-5 w-5 text-gray-400 mr-2" />
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                </div>
                <input type="email" name="email" id="email"
                    class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="contact@example.com" :value="formData.email" @input="handleChange" required />
            </div>

            <div class="sm:col-span-6">
                <div class="flex items-center">
                    <Globe class="h-5 w-5 text-gray-400 mr-2" />
                    <label for="website" class="block text-sm font-medium text-gray-700">Site web</label>
                </div>
                <input type="url" name="website" id="website"
                    class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="https://www.example.com" :value="formData.website" @input="handleChange" />
                <p class="mt-1 text-sm text-gray-500">Optionnel</p>
            </div>
        </div>
    </div>
</template>

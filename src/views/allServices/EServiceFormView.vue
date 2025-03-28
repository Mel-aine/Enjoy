<template>
    <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-gray-900">
            Enregistrement d'un Service
          </h1>
          <p class="mt-2 text-lg text-gray-600">
            Complétez le formulaire ci-dessous pour ajouter un nouveau service
          </p>
        </div>
        <ServiceForm />
      </div>
    </div>
  </template>
  
  <script setup>
  import ServiceForm from '@/components/serviceForm/ServiceForm.vue'
  </script>
  
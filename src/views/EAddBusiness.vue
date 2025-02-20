<template>
<div class="flex items-center justify-center min-h-screen py-10 px-4">
  <div class="bg-white w-full max-w-md sm:max-w-lg md:max-w-3xl p-6 md:p-8 shadow-2xl rounded-2xl">
    <h2 class="text-xl font-semibold text-gray-950 text-center mb-6">{{ $t('form') }}</h2>
    <div class="space-y-4">
      <FloatingInput :lb="$t('adresse_1')" />
      <FloatingInput :lb="$t('adresse_2')" />
      <div class="flex flex-col md:flex-row gap-4">
        <FloatingInput class="w-full" :lb="$t('ville')" />
        <FloatingInput class="w-full" :lb="$t('code')" />
      </div>
      <FloatingInput :lb="$t('telephone')" />
      <FloatingInput :lb="$t('adresse_web')" />

      <div>
        <span class="block text-sm text-customBlue mb-1">{{ $t('horaires') }}</span>
        <div class="flex flex-col md:flex-row gap-4 w-full pb-2">
          <FloatingSelect :options="Jours" class="w-full md:w-[500px]" />
          <FloatingSelect :options="HDebut" class="w-full md:w-[500px]" />
          <FloatingSelect :options="HFin" class="w-full md:w-[500px]" />
          <!-- <button class="bg-customRed text-white px-4 py-2 rounded-lg hover:bg-customBlue">Ajouter</button> -->
          <Button variant="danger" class="py-2"> {{ $t('ajouter') }}</Button>
        </div>
      </div>

      <FloatingInput :lb="$t('category')" />
      <FloatingInput :lb="$t('adress_email')" />
        <Button variant="danger" class="py-2.5"> {{ $t('ajouter_commerce') }}</Button>
      <!-- <button class="w-full sm:w-1/4 bg-customRed text-white py-3 rounded-lg text-lg font-medium hover:bg-customBlue transition">Ajouter Commerce</button> -->
    </div>
  </div>
</div>


</template>
<script setup>
import FloatingInput from "@/components/input/FloatingInput.vue"
import FloatingSelect from "@/components/input/FloatingSelect.vue"
import Button from "@/components/buttons/Button.vue"
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const Jours = [
  {value: 'monday', label: t('monday')},
  {value: 'tuesday', label: t('tuesday')},
  {value: 'wednesday', label: t('wednesday')},
  {value: 'thursday', label: t('thursday')},
  {value: 'friday', label: t('friday')},
  {value: 'saturday', label: t('saturday')},
  {value: 'sunday', label: t('sunday')},
]

const HDebut = Array.from({length: 24}, (_, i) => ({ value: i + 1, label: `${i + 1}h` })).reverse()

const HFin = Array.from({length: 24}, (_, i) => ({ value: i + 1, label: `${i + 1}h` }))

</script>

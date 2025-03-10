<template>
<div class="flex items-center justify-center min-h-screen py-10 px-4">
  <div class="bg-white w-full max-w-md sm:max-w-lg md:max-w-3xl p-6 md:p-8 shadow-2xl rounded-2xl">
    <h2 class="text-3xl font-semibold text-customBlue text-center mb-6">{{ $t('form') }}</h2>
      <div class="space-y-4">
        <FloatingInput :lb="$t('adresse_1')" :isRequired="true" v-model="Info.address1" />
        <FloatingInput :lb="$t('adresse_2')" v-model="Info.address2"/>
        <div class="flex flex-col md:flex-row gap-4">
          <FloatingInput class="w-full" :lb="$t('ville')" v-model="Info.city" />
          <FloatingInput class="w-full" :lb="$t('code')" v-model="Info.code" />
        </div>
        <FloatingInput :inputType="phone" :lb="$t('telephone')" v-model="Info.phone"/>
        <FloatingInput :inputType="email" :lb="$t('adresse_web')" v-model="Info.web_address"/>

        <div>
          <span class="block text-sm text-gray-950 font-semibold mb-1">{{ $t('horaires') }}</span>
          <div v-for="time in Info.schedules" :key="time" class="space-x-2">
            <span class="text-sm text-customBlue font-semibold">{{ time.jours }}</span>
            <span class="text-sm text-gray-950 font-semibold">{{ time.hdebut }} - {{ time.hfin }}</span>
            <button class=" text-customRed  hover:underline" @click="removeSchedule(time)">{{ $t('supprimer') }}</button>

          </div>
          <div class="flex flex-col md:flex-row gap-4 w-full justify-center items-center pb-2">
            <FloatingSelect :options="Jours" class="w-full md:w-[500px]" v-model="schedules.jours"/>
            <!-- <FloatingSelect :options="HDebut" class="w-full md:w-[500px]" v-model="schedules.hdebut" />
            <FloatingSelect :options="HFin" class="w-full md:w-[500px]" v-model="schedules.hfin"/> -->

            <FloatingInput :inputType="'time'" class="-translate-y-0.5"  v-model="schedules.hdebut"/>
            <FloatingInput :inputType="'time'" class="-translate-y-0.5" v-model="schedules.hfin"/>

            <!-- <button class="bg-customRed text-white px-4 py-2 rounded-lg hover:bg-customBlue">Ajouter</button> -->
            <Button @click ="addSchedule" variant="danger" class="py-2"> {{ $t('ajouter') }}</Button>
          </div>
        </div>



        <FloatingInput :lb="$t('category')" v-model="Info.category"/>
        <FloatingInput :inputType="email" :lb="$t('adress_email')" v-model="Info.email"/>
          <Button @click="addBusiness" variant="danger" class="py-2.5"> {{ $t('ajouter_commerce') }}</Button>

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
import {ref,computed} from "vue"

const { t } = useI18n();
const Jours = computed(()=>[
  {value: 'monday', label: t('monday')},
  {value: 'tuesday', label: t('tuesday')},
  {value: 'wednesday', label: t('wednesday')},
  {value: 'thursday', label: t('thursday')},
  {value: 'friday', label: t('friday')},
  {value: 'saturday', label: t('saturday')},
  {value: 'sunday', label: t('sunday')},
])

// const HDebut = Array.from({length: 24}, (_, i) => ({ value: i + 1, label: `${i + 1}h` })).reverse()

// const HFin = Array.from({length: 24}, (_, i) => ({ value: i + 1, label: `${i + 1}h` }))
const Business = ref([])
const schedules = ref({
  jours : '',
  hdebut : '',
  hfin : '',
})

const Info = ref({
  address1 : '',
  address2 : '',
  city : '',
  phone : '',
  web_address : '',
  category : '',
  email :'',
  code : '',
  schedules : [],
})

const addSchedule = () =>{
  Info.value.schedules.push(schedules.value)
  schedules.value = ({
  jours : '',
  hdebut : '',
  hfin : '',
})
  console.log(Info.value.schedules);
}
const addBusiness = () =>{
  Business.value.push(Info.value)
  Info.value = ({
  address1 : '',
  address2 : '',
  city : '',
  phone : '',
  web_address : '',
  category : '',
  email :'',
  code : '',
  schedules : [],
})
  console.log("00000",Business.value)
}

const removeSchedule = (schedule) => {
  Info.value.schedules = Info.value.schedules.filter(item => item!== schedule)
}
</script>

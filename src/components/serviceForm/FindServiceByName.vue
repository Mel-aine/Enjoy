<script setup>
import { ref } from 'vue';
import Button from '../buttons/Button.vue';
import AutoCompleteService from '../input/AutoCompleteService.vue';
import ServiceCardMin from '../card/ServiceCardMin.vue';
const emits = defineEmits([]);
const service = ref(null);
const chooseService = (s) => {
    service.value = s;
}
const startService =()=>{
    emits('start',service.value)
}
</script>

<template>
    <div class="flex flex-row items-center gap-5">
        <div class="w-7/12">
            <div>
                <h1 class="font-bold text-xl mb-4">{{ $t('search_heading') }}</h1>
                <span>{{ $t('search_description') }}</span>
            </div>
            <AutoCompleteService @selected="chooseService" />
        </div>
        <div v-if="service" class="w-5/12">
            <ServiceCardMin :service="service"></ServiceCardMin>
        </div>

    </div>
    <div class=" flex justify-center mt-10">
        <Button size="sm" :disabled="!service" type="button" @click="startService">{{ $t('start') }}</Button>
    </div>
</template>


<style></style>
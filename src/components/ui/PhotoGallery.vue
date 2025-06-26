<template>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 rounded overflow-hidden">
        <div v-for="(photo, index) in displayedPhotos" :key="index" class="relative">
            <img :src="photo" :alt="`Photo ${index + 1}`" class="object-cover w-full h-32 rounded-md" />
            <div v-if="index === displayedPhotos.length - 1 && hasMorePhotos"
                class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
                <span class="text-white font-bold text-lg">+{{ remainingCount }} autres photos</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props  = defineProps({
    images:{
        type:Array,
    }
})

const displayedPhotos = computed(()=>{
    if(!props.images || props.images?.length <5){
        return (props.images??[]).reverse()
    }
    else
    props.images.slice(0, 5);
})
const remainingCount = props.images?.length - displayedPhotos.value.length;
const hasMorePhotos = remainingCount > 0;
</script>

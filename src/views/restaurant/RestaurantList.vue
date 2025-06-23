<template>

    <div class="mt-7 lg:translate-x-8 translate-x-0 space-y-4">
        <div v-for="item in props.services" :key="item.id">

            <ServiceCard :service="item" />

        </div>
    </div>
</template>
<script setup>
import ServiceCard from '@/components/card/ServiceCard.vue'

const props = defineProps({
    services:{
        type:Array,
        required:true,
        default:[]
    }
})

</script>
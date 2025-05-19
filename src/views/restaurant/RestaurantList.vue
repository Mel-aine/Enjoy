<template>

    <div class="mt-7 lg:translate-x-8 translate-x-0 space-y-4">
        <div v-for="item in props.filters" :key="item.id">

            <ServiceCard :title="item.name" :description="item.description" :rating="item.rating"
                :localisation="item.address" :hours="item.open_until" :category="item.category" :image="item.images"
                :search="item.route" />

        </div>
    </div>
</template>
<script setup>
import ServiceCard from '@/components/card/ServiceCard.vue'

const props = defineProps({
    // searchParams: Object,
    filters: [],
    // sortOption: { type: String, default: 'recommended' }
})

</script>
<template>
<div class="h-screen flex">
    <div class="flex w-full h-full">
        <!-- category -->
        <div class="w-1/7 min-w-[200px] bg-orange-800 text-white p-6 ">
            <Filter/>
        </div>

        <!-- Menu -->
        <div class="flex-1 flex flex-col bg-slate-50 overflow-auto p-6">
            <h1 class="text-2xl font-semibold text-gray-800">Menu</h1>
        </div>

        <!-- carte -->
        <div class="w-[550px] min-w-[250px] bg-blue-800 text-white p-6 flex items-center justify-center">
            <h1 class="text-xl font-bold">carte</h1>
        </div>
    </div>
</div>
</template>

<script setup>
import Filter from './Filter.vue'
</script>

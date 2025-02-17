<template>
  <div class="p-5">
    <div class="flex-1 flex flex-col overflow-auto ">
          <div class="border-b-2 border-gray-800 pb-5">
            <h1 class="text-gray-950 text-lg font-medium">Filtres</h1>
            <h2 class="text-gray-950 text-md mt-2">Price</h2>
            <div class="border rounded-full h-6 border-gray-800 flex items-center justify-between px-3 w-full max-w-xs mt-2">
              <span class="text-gray-800 px-2">$</span>
              <span class="text-gray-800 border-l px-2 border-gray-800">$$</span>
              <span class="text-gray-800 border-x px-2 border-gray-800">$$$</span>
              <span class="text-gray-800 px-2">$$$$</span>
            </div>
          </div>
    </div>
    <!-- Other components -->

    <div class="flex-1 flex flex-col ">
      <h1 class="text-gray-950 text-lg font-medium py-2">Suggested</h1>
      <div >
        <div class="border-b-2 border-gray-800 pb-5">
          <div class="flex items-center" v-for="item in Suggested" :key="item.id">
            <input  id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ item }}</label>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>
<script setup>
import {ref} from'vue';

const Suggested = ref(['Open Now', 'Offers Delivery','Offers Takeout','Good for Dinner','Outdor Seating','Good for Lunch'])

</script>

<script setup>
import SimpleCard from "./SimpleCard.vue";
import DishCard from "./DishCard.vue";



</script>

<template>
    <div>

      <div class=" px-2 sm:px-4 py-2 sm:py-4 flex justify-start mb-5 pb-4 overflow-x-auto overflow-y-hidden custom-scrollbar">
        <simple-card  name="All"  />
        <!-- <template >
          <template >
            <simple-card  />
          </template>
        </template> -->
      </div>

      <div class="flex items-center flex-wrap justify-start">

           <DishCard />


      </div>
    </div>
</template>

<style scoped>
 .custom-scrollbar {
    overflow: auto;
  }

  .custom-scrollbar::-webkit-scrollbar {
    height: 8px;  /* scrollbar height*/
    background-color: transparent;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #4CAF50;
    border-radius: 10px;
  }
  </style>

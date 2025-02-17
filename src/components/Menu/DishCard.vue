<script setup >
defineProps({
  name: String,
  description: String
})



</script>
<template>

    <div class="relative text-sm rounded-lg mx-auto overflow-hidden shadow-md h-59 w-39 lg:h-60 lg:min-w-50 p-2 m-2 mb-6 select-none bg-white  hover:bg-orange-50">
        <!-- <button  class="absolute top-5 left-0 bg-green-500 rounded-tr-md rounded-br-md transition-opacity">
            <i class="pi pi-eye text-white px-2"></i>
        </button> -->
        <div >
            <img class="mb-1 w-full h-30 object-cover aspect-square rounded-lg" />
        </div>
        <div class="grid grid-rows-3  ">
            <h3 class="font-medium mb-1 uppercase truncate"> {{ name }} </h3>
            <div class="flex justify-between ">
                <div class="text-sm font-semibold mb-1  text-customBlueVariant">$1</div>
                <!-- <div class="text-sm font-semibold mb-1  text-green-500">bb</div> -->
            </div>
            <div class="text-sm font-semibold mb-1  text-green-500">{{ description }}</div>
            <div>
                <button class="w-full bg-olive hover:bg-customBlueVariant text-black font-medium h-8 rounded  " >
                    Add Dish
                </button>
            </div>
            <!-- <div >
                <div class="flex items-center justify-between bg-slate-200 h-8 rounded-2xl px-1 ">
                    <button class="h-6 w-6 rounded-full bg-green-500 text-white hover:bg-green-600 focus:outline-none" >
                        -
                    </button>
                    <span class="mr-2"> quantity </span>
                    <button class="h-6 w-6 rounded-full bg-green-500 text-white hover:bg-green-600 focus:outline-none" >
                        +
                    </button>
                </div>
            </div> -->
        </div>

    </div>
</template>

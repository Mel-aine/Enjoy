<script setup >

    defineProps({
    isOpen: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: "Menu Item",
    },
    image: {
      type: String,

    },
    description: {
      type: String,
      default: "No description provided.",
    },
    ingredients: {
      type: Array,
      default: () => [],
    },
    quantity: {
      type: Number,
      default: 0,
    },
  });

const emit = defineEmits(["close", "add-to-cart","decrement","increment"]);


const closeModal = () => {
  emit("close");
};


const onAddToCart = () => {
  emit("add-to-cart");
};


const decrement = () => {
  emit("decrement");
};

const increment = () => {
  emit("increment");
};

</script>


<template>
<div>
      <div v-if="isOpen" id="menu-modal" tabindex="-1" class="fixed inset-0 z-99999 flex  items-center justify-center p-4 overflow-x-hidden overflow-y-auto bg-black bg-opacity-50">
        <div class="rounded-lg overflow-hidden flex flex-col justify-between bg-white shadow-lg relative w-full max-w-xl  dark:bg-slate-800" style="height: 80vh;">
            <!-- Modal body -->
            <div class="overflow-y-auto custom-scrollbar">
                <!-- Image -->
                <img :src="image" :alt="title" class="w-full h-48 object-cover shadow-md" />

                <div class="p-4">
                  <div><span class="text-black font-bold">Title : </span><span class="uppercase italic font-bold">{{ title }}</span></div>

                  <!-- Description -->
                  <p class="text-black dark:text-slate-400 text-justify leading-relaxed my-1.5">
                    <span class="text-black font-bold">Description : </span><span class="italic">{{ description }}</span>
                  </p>

                  <!-- Ingredients  -->
                  <div class="space-y-2">
                    <h4 class="sm:text-lg text-black font-semibold dark:text-white">
                      Ingredients :
                    </h4>
                    <ul>
                        <li v-for="ingredient in ingredients" :key="ingredient" class="flex items-center">
                            <svg class="w-3.5 h-3.5 me-2 text-orange-500 dark:text-orange-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            {{ ingredient }}
                        </li>
                    </ul>
                  </div>
                </div>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center justify-end p-2 border-t border-slate-100 dark:border-slate-700">
              <button @click="closeModal" type="button" class="text-slate-900 bg-white border border-slate-300 focus:outline-none hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 font-medium rounded-lg text-base dark:bg-slate-800 dark:text-white dark:border-slate-600 dark:hover:bg-slate-700 dark:hover:border-slate-600 dark:focus:ring-slate-700 px-5 py-2 text-center me-2 ">
                Close
              </button>



              <div v-if="quantity <= 0 || restaurantStore.currentOrder == null">
                <button @click="onAddToCart" type="button" class="ml-2 text-white bg-orange-500 hover:bg-white hover:text-orange-500 border hover:border-orange-500 rounded-lg px-5 py-2 text-base font-medium">
                    Add to Cart
                </button>
              </div>
              <div v-else class="w-30  ">
                  <div class="flex items-center   justify-between bg-slate-200 h-8 rounded-2xl px-1 ">
                      <button class="h-6 w-6 rounded-full bg-purple-500 text-white hover:bg-purple-600 focus:outline-none" @click="decrement" :disabled="quantity <= 0">
                          -
                      </button>
                      <span class="mr-2">{{ quantity }}</span>
                      <button class="h-6 w-6 rounded-full bg-purple-500 text-white hover:bg-purple-600 focus:outline-none" @click="increment">
                          +
                      </button>
                  </div>
              </div>
            </div>
        </div>
      </div>
</div>

</template>

<style scoped>

  .custom-scrollbar {
    overflow: auto;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;  /* scrollbar height*/
    background-color: transparent;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: orangered;
    border-radius: 10px;
  }
</style>


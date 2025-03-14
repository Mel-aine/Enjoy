<template>
   <div class="flex h-screen overflow-y-hidden bg-slate-50">
      <!-- ===== Content Area Start ===== -->
      <div class="flex flex-col gap-4 w-full px-4 md:px-6 2xl:px-11 mt-4">
      <!-- Search bar -->
       <div class="flex justify-between ">
      <div class="flex items-center p-4 rounded-lg bg-white shadow-lg h-14 w-3/5 sm:w-4/5 md:w-9/12 lg:w-full mb-8">
        <form action="https://formbold.com/s/unique_form_id" method="POST">
          <div class="relative">
            <button class="absolute top-1/2 left-0 -translate-y-1/2">
              <svg class="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary" width="20"
                height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                  fill="" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                  fill="" />
              </svg>
            </button>

            <input type="text" placeholder="Type to search..."
              class="w-full xl:w-125 bg-transparent pr-4 pl-9 focus:outline-none" />
          </div>
        </form>
      </div>
      <button
          class="z-99999 block rounded-sm border border-stroke h-10 bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          @click="isSidebarOpen = !isSidebarOpen">

          <span class="relative flex items-center justify-center p-1 cursor-pointer text-gray-700 dark:text-gray-200">
              <!-- Icône du panier -->
              <svg  xmlns="http://www.w3.org/2000/svg"  class="w-6 h-6"  fill="none"  viewBox="0 0 24 24"  stroke="currentColor"  stroke-width="2" >
                 <path  stroke-linecap="round"  stroke-linejoin="round"  d="M3 3h2l.344 2.894M7 13h10l4-8H5.344M7 13l-4-8m4 8a4 4 0 100 8 4 4 0 100-8zm10 0a4 4 0 100 8 4 4 0 100-8z"  />
              </svg>
                  <span class="ml-1 text-md font-semibold text-orange-500">
                    0
                  </span>
          </span>


      </button>
      </div>

      <!-- Category Card -->
      <div class="flex flex-col justify-around h-20 min-w-22 w-28 p-5 rounded-lg shadow-lg drop-shadow-lg cursor-pointer select-none transition-transform transform hover:scale-105">
        <div class="text-black font-semibold text-sm">
          <div class="text-slate-500 truncate text-xs">Items</div>
          <h1 class="text-sm font-sans md:font-serif">Categorie</h1>
        </div>
      </div>
      <!-- Menu Cards -->
        <div class="max-h-screen overflow-y-scroll scrollbar-hide p-1 pb-8 mx-auto">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 mx-auto items-center">
            <div v-for="(item, index) in menuItems" :key="index"
                class="relative flex flex-col bg-white shadow-lg h-64 w-[170px] sm:w-full lg:h-72 lg:min-w-50 p-2 m-2 mb-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex-shrink-0">
              <div class="relative overflow-hidden">
                <button @click="isModalOpen=true"  class="absolute top-5 left-0 bg-purple-500 rounded-tr-md rounded-br-md transition-opacity">
                  <svg class="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>

                </button>
                <div class="flex transition-transform duration-500 ease-in-out">
                  <div  class=" w-full flex-shrink-0 rounded-lg">
                    <img :src="item.images" alt="Dish" class="w-full h-48 object-cover rounded-lg">
                  </div>
                </div>
              </div>
              <!-- Content -->
              <div class="grid grid-rows-3">
                <h3 class="text-xl font-bold text-gray-900 truncate mb-1">{{ item.name }}</h3>
                <p class="text-gray-600 text-md truncate">{{ item.description }}</p>
                <div class="flex justify-between items-center">
                  <span class="text-md font-semibold text-purple-600 mb-1">{{ item.price }} FCFA</span>
                </div>
              </div>
              <div v-if="quantities[index] <= 0" class="flex justify-center items-center mb-2">
                <button @click="incrementQuantity(index)" class="w-full   h-8 text-sm font-medium text-white bg-orange-500 rounded-lg">
                  {{$t('addToCard')}}
                </button>
              </div>
              <div v-else>
                <div class="flex items-center justify-between bg-slate-200 h-8 rounded-2xl px-1 ">
                    <button class="h-6 w-6 rounded-full bg-purple-500 text-white hover:bg-purple-600 focus:outline-none" @click="decrementQuantity(index)" :disabled="quantities[index] <= 0">
                        -
                    </button>
                    <span class="mr-2">{{ quantities[index] }}</span>
                    <button class="h-6 w-6 rounded-full bg-purple-500 text-white hover:bg-purple-600 focus:outline-none" @click="incrementQuantity(index)" :disabled="quantities[index] >= 4">
                        +
                    </button>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <aside class="fixed h-screen right-0 top-0 z-9999 flex w-75 md:w-2/5 lg:w-1/2  flex-col overflow-y-hidden shadow-2xl duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 bg-white"
      :class="{
      'translate-x-0': isSidebarOpen,
      'translate-x-full': !isSidebarOpen
    }"
      ref="target">
        <div  class="flex items-center logo-wrapper gap-2 px-6 pt-3">
          <button  class="block lg:hidden" @click="isSidebarOpen = !isSidebarOpen">
            <svg class="fill-current svg-fleche" width="20" height="18" viewBox="0 0 20 18" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z" fill="" />
            </svg>
          </button>  

          <span class="text-lg font-semibold">nom du restaurant</span>

          <router-link to="/">
            <img src="" alt="Logo" class="h-15" />
          </router-link>
        </div>

    <!-- Sidebare content -->
        <div class="grow flex flex-col duration-300 ease-linear shadow-inner m-4 rounded-lg overflow-y-scroll custom-scrollbar">
          <nav class="grow flex flex-col justify-between px-4 pt-4 lg:px-6">
            <div>
              <!-- <Order card /> -->
              <div v-for="(item, index) in MenuSelect" :key="index" class="flex h-24 md:h-23 rounded-lg drop-shadow-md border-2 border-slate-300 p-1 sm:p-2 my-2 text-sm  ">
                 <img :src="item.images" class="h-full object-cover aspect-square rounded-lg pr-1 " />
                  <div class="flex flex-col font-semibold justify-between w-full ">
                      <div class="text-black flex justify-tart h-full items-center truncate  ">
                          <span class=" w-full">{{ item.name }}</span>

                      </div>
                      <div class="flex justify-start h-full my-1  items-center">
                      <span class="text-greenlight ">{{ item.price }} FCFA</span>
                      </div>
                      <div class="flex justify-between mt-1 h-full items-center">

                          <span class="text-greenlight w-full  mx-auto ">
                              <div class="flex items-center  justify-between bg-slate-200 h-7 rounded-2xl w-full px-1">
                                  <button class="h-6 w-6 rounded-full bg-purple-500 text-white hover:bg-purple-600 focus:outline-none" @click="decrementQuantity2(index)" :disabled="quantities[index]<= 0">
                                      -
                                  </button>
                                  <span>{{ quantities[index] }}</span>
                                  <button class="h-6 w-6 rounded-full bg-purple-500 text-white hover:bg-purple-600 focus:outline-none" @click="incrementQuantity(index)"  :disabled="quantities[index] >= 4"  >
                                      +
                                  </button>
                              </div>
                          </span>
                      </div>
                  </div>
              </div>
            </div>
            <div>
              <div class="bg-slate-100 p-4 rounded-lg shadow-md">
                <div class="flex justify-between mb-2">
                  <span class="text-gray-600">{{ $t('totalDish') }}</span>
                  <span class="font-medium"></span>
                </div>
                <div class="border-t border-dashed border-slate-400"></div>
                <div class="flex justify-between mt-4">
                  <span class="font-bold">{{ $t('totalAmount') }}</span>
                  <span class="font-bold">FCFA</span>
                </div>
              </div>
              <button class="px-6 py-3 my-4 w-full rounded-lg font-medium text-white focus:outline-none bg-orange-500 hover:bg-orange-600">{{$t('placeOrder')}}</button>
            </div>
          </nav>
        </div>
      </aside>
   </div>
   <Modal :isOpen="isModalOpen" @close="isModalOpen = false"/>

</template>
<script setup>
import { ref } from 'vue';
import inside1 from '@/assets/burger2.jpg';
import Modal from '@/components/modals/Modal.vue';
const isModalOpen = ref(false)
const isSidebarOpen = ref(false)

const menuItems = ref([
  {
    name: 'Pizza Margherita',
    description: 'Tomate, mozzarella, basilic frais',
    price: 12.99,
    images: inside1,
    isVegan: false,
  },
  {
    name: 'Pâtes Carbonara',
    description: 'Pâtes fraîches, crème, lardons, parmesan',
    price: 14.50,
    images: inside1,
    isVegan: true,
  },
  {
    name: 'Salade César',
    description: 'Salade, poulet grillé, parmesan, croûtons',
    price: 10.99,
    images: inside1,
    isVegan: false,
  },
  {
    name: 'Risotto aux Champignons',
    description: 'Riz crémeux, champignons, parmesan',
    price: 13.99,
    images: inside1,
    isVegan: true,
  },
  {
    name: 'Pizza Margherita',
    description: 'Tomate, mozzarella, basilic frais',
    price: 12.99,
    images: inside1,
    isVegan: false,
  },
  {
    name: 'Pizza Margherita',
    description: 'Tomate, mozzarella, basilic frais',
    price: 12.99,
    images: inside1,
    isVegan: false,
  },
]);
const quantities = ref(menuItems.value.map(() => 0));
const MenuSelect = ref([])

const incrementQuantity = (index) => {
  if (quantities.value[index] < 4) {
    quantities.value[index]++;
  }
  MenuSelect.value = menuItems.value
    .map((item, i) => (quantities.value[i] > 0 ? { ...item, quantity: quantities.value[i] } : null))
    .filter((item) => item !== null);

  console.log("MenuSelect.value", MenuSelect.value);
};

const decrementQuantity = (index) => {
  if (quantities.value[index] > 0) {
    quantities.value[index]--;
  }
};
const decrementQuantity2 = (index) => {
  if (quantities.value[index] > 0) {
    quantities.value[index]--;
  }
  if (quantities.value[index] === 0) {
    MenuSelect.value = MenuSelect.value.filter((item) => item.name !== menuItems.value[index].name);
  } else {
    const itemIndex = MenuSelect.value.findIndex((item) => item.name === menuItems.value[index].name);
    if (itemIndex !== -1) {
      MenuSelect.value[itemIndex].quantity = quantities.value[index];
    }
  }

  console.log("MenuSelect.value2", MenuSelect.value);

};



</script>

<style scoped>
  .logo-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .svg-fleche {
    transform: scaleX(-1);
  }

  .shadow-top {
    box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .custom-scrollbar {
    overflow: auto;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;  /* scrollbar height*/
    background-color: transparent;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color:orangered;
    border-radius: 10px;
  }
</style>


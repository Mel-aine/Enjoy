<script setup >

</script>

<template>
  <header class="sticky top-0 z-999 flex flex-col w-full bg-transparent">
    <div class="flex flex-grow items-center justify-between py-4 px-4 md:px-6 2xl:px-11">
      <!-- search bar -->
      <div class="flex items-center p-2 rounded-lg bg-white shadow-lg h-14 w-3/5 sm:w-4/5 md:w-9/12 lg:w-full">
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

            <input  type="text" placeholder="Type to search..."
              class="w-full xl:w-125 bg-transparent pr-4 pl-9 focus:outline-none"  />
          </div>
        </form>
      </div>
      <!-- search bar -->


      <!-- Mobile menu start -->
      <div class="flex items-center justify-end gap-2 sm:gap-4 lg:hidden">
        <router-link class="block flex-shrink-0 lg:hidden" to="/">
          <img src="@/assets/images/safari-night-club-logo.jpg" alt="Logo" class="h-5 rounded-full"/>
        </router-link>
        &nbsp;&nbsp;
        <!-- Hamburger Toggle BTN -->
        <button
          class="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          @click="() => {
            toggleSidebar()
          }">

          <span class="relative flex items-center justify-center p-1 cursor-pointer text-gray-700 dark:text-gray-200">
              <!-- Icône du panier -->
              <svg  xmlns="http://www.w3.org/2000/svg"  class="w-6 h-6"  fill="none"  viewBox="0 0 24 24"  stroke="currentColor"  stroke-width="2" >
                 <path  stroke-linecap="round"  stroke-linejoin="round"  d="M3 3h2l.344 2.894M7 13h10l4-8H5.344M7 13l-4-8m4 8a4 4 0 100 8 4 4 0 100-8zm10 0a4 4 0 100 8 4 4 0 100-8z"  />
              </svg>
                  <span class="ml-1 text-md font-semibold text-green-500">
                    total-dishes
                  </span>
          </span>


        </button>
        <!-- Hamburger Toggle BTN -->
      </div>
      <!-- Mobile menu end -->
    </div>
  </header>
</template>

<style scoped>
  .shadow-top {
    box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .custom-scrollbar {
    overflow-x: auto;
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

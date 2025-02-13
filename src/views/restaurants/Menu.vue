<template>
<div class="flex items-center flex-wrap justify-center my-10">
        <h2 class="text-3xl font-bold text-gray-900">Decouvrez nos Plats</h2>

      </div>
<div class="flex h-screen overflow-hidden">

<!-- ===== Content Area Start ===== -->
<div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-slate-50 scrollbar-hide">
  <!-- ===== Header Start ===== -->
  <HeaderMenu />

    <div class="mb-20 mx-auto max-w-screen-2xl p-4 md:p-6 md:pt-0 2xl:p-10 2xl:pt-0">
      <HomeViewMenu></HomeViewMenu>
    </div>
</div>

<!-- ===== Sidebar Start ===== -->


    <Sidebar />



</div>
</template>

<script setup>
import HeaderMenu from '@/components/header/HeaderMenu.vue';
import HomeViewMenu from '@/components/Menu/HomeViewMenu.vue';
import Sidebar from '@/components/Menu/Sidebar.vue';

</script>

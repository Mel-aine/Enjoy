<template>
    <header class="bg-blue-700 text-white">
      <div class="container mx-auto px-4 py-3">
        <div class="flex justify-between items-center">
          <div class="text-2xl font-bold">TravelBooker</div>
          <div class="hidden md:flex items-center space-x-6">
            <div v-for="(item, index) in menuItems" :key="index" class="flex items-center space-x-1 cursor-pointer opacity-70 hover:opacity-100">
              <component :is="item.icon" size="18" />
              <span>{{ item.label }}</span>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <button class="hidden md:flex items-center space-x-1 bg-transparent hover:bg-blue-800 px-3 py-1 rounded">
              <UserIcon size="18" />
              <span>Sign In</span>
            </button>
            <button class="md:hidden">
              <MenuIcon size="24" />
            </button>
          </div>
        </div>
      </div>
      <div class="bg-blue-800">
        <div class="container mx-auto px-4 py-1">
          <div class="flex space-x-6 text-sm">
            <div v-for="(item, index) in subMenuItems" :key="index" class="py-2 opacity-70 hover:opacity-100 cursor-pointer" :class="{'border-b-2 border-white font-medium': item.active}">
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { BedDoubleIcon, PlaneIcon, CarIcon, UmbrellaIcon, UserIcon, MenuIcon } from 'lucide-vue-next';
  
  const menuItems = [
    { label: 'Hotels', icon: BedDoubleIcon },
    { label: 'Flights', icon: PlaneIcon },
    { label: 'Cars', icon: CarIcon },
    { label: 'Packages', icon: UmbrellaIcon }
  ];
  
  const subMenuItems = [
    { label: 'Stays', active: true },
    { label: 'Flights', active: false },
    { label: 'Cars', active: false },
    { label: 'Packages', active: false },
    { label: 'Things to do', active: false }
  ];
  </script>
  
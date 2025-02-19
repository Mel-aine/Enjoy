<template>
    <footer class="bg-customDark text-white py-8">
      <div class="container mx-auto px-4">
        <!-- Sections principales -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- À propos -->
          <div class="flex flex-col items-start">
            <h3 class="text-md font-semibold mb-2">{{$t('footer.about')}}</h3>
            <p class="text-xs md:text-sm">
              {{$t('footer.descriptionFooter')}} </p>
          </div>
    
          <!-- Liens utiles -->
          <div class="flex flex-col">
            <h3 class="text-md font-semibold mb-2 hover:text-customRed">{{$t('footer.usefulLinks')}}</h3>
            <ul class="space-y-2">
              <li><router-link to="/contact" class="text-xs hover:underline hover:text-customBlue">{{$t('footer.contactUs')}}</router-link></li>
              <li><router-link to="/faq" class="text-xs hover:underline hover:text-customBlue">{{$t('footer.FAQ')}}</router-link></li>
              <li><router-link to="/terms" class="text-xs hover:underline hover:text-customBlue">{{$t('footer.termsAndConditions')}}</router-link></li>
            </ul>
          </div>
    
          <!-- Suivez-nous -->
          <div class="flex flex-col items-start">
            <h3 class="text-md font-semibold mb-2 hover:text-customRed">{{$t('footer.followUs')}}</h3>
            <div class="flex space-x-4">
              <a href="#" class="hover:text-customBlue" aria-label="Facebook">
                <i class="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" class="hover:text-customBlue" aria-label="Twitter">
                <i class="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" class="hover:text-customBlue" aria-label="Instagram">
                <i class="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
  
          <!-- Envoyez nous un mail -->
          <div class="flex flex-col items-start">
            <h3 class="text-md font-semibold mb-2 hover:text-customRed">{{$t('footer.sendUsAnEmail')}}</h3>
            <div class="flex flex-col sm:flex-row justify-start items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <FloatingInput :ph="$t('footer.tellUs')" icon="fa fa-envelope" class="text-sm w-full max-w-[150px]" />
              <Button variant="danger" size="md" class="max-w-[120px] font-poppins px-2 py-2">
                {{$t('footer.send')}}
              </Button>
            </div>
          </div>
        </div>
  
        <!-- Section bas de page -->
        <div class="border-t border-white mt-8 pt-4 text-center">
          <p class="text-xs">
            {{$t('footer.copyRigth')}}
          </p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
import Button from '../buttons/Button.vue';
import FloatingInput from '@/components/input/FloatingInput.vue';
import { useI18n } from 'vue-i18n';

// Utilisation de useI18n pour accéder aux traductions
const { t } = useI18n();


  </script>
  
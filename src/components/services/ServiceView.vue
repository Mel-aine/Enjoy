<template>
  <div class="space-y-4"  >
    <div  v-for =" item in restaurants" :key="item.nom">
    <ServiceCard
      :title=item.nom
      :description=item.description
      :rating="4"
      :localisation = item.adresse
      :hours=item.heureFermeture
      :label=supplement
    />
  </div>



  </div>

</template>

<script setup>
import {ref} from 'vue'
import ServiceCard from '@/components/card/ServiceCard.vue' ;

const supplement = ref(['viande','riz'])
const restaurants = [
  {
    nom: 'Le Safoutier',
    adresse: 'Hilton Hotel, Yaoundé',
    heureFermeture: '23h00',
    description: 'Restaurant haut de gamme offrant une cuisine internationale raffinée dans un cadre élégant.',
  },
  {
    nom: 'Cosy Pool',
    adresse: 'Quartier Bastos, Yaoundé',
    heureFermeture: '23h30',
    description: 'Endroit paisible autour d\'une piscine, proposant des plats légers et des concerts live.',
  },
  {
    nom: 'L’Hybride',
    adresse: 'Quartier Bastos, Yaoundé',
    heureFermeture: '22h00',
    description: 'Restaurant moderne avec une décoration tropicale, offrant une fusion de saveurs et diverses activités artistiques.',
  },
  {
    nom: 'Le Club Yannick Noah',
    adresse: 'Quartier Etoudi, Yaoundé',
    heureFermeture: '22h00',
    description: 'Club alliant installations sportives et restaurant élégant, idéal pour un déjeuner dans une ambiance sophistiquée.',
  },

];



</script>

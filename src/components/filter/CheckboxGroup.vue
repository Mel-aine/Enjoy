<template>
  <div>
    <div class="flex items-center" v-for="(item, index) in items" :key="index">
      <input type="checkbox" @change="(e) => checkedOption(item, e.target.checked)" :value="item" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm">
      <label class="ml-2 text-sm font-medium text-gray-700">{{ item }}</label>

    </div>
  </div>
</template>

<script setup>
defineProps({
  items: Array
});
const emit = defineEmits(["optionFilter","nothing"]);
  
const checkedOption = (item, checked) => {
  if(checked){
    emit("optionFilter", item);
    console.log('donnee envoyer', item)
    console.log(emit)
  }else{
    emit("nothing", item)
    console.log('donnee envoyer', item)
    console.log(emit)

  }

};

</script>

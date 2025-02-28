<template>
  <div style="top: 284.455px; left: 67.7273px; width: 50.1818px; height: 54.1818px;">
      <button  @click="toggleSelection(type)" class="seats-module-seatBtn"
          :class="[!type?.available ? 'seats-module-unselectable' : 'seats-module-selectable',
                  type?.selected ? 'selected' : '']">
          {{ type?.number }}
      </button>
  </div>
</template>

<script setup>
const props = defineProps({
    type: Object,
});

const toggleSelection = () => {
    if (props.type.available) {
        props.type.selected = !props.type.selected;
    }
};
</script>

<style scoped>
:root {
    --ant-seat-border-width: 2.5px;
    --ant-seat-border: var(--ant-seat-border-width) solid;
}

button:focus {
    outline: none;
}

.seats-module-seatBtn {
    position: relative;
    width: 100%;
    height: 100%;
    border: solid 2.5px;
    border-color: grey;
    border-radius: 18px 18px 6px 6px;
    color: gray;
    overflow: hidden;
}

.seats-module-seatBtn:after {
    content: "";
    position: absolute;
    height: 18px;
    width: calc(100% + 2.5px* 2);
    bottom: calc(2.5px* -1);
    left: calc(2.5px* -1);
    border: 2.5px solid;
    border-radius: 9px 9px 6px 6px;
}

.seats-module-unselectable {
    background-color: rgb(111, 105, 105, 0.3);
    border-color: grey;
    cursor: not-allowed;
    padding: 0;
    display: inline-flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    max-width: 100%;
    vertical-align: middle;
    margin: 0;
}

.seats-module-selectable:hover {
    background-color: rgb(66, 113, 66, 0.5);
}

.selected {
    background-color: rgb(66, 113, 66, 0.5);
}
</style>

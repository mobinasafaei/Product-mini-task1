<template>
  <div>
    <p>This is shop cart</p>
    <hr class="w-full">
    <div
      v-for="(product,index) in addedProducts"
      :key="index"
    >{{ product.attributes.name }}</div>
    <!-- <div :v-if="!display">
      <p>cart is empty</p>
    </div> -->
  </div>
</template>

<script setup>
import { useAddedProductStore } from "../stores/useAddedProductStore";

const addedProductStore = useAddedProductStore();
// const display = ref(false);
const addedProducts = ref([]);
onMounted(() => {
  mutation.initializeStore(addedProductStore);
  addedProducts.value = addedProductStore.addedProducts;
  // addedProductsEmptyOrNot(addedProducts);
  console.log(addedProducts);
});
// function addedProductsEmptyOrNot(addedProducts) {
//   if (addedProducts.length > 0) {
//     console.log(addedProducts);
//     display.value = true;
//   } else {
//     display.value = false;
//   }
// }
</script>

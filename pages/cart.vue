<template>
  <div>
    <div v-if="!emptyCart">
      <div
        v-for="(product,index) in addedProducts"
        :key="index"
      >{{ product.attributes.name }} {{product.count}}</div>
    </div>
    <div v-else>
      <p class="text-large text-center font-semibold font-serif">cart is empty</p>
    </div>
  </div>
</template>

<script setup>
import { useAddedProductStore } from "../stores/useAddedProductStore";

const addedProductStore = useAddedProductStore();
const addedProducts = ref([]);
const emptyCart = computed(() => {
  return addedProductStore.addedProducts === null;
});
onMounted(() => {
  mutation.initializeStore(addedProductStore);
  console.log(addedProductStore.addedProducts);
  addedProducts.value = addedProductStore.addedProducts;
});
</script>

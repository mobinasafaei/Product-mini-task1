<template>
  <div>
    <p>This is shop cart</p>
    <hr class="w-full" />
    <div
      v-for="(product,index) in addedProducts"
      :key="index"
    >{{ product.attributes.name }} {{product.count}}</div>
    <!-- <div :v-if="!display">
      <p>cart is empty</p>
    </div>-->
  </div>
</template>

<script setup>
import { useAddedProductStore } from "../stores/useAddedProductStore";

const addedProductStore = useAddedProductStore();
const addedProducts = ref([]);
onMounted(() => {
  mutation.initializeStore(addedProductStore);
  addedProducts.value = addedProductStore.addedProducts;
});
</script>

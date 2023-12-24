<template>
  <div class="border p-2 h-full rounded flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-gray-900 font-bold text-xl mb-2">{{ product.attributes.name }}</p>
      <p
        class="text-gray-700 text-base line-clamp-3 text-ellipsis"
      >{{ product.attributes.description }}</p>
    </div>
    <div class="grid grid-cols-2">
      <p class="text-lg font-bold">{{ product.attributes.price }}</p>
      <button class="w-full bg-black rounded-md text-white" @click="addToCart()">Add to Cart</button>
    </div>
  </div>
</template>

<script setup>
import { useAddedProductStore } from "../stores/useAddedProductStore";
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
const { product } = props;
const addedProductStore = useAddedProductStore();
mutation.initializeStore(addedProductStore);
function addToCart() {
  addedProductStore.addToCart(product, addedProductStore);
}
</script>
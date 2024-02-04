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
      <button
        class="w-full bg-black rounded-md text-white"
        @click="addToCart()"
        v-if="!checkIfProductExistInCart()"
      >Add to Cart</button>
      <div class="flex justify-between" v-else>
        <button @click="increaseCount({product})">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
        <p class="text-lg">{{count}}</p>
        <button @click="decreaseCount({product})">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

const toast = useToast();
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
const { product } = props;
const addedProductStore = useAddedProductStore();
const count = ref(0);

const updateCount = () => {
  if (addedProductStore.addedProducts) {
    const foundProduct = addedProductStore.addedProducts.find(
      p => p.id === product.id
    );
    count.value = foundProduct ? foundProduct.count : 0;
  }
};
updateCount();

function addToCart() {
  try {
    addedProductStore.addToCart(product);
    updateCount();
    toast.success("added to cart succesfully");
  } catch (x) {
    toast.error("something went wrong")
  }
}

function checkIfProductExistInCart() {
  return count.value > 0;
}

function increaseCount() {
  count.value++;
  addedProductStore.increaseCount(product);
}

function decreaseCount() {
  count.value--;
  addedProductStore.decreaseCount(product);
}
</script>
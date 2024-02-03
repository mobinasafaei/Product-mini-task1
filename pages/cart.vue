<template>
  <div>
    <div v-if="loading" class="flex justify-center">
      <LoadingComp></LoadingComp>
    </div>
    <div v-else>
      <div v-if="!emptyCart" class="grid grid-cols-3 gap-2">
        <div
          v-for="(product) in addedProducts"
          :key="product.id"
          class="border rounded-lg w-full p-2"
        >
          <p class="text-lg font-bold block">{{ product.attributes.name }}</p>
          <div class="flex justify-between">
            <p>{{product.attributes.price }}</p>
            <div class="flex">
              <button @click="increaseCount(product)">
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
              <p class="text-lg">{{product.count}}</p>
              <button @click="decreaseCount(product)">
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
      </div>
      <div v-else>
        <p class="text-large text-center font-semibold font-serif">cart is empty</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAddedProductStore } from "../stores/useAddedProductStore";

const addedProductStore = useAddedProductStore();
const addedProducts = computed(() => addedProductStore.addedProducts || []);
const loading = ref(true);
const emptyCart = computed(() => addedProducts.value.length === 0);

onMounted(() => {
  loading.value = false;
});

function increaseCount(product) {
  addedProductStore.increaseCount(product);
}

function decreaseCount(product) {
  addedProductStore.decreaseCount(product);
}
</script>

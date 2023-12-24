<template>
  <div class="ml-3 mr-3">
    <div v-if="loading" class="flex justify-center">
      <LoadingComp></LoadingComp>
    </div>
    <div v-else class="grid gap-3 grid-cols-4">
      <div v-for="(product,index) in products" :key="index">
        <ProductCardComp :product="product" :key="index"></ProductCardComp>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = ref([]);
const loading = ref(true);
onMounted(async () => {
  products.value = await getProducts();
});
async function getProducts() {
  try {
    const response = await $fetch("/api/products", {
      method: "GET"
    });
    loading.value = false;
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <div class="grid gap-5 grid-cols-3 m-5">
    <div v-for="(product,index) in products" :key="index">
        <ProductCardComp :product="product" :key="index"></ProductCardComp>
    </div>
  </div>
</template>

<script setup>
const products = ref([]);
onMounted(async () => {
  products.value = await getProducts();
});
async function getProducts() {
  try {
    const response = await $fetch("/api/products", {
      method: "GET"
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
</script>

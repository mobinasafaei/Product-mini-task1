<template>
  <div class="ml-3 mr-3">
    <div class="grid gap-3 grid-cols-4">
      <div v-for="(product,index) in products" :key="index">
        <ProductCardComp :product="product" :key="index"></ProductCardComp>
      </div>
    </div>
    <div v-if="loading" class="flex justify-center m-2">
      <LoadingComp></LoadingComp>
    </div>
  </div>
</template>

<script setup>
const products = ref([]);
const loading = ref(true);
const totalPages = ref();
const currentPageNumber = ref(1);

onMounted(async () => {
  products.value = await getProducts(1);
  scroll();
});

async function getProducts(pageNumber) {
  try {
    const response = await $fetch("/api/products", {
      method: "GET",
      query: {
        pageNumber
      }
    });
    loading.value = false;
    totalPages.value = response.meta.total_pages;
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function scroll() {
  if (process.browser) {
    window.onscroll = async () => {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;

      if (bottomOfWindow) {
        if (currentPageNumber.value < totalPages.value && !loading.value) {
          loading.value = true;
          const data = await getProducts((currentPageNumber.value += 1));
          products.value.push(...data);
          loading.value = false;
        }
      }
    };
  }
}
</script>

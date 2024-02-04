<template>
  <div class="ml-3 mr-3">
    <div class="mb-3 w-full flex justify-center">
      <input type="text" v-model="searchQuery" class="p-1 mr-1 border rounded-sm w-5/6" />
      <button
        class="bg-blue-700 text-white p-1 pl-2 pr-2 rounded-sm w-1/12"
        @click="search()"
      >search</button>
    </div>
    <div v-if="searchResultEmpty" class="font-bold flex justify-center">no matches found</div>
    <div v-else class="grid gap-3 grid-cols-4">
      <div v-for="(product,index) in products" :key="index">
        <ProductCardComp :product="product" :key="index"></ProductCardComp>
      </div>
      <Observer @intersect="scroll" />
    </div>
    <div v-if="loading" class="flex justify-center m-2">
      <LoadingComp></LoadingComp>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

const toast = useToast();
const products = ref([]);
const loading = ref(true);
const totalPages = ref();
const currentPageNumber = ref(1);
const searchQuery = ref("");
const searchResultEmpty = ref(false);

onMounted(async () => {
  products.value = await getProducts(1);
});

async function getProducts(pageNumber, searchQuery) {
  searchResultEmpty.value = false;
  try {
    const response = await $fetch("/api/products", {
      method: "GET",
      query: {
        pageNumber,
        searchQuery
      }
    });
    totalPages.value = response.meta.total_pages;
    loading.value = false;
    return response.data;
  } catch (error) {
    toast.error("can not load products");
  }
}
async function search() {
  loading.value = true;
  try {
    products.value = [];
    const data = await getProducts(1, searchQuery.value);
    if (data.length !== 0) {
      products.value = data;
    } else {
      searchResultEmpty.value = true;
    }
  } catch (x) {
    toast.error("something went wrong");
  }
  loading.value = false;
}

async function scroll() {
  if (currentPageNumber.value < totalPages.value && !loading.value) {
    loading.value = true;
    try {
      const data = await getProducts((currentPageNumber.value += 1));
      products.value.push(...data);
    } catch (x) {
      toast.error("can not load products");
    }

    loading.value = false;
  }
}
</script>
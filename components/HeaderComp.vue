<template>
  <div class="m-2 grid grid-cols-3">
    <div>icon</div>
    <div>
      <div class="flex justify-center">
        <NuxtLink to="/" class="pr-1 pl-1 text-base font-semibold">Home</NuxtLink>
        <NuxtLink to="/products" class="pr-1 pl-1 text-base font-semibold">Products</NuxtLink>
      </div>
    </div>
    <button @click="goToCartPage()" class="flex justify-end">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-7 h-7"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
function goToCartPage() {
  useRouter().push("/cart");
}
</script>
<style>
.router-link-active {
  color: blue;
}
</style>


<template>
  <div>
    <button @click="goToCartPage()">cart</button> 
  </div>
</template>

<script setup>
function goToCartPage(){
    useRouter().push("/cart")
}
</script>


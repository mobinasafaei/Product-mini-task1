import { defineStore } from "pinia";
import { ref } from 'vue';

export const useAddedProductStore = defineStore('addedProduct', {
    state: () => ({
        addedProducts: ref([])
    }),
})
export const mutation = {
    initializeStore(useAddedProductStore) {
        try {
            useAddedProductStore.addedProducts = JSON.parse(window.localStorage.getItem("products"));
        } catch {
            window.localStorage.setItem("products", JSON.stringify(this.addedProducts))
        }
    },
    updateProductsInCart(products) {
        window.localStorage.setItem("products", JSON.stringify(products))
    },
    addToCart(product,addedProductStore) {
        if (addedProductStore.addedProducts === null) {
            addedProductStore.addedProducts = [product];
          } else {
            console.log(addedProductStore.addedProducts)
            addedProductStore.addedProducts.push(product);
          }
        this.updateProductsInCart(addedProductStore.addedProducts);
    }
}

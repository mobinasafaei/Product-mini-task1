import { defineStore } from "pinia";
import { ref } from 'vue';

export const useAddedProductStore = defineStore('addedProduct', {
    state: () => ({
        addedProducts: ref([]),
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
    addToCart(product, addedProductStore) {
        if (addedProductStore.addedProducts === null) {
            addedProductStore.addedProducts = [{ ...product, count: 1 }];
        } else {
            const existProduct = addedProductStore.addedProducts.filter((existProduct) => { return existProduct.id === product.id })

            if (existProduct[0] !== undefined) {
                addedProductStore.addedProducts.map((product) => { if (product.id === existProduct[0].id) { product.count++ } })
            } else {
                addedProductStore.addedProducts.push({ ...product, count: 1 })
            }
        }
        this.updateProductsInCart(addedProductStore.addedProducts);
    }
}

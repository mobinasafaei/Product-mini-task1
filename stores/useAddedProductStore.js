import { defineStore } from "pinia";
import { ref } from 'vue';

export const useAddedProductStore = defineStore('addedProduct', {
    state: () => ({
        addedProducts: ref([]),
    }),
    actions: {
        increaseCount(product) {
            this.addedProducts.map((productIncart) => { if (productIncart.id === product.id) { product.count++ } })
            this.updateProductsInCart(this.addedProducts)
        },

        decreaseCount(product, addedProductStore) {
            if (product.count === 1) {
                this.removeFromCart(product, addedProductStore);
            } else {
                addedProductStore.addedProducts.map((productIncart) => {
                    if (productIncart.id === product.id) {
                        product.count--
                    }
                })
            }
            this.updateProductsInCart(addedProductStore.addedProducts)
        },

        removeFromCart(product, addedProductStore) {
            addedProductStore.addedProducts = addedProductStore.addedProducts.filter(
                (productIncart) => { return productIncart.id !== product.id }
            );
            this.updateProductsInCart(addedProductStore.addedProducts);
        },

        addToCart(product, addedProductStore) {
            if (addedProductStore.addedProducts === null) {
                addedProductStore.addedProducts = [{ ...product, count: 1 }];
            } else {
                const existProduct = addedProductStore.addedProducts.find((p) => p.id === product.id)

                if (existProduct !== undefined) {
                    addedProductStore.addedProducts.map((product) => { if (product.id === existProduct.id) { product.count++ } })
                } else {
                    addedProductStore.addedProducts.push({ ...product, count: 1 })
                }
            }
            this.updateProductsInCart(addedProductStore.addedProducts);
        },

        updateProductsInCart(products) {
            window.localStorage.setItem("products", JSON.stringify(products))
        },
    }
})
export const mutation = {
    initializeStore(useAddedProductStore) {
        try {
            useAddedProductStore.addedProducts = JSON.parse(window.localStorage.getItem("products"));
        } catch {
            window.localStorage.setItem("products", JSON.stringify([]))
        }
    },
}

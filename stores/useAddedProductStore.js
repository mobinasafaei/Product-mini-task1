import { defineStore } from "pinia";
import { ref } from 'vue';

export const useAddedProductStore = defineStore('addedProduct', {
    state: () => ({
        addedProducts: ref([]),
    }),
    actions: {
        increaseCount(product) {
            const productInCart = this.addedProducts.find(p => p.id === product.id);
            if (productInCart) {
                productInCart.count++;
                this.updateProductsInCart(this.addedProducts);
            }
            console.log(productInCart)
        },

        decreaseCount(product) {
            const productInCart = this.addedProducts.find(p => p.id === product.id);
            if (productInCart) {
                if (productInCart.count === 1) {
                    this.removeFromCart(product);
                } else {
                    productInCart.count--;
                }
                this.updateProductsInCart(this.addedProducts);
            }
        },

        removeFromCart(product) {
            this.addedProducts = this.addedProducts.filter(p => p.id !== product.id);
            this.updateProductsInCart(this.addedProducts);
        },

        addToCart(product) {
            if (this.addedProducts === null) {
                this.addedProducts = [{ ...product, count: 1 }];
            } else {
                const existProduct = this.addedProducts.find((p) => p.id === product.id)
                if (existProduct) {
                    existProduct.count++;
                } else {
                    this.addedProducts.push({ ...product, count: 1 })
                }
            }
            this.updateProductsInCart(this.addedProducts);

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

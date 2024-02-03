import { useAddedProductStore } from "../stores/useAddedProductStore";
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:mounted', () => {
        const addedProductStore = useAddedProductStore();   
        mutation.initializeStore(addedProductStore);
        console.log("run")
    })
})
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"
export default defineNuxtPlugin((nuxtApp) => {
    const options= {
        position: "top-right",
        timeout: 1500,
        pauseOnHover: true,
        hideProgressBar: true,
        transition: "Vue-Toastification__fade",
    };
    nuxtApp.vueApp.use(Toast,options)
})
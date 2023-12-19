export default defineEventHandler(async (event) => {
    const { public: { apiBase } } = useRuntimeConfig()
    try {
        const products = await $fetch(`${apiBase}/products`, {
            method: "GET",
        })
        return products;
    } catch (error) {
        console.log(error)
    }
})
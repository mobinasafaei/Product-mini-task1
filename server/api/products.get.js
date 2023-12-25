export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const pageNumber = query.pageNumber;
    const { public: { apiBase } } = useRuntimeConfig()
    try {
        const products = await $fetch(`${apiBase}/products?page=${query.pageNumber}`, {
            method: "GET",
        })
        return products;
    } catch (error) {
        console.log(error)
    }
})
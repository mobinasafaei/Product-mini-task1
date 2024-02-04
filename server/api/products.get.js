export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const pageNumber = query.pageNumber;
    const searchQuery = query.searchQuery;
    console.log(query.searchQuery)
    const { public: { apiBase } } = useRuntimeConfig()
    try {
        const products = await $fetch(`${apiBase}/products?page=${query.pageNumber}`, {
            method: "GET",
            query: {
                'filter[name]': searchQuery
            }
        })
        console.log(products)
        return products;
    } catch (error) {
        console.log(error)
    }
})
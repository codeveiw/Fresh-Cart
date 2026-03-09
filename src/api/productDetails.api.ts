
export async function getProductDetails(id: string) {
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    let finalRes = await res.json()
    return finalRes.data
}

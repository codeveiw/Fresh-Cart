
export async function getAllProducts() {
    let res = await fetch("https://ecommerce.routemisr.com/api/v1/products")
    let finalRes = await res.json()
    return finalRes.data
}

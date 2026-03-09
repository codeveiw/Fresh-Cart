export interface Category {
    _id: string;
    name: string;
    slug: string;
    image: string;
}

export interface Brand {
    _id: string;
    name: string;
    slug: string;
    image: string;
}

export interface Product {
    id: string;
    title: string;
    slug: string;
    description: string;
    quantity: number;
    price: number;
    imageCover: string;
    images: string[];
    category: Category;
    brand: Brand;
    ratingsAverage: number;
    ratingsQuantity: number;
    priceAfterDiscount?: number;
    sold: number;
}

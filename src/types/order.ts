export type PaymentMethod = "cash" | "card";
export type PaymentStatus = "pending" | "paid" | "failed";

export interface Order {
    id: string;
    userId: string;
    items: any[]; // Ideally link to CartItem type
    totalAmount: number;
    shippingAddress: {
        fullName: string;
        phone: string;
        address: string;
    };
    paymentMethod: PaymentMethod;
    paymentStatus: PaymentStatus;
    createdAt: Date;
}

export interface CheckoutRequest {
    paymentMethod: PaymentMethod;
    shippingAddress: {
        fullName: string;
        phone: string;
        address: string;
    };
}

export interface CardPaymentRequest {
    amount: number;
    currency: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
}

export interface CardPaymentResponse {
    success: boolean;
    transactionId?: string;
    error?: string;
}

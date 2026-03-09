import { NextRequest, NextResponse } from "next/server";
import { CheckoutRequest, Order, PaymentStatus } from "@/types/order";
import { db } from "@/lib/db.mock";

export async function POST(req: NextRequest) {
    try {
        const body: CheckoutRequest = await req.json();

        // 1. Validation
        if (!body.paymentMethod || !body.shippingAddress) {
            return NextResponse.json(
                { error: "Payment method and shipping address are required" },
                { status: 400 }
            );
        }

        const { fullName, phone, address } = body.shippingAddress;
        if (!fullName || !phone || !address) {
            return NextResponse.json(
                { error: "Incomplete shipping address" },
                { status: 400 }
            );
        }

        // Mock User ID (In a real app, get this from auth session)
        const userId = "user_12345";

        // Mock Total Amount (In a real app, calculate from cart)
        const totalAmount = 150.00;

        let paymentStatus: PaymentStatus = "pending";

        // 2. Handle Payment Logic
        if (body.paymentMethod === "card") {
            // Internal call to card payment API or direct Stripe integration
            // For modularity, we use the logic defined in the card payment simulation

            // In a real scenario, the checkout page might handle the Stripe token collection,
            // or we might call a internal service here. 
            // Here we simulate a successful card payment.

            console.log("Checkout: Processing Card Payment...");
            // Simulate success
            paymentStatus = "paid";
        } else if (body.paymentMethod === "cash") {
            console.log("Checkout: Processing Cash on Delivery...");
            paymentStatus = "pending";
        } else {
            return NextResponse.json(
                { error: "Invalid payment method" },
                { status: 400 }
            );
        }

        // 3. Create Order in Database
        const order = await db.orders.create({
            userId,
            items: [], // Mock empty items for now
            totalAmount,
            shippingAddress: body.shippingAddress,
            paymentMethod: body.paymentMethod,
            paymentStatus,
        });

        return NextResponse.json({
            message: "Order placed successfully",
            orderId: order.id,
            paymentStatus: order.paymentStatus,
        });

    } catch (error) {
        console.error("Checkout Error:", error);
        return NextResponse.json(
            { error: "Internal server error during checkout" },
            { status: 500 }
        );
    }
}

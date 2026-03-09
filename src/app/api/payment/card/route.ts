import { NextRequest, NextResponse } from "next/server";
import { CardPaymentRequest, CardPaymentResponse } from "@/types/order";

export async function POST(req: NextRequest) {
    try {
        const body: CardPaymentRequest = await req.json();

        // 1. Basic validation
        if (!body.amount || !body.cardNumber || !body.expiryDate || !body.cvv) {
            return NextResponse.json(
                { success: false, error: "Missing required payment details" },
                { status: 400 }
            );
        }

        // 2. Simulate payment processing logic (e.g., call Stripe API)
        console.log(`Processing card payment for amount: ${body.amount}`);

        // Simulation: Fail if card number ends in '0000'
        if (body.cardNumber.endsWith("0000")) {
            return NextResponse.json(
                { success: false, error: "Payment declined by provider" },
                { status: 402 }
            );
        }

        // 3. Return success response
        const response: CardPaymentResponse = {
            success: true,
            transactionId: `txn_${Math.random().toString(36).substr(2, 9)}`,
        };

        return NextResponse.json(response);
    } catch (error) {
        console.error("Card Payment Error:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error during payment" },
            { status: 500 }
        );
    }
}

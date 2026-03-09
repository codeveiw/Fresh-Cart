import { Order } from "@/types/order";

// Mock database to simulate order storage
const orders: Order[] = [];

export const db = {
    orders: {
        create: async (orderData: Omit<Order, "id" | "createdAt">): Promise<Order> => {
            const newOrder: Order = {
                ...orderData,
                id: `order_${Math.random().toString(36).substr(2, 9)}`,
                createdAt: new Date(),
            };
            orders.push(newOrder);
            console.log("Mock DB: Order Created", newOrder);
            return newOrder;
        },
        findMany: async (): Promise<Order[]> => {
            return orders;
        }
    }
};

import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

interface CartItemProps {
  item: Product & { quantity: number };
  onUpdateQuantity: (id: string, newQuantity: number) => void;
  onRemove: (id: string) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4 transition-all hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div className="flex flex-1 gap-4">
        <Link href={`/Product/${item.id}`} className="relative aspect-square h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50 border border-gray-100">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <div className="flex flex-col justify-between py-1">
          <div>
            <p className="text-sm font-medium text-gray-500">{item.category}</p>
            <Link href={`/Product/${item.id}`}>
              <h3 className="line-clamp-2 text-base font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                {item.name}
              </h3>
            </Link>
          </div>
          <p className="text-lg font-bold text-gray-900">
            ${item.price.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 sm:justify-end">
        <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 p-1">
          <button
            onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-all hover:bg-indigo-50 hover:text-indigo-600 active:scale-95 disabled:opacity-50"
            disabled={item.quantity <= 1}
          >
            <Minus size={14} />
          </button>
          <span className="w-8 text-center text-sm font-semibold text-gray-900">
            {item.quantity}
          </span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-all hover:bg-indigo-50 hover:text-indigo-600 active:scale-95"
          >
            <Plus size={14} />
          </button>
        </div>

        <button
          onClick={() => onRemove(item.id)}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-rose-500 transition-colors hover:bg-rose-50 active:bg-rose-100"
        >
          <Trash2 size={18} />
          <span className="sm:hidden">Remove</span>
        </button>
      </div>
    </div>
  );
}

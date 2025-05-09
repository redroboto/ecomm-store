import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
    id: string,
    name: string,
    price: number,
    imageUrl: string | null,
    quantity: number,
}

interface CartStore {
    items: CartItem[],
    addItem: (item: CartItem) => void,
    deductItem: (id: string) => void,
    clearItems: () => void,

}

export const useStore = create<CartStore>()(persist(
    (set) => ({
        items: [],
        addItem: (item) => set((state) => {
            const existing = state.items.find((i) => i.id === item.id);

            if (existing){
                return {
                    items: state.items.map((i) => {
                        return i.id === item.id ? {...i, quantity: i.quantity + item.quantity} : i
                    })
                }
            }

            return {items: [...state.items, item]};


        }),
        deductItem: (id) => set((state) => {
            return {
                items: state.items.map((item) => {
                    return item.id === id ? {...item, quantity: item.quantity - 1} : item
                }).filter((item) => item.quantity > 0)
            }
        }),
        clearItems: () => set(() => {
            return {items: []}
        }),
    }), { name: "cart"}
) )
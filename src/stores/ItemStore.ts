import {create} from "zustand";

type Item = {
    id: number
    name: string
}

interface ItemStore {
    items: Item[]
    getItem: (id: number) => Item | undefined
    createItem: (item: Item) => Item
    updateItem: (item: Item) => Item
    deleteItem: (item: Item) => Item
}

const useItemStore = create<ItemStore>()((set, get) => ({
    items: [],
    createItem: (item: Item) => {
        set((state) => ({items: [...state.items, item]}));
        return item
    },

    getItem: (id: number) => {
        return get().items.find(item => item.id === id)
    },

    updateItem: (item: Item) => {
        const id = item.id
        const updatedItem = item
        set(state => ({
            items: state.items.map((item) => {
                return item.id === id ? {...item, ...updatedItem} : item
            })}))
        return updatedItem
    },

    deleteItem: (item: Item) => {
        const id = item.id
        set(state => ({
            items: state.items.filter(item => id !== item.id)
        }))
        return item
    }
}))

export default useItemStore
import React, { useState, createContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    function addItem(item, quantity) {
        if(isInCart(item.id)) {
            let aux = items; 

            let itemIndex = aux.findIndex((element) => element.id === item.id)
            aux[itemIndex].quantity += quantity;

            setItems([...aux]);
        } else {
            setItems([...items, { ...item, quantity }]);
        }
    }

    function removeItem(itemID) {
        setItems(items.filter((element) => element.id !== itemID))
    }

    function clear() {
        setItems([]);
    }

    function getTotal() {
        return items.reduce((pv, cv) => pv + (cv.price * cv.quantity), 0)
    }

    function isInCart(itemID) {
        return items.find((element) => element.id === itemID);
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, getTotal, items, clear }}>
            {children}
        </CartContext.Provider>
    )
}
import React, { useState, createContext } from "react";

export const CartContext = createContext();
export function CartProvider({ children }) {
    const [items, setItems] = useState([]);


    function addItem(item, quantity) {
        console.log({ ...item, quantity });

        if (isInCart(item.id)) {
            let aux = item;
            let itemIndex = aux.indexOf((element) => element.id === item.id)
            aux[itemIndex].quantity += quantity;

            setItems([...aux])
        } else {
            setItems([...items, { ...item, quantity }]);
        }

    }

    function removeItem(itemID) {
        //
    }

    function clear() {
        setItems([]);
    }

    function isInCart(itemID) {
        if (!items) {
            return items.some((element) => element.id === itemID);
        } else {
            return false;
        }
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, items, clear }}>
            {children}
        </CartContext.Provider>
    )
}
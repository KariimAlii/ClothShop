import {createContext} from "react";

export const CartContext = createContext({
    items: []
});

// Note:
// The default value set when creating the context is only used
// if a component that was not wrapped by the provider component
// tries to access the context value
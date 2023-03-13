import { createContext, ReactElement, useReducer } from "react";

export const CartContext = createContext()

type CartStateType = { cart: Product[] }

const initialState: CartStateType = { cart: [] }

export type ReducerAction = {
    type: string,
    payload: Product
}

const reducer = (state: CartStateType, action: ReducerAction) => {
    switch (action.type) {
        case 'CART_ADD_ITEM': {

            const newItem: Product = action.payload

            const existItem: Product | undefined = state.cart.find(item => item.slug === newItem.slug)

            const cartItems : Product[] = existItem ? state.cart.map(item => item.name === item.name ? newItem : item) : [...state.cart, newItem]

            return { ...state, cart: cartItems }
        }

        default: return state
    }
}

type ChildrenType = { children: ReactElement | ReactElement[] }

export const CartProvider = ({ children }: ChildrenType): ReactElement => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const value = { state, dispatch}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
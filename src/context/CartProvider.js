import { useEffect, useReducer } from 'react';
import { createOrderInServer } from '../services/orderService';
import { CartContext } from './CartContext'
import { cartReducer } from './cartReducer'

const CART_INITIAL_STATE = {
    isLoaded: false,
    cart: [],
    numberOfItems: 0,
    total: 0,
};

const CART_KEY = 'cart'

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);


    useEffect(() => {
        try {
            const cart = localStorage.getItem(CART_KEY)
                ? JSON.parse(localStorage.getItem(CART_KEY))
                : [];

            dispatch({ type: 'Cart loadCart from local', payload: cart });
        } catch (error) {
            dispatch({ type: 'Cart loadCart from local', payload: [] });
        }
    }, []);

    useEffect(() => {
        if (state.cart.length) {
            localStorage.setItem(CART_KEY, JSON.stringify(state.cart));
        }
    }, [state.cart]);

    const addProduct = (product) => {

        return dispatch({
            type: 'Cart updateProducts',
            payload: [...state.cart.filter((p) => p.id !== product.id), product],
        });
    };

    const removeCartProduct = (product) => {
        dispatch({ type: 'Cart removeProduct', payload: product });
    };

    const createOrder = async () => {

        const payload = {
            products: state.cart,
            total: state.cart.reduce((a, b) => a.finalPrice + b.finalPrice)
        };

        try {
            const data = await createOrderInServer(payload)
            dispatch({ type: 'Cart order complete' });
            localStorage.setItem(CART_KEY, JSON.stringify([]))
            return {
                hasError: false,
                message: data,
            };
        } catch (error) {
            return {
                hasError: true,
                message: 'No se pudo crear la orden',
            };
        }
    };

    return (
        <CartContext.Provider
            value={{
                ...state,
                addProduct,
                removeCartProduct,
                createOrder,
            }}>
            {children}
        </CartContext.Provider>
    );
};
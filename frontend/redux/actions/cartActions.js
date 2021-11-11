import APIService from "../../services/APIService";
import { ActionType } from "../constants/actionType";

export let addToCart = (product, cartProducts = []) => async (dispatch) => {
    let response = await APIService.post('addToCart', product);
    if (cartProducts.length === 0) {
        cartProducts = [{
            quantity: 1,
            productPrice: 1 * product.price,
            ...product
        }]
    } else {
        let index = cartProducts.findIndex(cp => cp.id === product.id);
        if (index > -1) {
            cartProducts[index].quantity += 1;
            cartProducts[index].productPrice = cartProducts[index].quantity * product.price;
        } else {
            cartProducts[cartProducts.length] = {
                quantity: 1,
                productPrice: 1 * product.price,
                ...product
            }
        }
    }
    dispatch({
        type: ActionType.ADD_PRODUCT,
        payload: cartProducts
    });
}

export let productRemove = (product, cartProducts = []) => async (dispatch) => {
    let index = cartProducts.findIndex(cp => cp.id === product.id);
    if (product.quantity > 1) {
        cartProducts[index].quantity -= 1;
        cartProducts[index].productPrice = cartProducts[index].quantity * product.price;
        dispatch({
            type: ActionType.REMOVE_PRODUCT,
            payload: cartProducts
        });
    } else {
        dispatch({
            type: ActionType.REMOVE_PRODUCT,
            payload: cartProducts.splice(index, 1)
        });
    }
}
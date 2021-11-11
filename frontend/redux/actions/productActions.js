import APIService from "../../services/APIService";
import { ActionType } from "../constants/actionType";

export let getProducts = (prodCategory = '') => async (dispatch) => {
    let response = await APIService.get('products');
    dispatch({
        type: ActionType.GET_PRODUCTS,
        payload: prodCategory ? response.data.products.filter(product => product.category === prodCategory) : response.data.products
    });
}
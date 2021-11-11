import APIService from "../../services/APIService";
import { ActionType } from "../constants/actionType";

export let getBanners = () => async (dispatch) => {
    let response = await APIService.get('banners');
    dispatch({
        type: ActionType.GET_BANNERS,
        payload: response.data
    });
}

export let getProductCatogories = () => async (dispatch) => {
    let response = await APIService.get('category');
    dispatch({
        type: ActionType.GET_PRODUCT_CATEGORIES,
        payload: response.data.filter(pc => pc.order > -1).sort((prodA, prodB) => prodA.order - prodB.order)
    });
}
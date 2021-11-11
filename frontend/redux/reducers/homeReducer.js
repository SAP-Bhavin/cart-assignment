import { ActionType } from '../constants/actionType';

let initialState = {
    banners: [],
    productCategories: []
},
    homeReducer = (state = initialState, { type, payload }) => {
        switch (type) {
            case ActionType.GET_BANNERS:
                return { ...state, banners: payload }
            case ActionType.GET_PRODUCT_CATEGORIES:
                return { ...state, productCategories: payload }
            default:
                return state;
        }

    }

export default homeReducer;
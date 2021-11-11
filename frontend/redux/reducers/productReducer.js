import { ActionType } from '../constants/actionType';

let initialState = {
    products: [],
},
    productReducer = (state = initialState, { type, payload }) => {
        switch (type) {
            case ActionType.GET_PRODUCTS:
                return { ...state, products: payload }
            default:
                return state;
        }

    }

export default productReducer;
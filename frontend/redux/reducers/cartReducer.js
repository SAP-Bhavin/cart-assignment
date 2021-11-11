import { ActionType } from '../constants/actionType';

let initialState = {
    cartProducts: [],
},
    cartReducer = (state = initialState, { type, payload }) => {
        switch (type) {
            case ActionType.ADD_PRODUCT:
                return { ...state, cartProducts: payload }
            case ActionType.REMOVE_PRODUCT:
                return { ...state, cartProducts: payload }
            default:
                return state;
        }
    }

export default cartReducer;
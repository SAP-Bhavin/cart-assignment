import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import homeReducer from './homeReducer';
import productReducer from './productReducer'
export default combineReducers({
    "home": homeReducer,
    "product": productReducer,
    "cart": cartReducer
});

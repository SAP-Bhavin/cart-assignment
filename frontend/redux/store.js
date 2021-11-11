import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import reducers from "./reducers"

let store = () => createStore(reducers, compose(applyMiddleware(thunk))),
    wrapper = createWrapper(store);
export default wrapper
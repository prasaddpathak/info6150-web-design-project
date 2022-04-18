import {createStore} from "redux";
import reducer from "./Reducers/contacts-reducer";

const store = createStore(reducer);

export default store;
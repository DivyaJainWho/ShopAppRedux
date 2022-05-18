import { ActionTypes as Type} from "../constants/productConstants";
const initialState ={
    products :[],
};

export const productReducer  = (state =initialState, {type, payload}) =>{
    switch (type) {
        case Type.SET_PRODUCTS:
            return{ ...state, products:payload}
    
        default:
            return state;
    }
}

export const selectedProductReducer =(state={},{type, payload})=>{
    switch (type) {
        case Type.SELECTED_PRODUCT:
            return {...state, ...payload}
        case Type.REMOVED_PRODUCT:
            return {}
    
        default:
            return state;
    }
}
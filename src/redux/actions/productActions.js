import { ActionTypes as Type} from "../constants/productConstants";

export const setProducts =(products)=>{
  return {
    type: Type.SET_PRODUCTS,
    payload : products
  }
}

export const selectedProduct =(product)=>{
    return {
      type: Type.SELECTED_PRODUCT,
      payload : product
    }
  }

  export const removeSelectedProduct =(product)=>{
    return {
      type: Type.REMOVED_PRODUCT,
    }
  }
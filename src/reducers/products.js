import {FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from 'action/product_action'

const initialState = {
  pending: false,
  products: [],
  error: null
}

const products = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS_PENDING:
        return {
            ...state,
            pending: true
        }
    case FETCH_PRODUCTS_SUCCESS:
        return {
            ...state,
            pending: false,
            products: action.products.payload
        } 
    case FETCH_PRODUCTS_ERROR:
        return {
            ...state,
            pending: false,
            error: action.products.error
        }
    default: 
        return state;
  }
}

export default products
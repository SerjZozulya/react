import { Action } from "./action-type";

export enum productsActionTypes {
    SET_PRODUCTS = "SET_PRODUCTS"
}

const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case productsActionTypes.SET_PRODUCTS:
            console.log('set products')
            return {...state, products: [...action.payload]}
        default:
            return state
    }
}

export const setProductsActionCreator = (payload: any) => ({type: productsActionTypes.SET_PRODUCTS, payload: payload})
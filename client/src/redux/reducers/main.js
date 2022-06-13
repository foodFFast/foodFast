import {
    ERROR,
    FETCH_CATEGORIES,
    FETCH_PRODUCTS,
    FILTER_PRODUCTS,
    FIND_PRODUCT_BY_ID,
    POST_LOGIN
} from "../actions/types"

const initialState = {
    error: null,
    products: {
        all: [],
        filtered: []
    },
    categories: {
        all: [],
        filtered: []
    },
    tags: {
        all: [],
        filtered: []
    },
    // user:[]
}

const main = (state = initialState, action) => {
    let newState = { ...state }

    switch (action.type) {
        default:
            break

        case ERROR:
            newState.error = action.payload
            break

        // CATEGORIES

        case FETCH_CATEGORIES:
            newState.categories.all = action.payload
            break

        // PRODUCTS

        case FETCH_PRODUCTS:
            let combinedProducts = [...state.products.all, ...action.payload]
            let uniqueProducts = [
                ...new Map(
                    combinedProducts.map((prod) => [prod._id, prod])
                ).values()
            ]
            newState.products.all = uniqueProducts
            break

        case FILTER_PRODUCTS:
            newState.products.filtered = []
            !!action.payload.length &&
                (newState.products.filtered = [...action.payload])
            break
        // case POST_LOGIN:
        //     return {
        //         user:[...state,action.payload]
        //     }
        case FIND_PRODUCT_BY_ID:
            newState.products.selected = action.payload
            break
    }

    return { ...newState }
}

export default main

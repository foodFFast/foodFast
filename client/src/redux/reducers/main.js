import {
    ERROR,
    FETCH_CATEGORIES,
    FETCH_PRODUCTS,
    FETCH_SHOPS,
    FILTER_PRODUCTS,
    FIND_PRODUCT_BY_ID,
    FIND_SHOP_BY_ID,
    MAIN_TEST,
    RESET_PRODUCTS,
    RESET_TESTS
} from "../actions/types"

const initialState = {
    mainTest: "default",
    error: null,
    shops: {
        all: [],
        filtered: []
    },
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
    }
}

const main = (state = initialState, action) => {
    let newState = { ...state }

    switch (action.type) {
        default:
            break

        // TESTS

        case MAIN_TEST:
            newState.mainTest = "success"
            break

        case RESET_TESTS:
            newState.mainTest = "default"
            break

        case ERROR:
            newState.error = action.payload
            break

        // SHOPS

        case FETCH_SHOPS:
            newState.shops.all = action.payload
            break

        case FIND_SHOP_BY_ID:
            newState.shops.selected = action.payload
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

        case RESET_PRODUCTS:
            newState.products.all = []
            newState.products.filtered = []
            newState.categories.all = []
            break

        case FIND_PRODUCT_BY_ID:
            newState.products.selected = action.payload
            break
    }

    return { ...newState }
}

export default main

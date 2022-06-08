import {
    ERROR,
    FETCH_CATEGORIES,
    FETCH_PRODUCTS,
    FILTER_PRODUCTS,
    MAIN_TEST,
    RESET_PRODUCTS,
    RESET_TESTS
} from "../actions/types"

const initialState = {
    mainTest: "default",
    allCategories: [],
    error: null,
    allProducts: [],
    filteredProducts: []
}

const main = (state = initialState, action) => {
    let newState = { ...state }

    switch (action.type) {
        default:
            break

        case MAIN_TEST:
            newState.mainTest = "success"
            break

        case RESET_TESTS:
            newState.mainTest = "default"
            break

        case ERROR:
            newState.error = action.payload
            break

        case FETCH_CATEGORIES:
            newState.allCategories = action.payload
            break

        case FETCH_PRODUCTS:
            let combinedProducts = [
                ...state.allProducts,
                ...action.payload.product
            ]
            let uniqueProducts = [
                ...new Map(
                    combinedProducts.map((prod) => [prod._id, prod])
                ).values()
            ]
            newState.allProducts = uniqueProducts
            break

        case FILTER_PRODUCTS:
            newState.filteredProducts = []
            !!action.payload.length &&
                (newState.filteredProducts = [...action.payload])
            break

        case RESET_PRODUCTS:
            newState.allProducts = []
            newState.filteredProducts = []
            newState.allCategories = []
            break
    }

    return { ...newState }
}

export default main

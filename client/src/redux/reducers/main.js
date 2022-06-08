import {
    ERROR,
    FETCH_CATEGORIES,
    MAIN_TEST,
    RESET_TESTS
} from "../actions/types"

const initialState = {
    mainTest: "default",
    categories: [],
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
            newState.categories = action.payload
            break
    }

    return { ...newState }
}

export default main

import {
    CLEAN_CATEGORIES,
    CLEAN_PRODUCTS,
    CLEAN_SELECT_PRODUCT,
    DELETE_CATEGORY,
    DELETE_PRODUCT,
    ERROR,
    FETCH_CATEGORIES,
    FETCH_PRODUCTS,
    FILTER_BY_CATEGORY,
    FILTER_PRODUCTS,
    FIND_PRODUCT_BY_ID,
    SEARCH_CATEGORY,
    SEARCH_PRODUCT,
    SORTBYPRICE
} from "../actions/types"

function filterProduct(product, categories) {
    if (categories) {
        let arrayCategories = product.categories

        if (arrayCategories) {
            let counter = 0
            for (let i = 0; i < categories.length; i++) {
                for (let j = 0; j < arrayCategories.length; j++) {
                    if (arrayCategories[j] === categories[i]) {
                        counter++
                    }
                }
            }
            if (counter === categories.length) return true
            else return false
        }
        return false
    }

    return true
}

function compareProducts(a, b, form) {
    if (form === "1") {
        return a.price - b.price
    } else {
        return b.price - a.price
    }
}

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
    }
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
            newState.categories.filtered = action.payload
            break

        case SEARCH_CATEGORY:
            if (action.payload.error) {
                newState.categories.filtered = []
            } else {
                newState.categories.filtered = action.payload
            }
            break

        case CLEAN_CATEGORIES:
            newState.categories.filtered = newState.categories.all
            break

        case DELETE_CATEGORY:
            newState.categories.filtered = newState.categories.filtered.filter(
                (el) => el._id !== action.id
            )
            newState.categories.all = newState.categories.all.filter(
                (el) => el._id !== action.id
            )
            break

        // PRODUCTS

        case FETCH_PRODUCTS:
            newState.products.all = action.payload
            newState.products.filtered = action.payload
            break

        case SORTBYPRICE:
            newState.products.filtered = newState.products.filtered.filter(
                (a, b) => compareProducts(a, b, action.form)
            )
            break
        case CLEAN_SELECT_PRODUCT:
            newState.products.selected = {};
            break
        case FILTER_PRODUCTS:
            newState.products.filtered = []
            !!action.payload.length &&
                (newState.products.filtered = [...action.payload])
            break

        case FILTER_BY_CATEGORY:
            newState.products.filtered = newState.products.filtered.filter(
                (el) => filterProduct(el, action.categories)
            )
            newState.products.filtered = newState.products.filtered.sort(
                (a, b) => compareProducts(a, b, action.price)
            )
            break

        case SEARCH_PRODUCT:
            if (action.payload.error) {
                newState.products.filtered = []
            } else {
                newState.products.filtered = action.payload
            }
            break

        case DELETE_PRODUCT:
            newState.products.filtered = newState.products.filtered.filter(
                (el) => el._id !== action.id
            )
            newState.products.all = newState.products.all.filter(
                (el) => el._id !== action.id
            )
            break

        case CLEAN_PRODUCTS:
            newState.products.filtered = newState.products.all
            break

        case FIND_PRODUCT_BY_ID:
            newState.products.selected = action.payload
            break
    }

    return { ...newState }
}

export default main

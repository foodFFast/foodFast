import {
    SYNC_TEST_1,
    RESET_TESTS,
    MAIN_TEST,
    RESET_PRODUCTS,
    SWITCH_THEME,
    CLEAN_CATEGORIES,
    CLEAN_PRODUCTS,
    DELETE_CATEGORY,
    DELETE_PRODUCT,
    FILTER_BY_CATEGORY
} from "./types"



export const resetProducts = () => ({ type: RESET_PRODUCTS })

export const switchTheme = () => ({ type: SWITCH_THEME })

export const clean_categories = () => ({type: CLEAN_CATEGORIES})
export const clean_products = () => ({type: CLEAN_PRODUCTS})

export const delete_category = (id)=> ({type: DELETE_CATEGORY, id})
export const delete_product = (id) => ({type: DELETE_PRODUCT, id})

export const filterbyCategories = (categories) => ({type: FILTER_BY_CATEGORY, categories})
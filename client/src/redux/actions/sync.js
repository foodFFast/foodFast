import {
    SWITCH_THEME,
    CLEAN_CATEGORIES,
    CLEAN_PRODUCTS,
    DELETE_CATEGORY,
    DELETE_PRODUCT,
    FILTER_BY_CATEGORY,
    SORTBYPRICE,
    CLEAN_SELECT_PRODUCT
} from "./types"

export const switchTheme = () => ({ type: SWITCH_THEME })

export const clean_categories = () => ({ type: CLEAN_CATEGORIES })
export const clean_products = () => ({ type: CLEAN_PRODUCTS })

export const delete_category = (id) => ({ type: DELETE_CATEGORY, id })
export const delete_product = (id) => ({ type: DELETE_PRODUCT, id })
export const sortbyPrice = (price) => ({ type: SORTBYPRICE, price })

export const clean_select_product = () => ({type: CLEAN_SELECT_PRODUCT})

export const filterbyCategories = (categories, price) => ({
    type: FILTER_BY_CATEGORY,
    categories,
    price
})

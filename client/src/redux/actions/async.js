import axios from "axios"

import {
    ASYNC_TEST_1,
    ERROR,
    FETCH_CATEGORIES,
    FETCH_PRODUCTS,
    FETCH_SHOPS,
    FILTER_PRODUCTS,
    SEARCH_PRODUCT,
    FIND_PRODUCT_BY_ID,
    FIND_SHOP_BY_ID,
    SEARCH_CATEGORY
} from "./types"

// FUNCTIONS AND CONSTS

const baseUrl = `http://localhost:3001/api/v1`

const fetch = (url, type) => (dispatch) =>
    axios
        .get(url)
        .then((res) => dispatch({ type: type, payload: res.data }))
        .catch((err) => {
            console.log(`error en ${type} \n url = ${url} \n mensaje = ${err}`)
            dispatch({ type: ERROR, payload: err })
        })

// TESTS

export const runAsyncTest = () => (dispatch) => {
    dispatch({ type: ASYNC_TEST_1, payload: "waiting" })

    setTimeout(() => {
        dispatch({ type: ASYNC_TEST_1, payload: "success" })
    }, 5000)
}

// SHOPS

export const fetchAllShops = () => fetch(`${baseUrl}/store`, FETCH_SHOPS)

export const fetchShopById = (id) =>
    fetch(`${baseUrl}/store/${id}`, FIND_SHOP_BY_ID)

// PRODUCTS

export const fetchAllProducts = () =>
    fetch(`${baseUrl}/products`, FETCH_PRODUCTS)

export const fetchProductsByCat = (cat) =>
    fetch(`${baseUrl}/categories/category?name=${cat}`, FILTER_PRODUCTS)

export const searchProduct = (name) => 
    fetch(`${baseUrl}/products?name=${name}`, SEARCH_PRODUCT)


export const findProductById = (id) =>
    fetch(`${baseUrl}/products/${id}`, FIND_PRODUCT_BY_ID)

// CATEGORIES

export const fetchAllCategories = () =>
    fetch(`${baseUrl}/categories`, FETCH_CATEGORIES)
   
export const searchCategory = (name) => 
    fetch(`http://localhost:3001/api/v1/categories/category?name=${name}`, SEARCH_CATEGORY)

export const postCategory = (name) => (dispatch) =>
    axios
        .post(`${baseUrl}/categories`, { name })
        .then(() => dispatch(fetchAllCategories()))
        .catch((err) => dispatch({ type: ERROR, payload: err }))

export const deleteCategory = (id) => (dispatch) =>
    axios
        .delete(`${baseUrl}/categories/${id}`)
        .then(() => dispatch(fetchAllCategories()))
        .catch((err) => dispatch({ type: ERROR, payload: err }))

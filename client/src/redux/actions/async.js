import axios from "axios"

import {
    ERROR,
    FETCH_CATEGORIES,
    FETCH_PRODUCTS,
    FILTER_PRODUCTS,
    SEARCH_PRODUCT,
    FIND_PRODUCT_BY_ID,
    SEARCH_CATEGORY,
    NEWFILTER_PRODUCTS
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

// PRODUCTS

export const fetchAllProducts = () =>
    fetch(`${baseUrl}/products`, FETCH_PRODUCTS)

export const fetchProductsByCat = (cat) =>
    fetch(`${baseUrl}/categories/category?name=${cat}`, FILTER_PRODUCTS)

export const searchProduct = (name) =>
    fetch(`${baseUrl}/products?name=${name}`, SEARCH_PRODUCT)

export const findProductById = (id) =>
    fetch(`${baseUrl}/products/${id}`, FIND_PRODUCT_BY_ID)

export const newFilterProduct = (filterOrder, sortOrder) =>
    fetch(
        `${baseUrl}/products?filterOrder=${filterOrder}&sortOrder=${sortOrder}`,
        NEWFILTER_PRODUCTS
    )

// CATEGORIES

export const fetchAllCategories = () =>
    fetch(`${baseUrl}/categories`, FETCH_CATEGORIES)

export const searchCategory = (name) =>
    fetch(`${baseUrl}/categories/category?name=${name}`, SEARCH_CATEGORY)

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

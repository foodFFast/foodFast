import axios from "axios"

import {
    ASYNC_TEST_1,
    ERROR,
    FETCH_CATEGORIES,
    FETCH_PRODUCTS,
    FETCH_SHOPS,
    FILTER_PRODUCTS
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

// PRODUCTS

export const fetchAllProducts = () =>
    fetch(`${baseUrl}/products`, FETCH_PRODUCTS)

export const fetchProductsByCat = (cat) =>
    fetch(`${baseUrl}/categories/category?name=${cat}`, FILTER_PRODUCTS)

// CATEGORIES

export const fetchAllCategories = () =>
    fetch(`${baseUrl}/categories`, FETCH_CATEGORIES)

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

import axios from "axios"

import {
    ASYNC_TEST_1,
    ERROR,
    FETCH_CATEGORIES,
    FETCH_PRODUCTS,
    FILTER_PRODUCTS,
    POST_CATEGORY
} from "./types"

const baseUrl = `http://localhost:3001/api/v1`

const fetch = (url, type) => (dispatch) =>
    axios
        .get(url)
        .then((res) => dispatch({ type: type, payload: res.data }))
        .catch((err) => {
            console.log("error on fetch")
            dispatch({ type: ERROR, payload: err })
        })

// TESTS

export const runAsyncTest = () => (dispatch) => {
    dispatch({ type: ASYNC_TEST_1, payload: "waiting" })

    setTimeout(() => {
        dispatch({ type: ASYNC_TEST_1, payload: "success" })
    }, 5000)
}

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
        .then((res) => dispatch({ type: POST_CATEGORY, payload: res.data }))
        .then(() => dispatch(fetchAllCategories()))
        .catch((err) => dispatch({ type: ERROR, payload: err }))

import axios from "axios"

import { ASYNC_TEST_1, ERROR, FETCH_CATEGORIES } from "./types"

const baseUrl = `http://localhost:3001/api/v1`

export const runAsyncTest = () => (dispatch) => {
    dispatch({ type: ASYNC_TEST_1, payload: "waiting" })

    setTimeout(() => {
        dispatch({ type: ASYNC_TEST_1, payload: "success" })
    }, 5000)
}

export const fetchCategories = () => (dispatch) =>
    axios
        .get(`${baseUrl}/categories`)
        .then((res) => dispatch({ type: FETCH_CATEGORIES, payload: res.data }))
        .catch((err) => dispatch({ type: ERROR, payload: err }))

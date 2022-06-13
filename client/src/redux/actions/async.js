import axios from "axios"

import {
    ERROR,
    FETCH_CATEGORIES,
    FETCH_PRODUCTS,
    FILTER_PRODUCTS,
    FIND_PRODUCT_BY_ID,
    POST_LOGIN
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

export const findProductById = (id) =>
    fetch(`${baseUrl}/products/${id}`, FIND_PRODUCT_BY_ID)

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

//AUTH

// export function postLogin(input){
//     return async function(dispatch){
//       try{
//         const pedido=await axios.post(`http://localhost:3001/api/v1/auth/login`,input)
//         return dispatch({type:POST_LOGIN,
//                 payload:pedido.data})
//       }catch(e){
//         console.log(e)
//       }
//     }
//   }


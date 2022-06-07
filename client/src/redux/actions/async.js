import { ASYNC_TEST_1 } from "./types"

export const runAsyncTest = () => (dispatch) => {
    dispatch({ type: ASYNC_TEST_1, payload: "waiting" })

    setTimeout(() => {
        dispatch({ type: ASYNC_TEST_1, payload: "success" })
    }, 5000)
}

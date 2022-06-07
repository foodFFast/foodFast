import { ASYNC_TEST_1, RESET_TESTS, SYNC_TEST_1 } from "../actions/types"

const initialState = {
    syncTest: "default",
    asyncTest: "default"
}

const tests = (state = initialState, action) => {
    let newState = { ...state }

    switch (action.type) {
        default:
            break

        case SYNC_TEST_1:
            newState.syncTest = action.payload
            break

        case ASYNC_TEST_1:
            newState.asyncTest = action.payload
            break

        case RESET_TESTS:
            newState = initialState
            break
    }

    return { ...newState }
}

export default tests

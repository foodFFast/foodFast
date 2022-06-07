import { MAIN_TEST, RESET_TESTS } from "../actions/types"

const initialState = { mainTest: "default" }

const main = (state = initialState, action) => {
    let newState = { ...state }

    switch (action.type) {
        default:
            break

        case MAIN_TEST:
            newState.mainTest = "success"
            break

        case RESET_TESTS:
            newState.mainTest = "default"
            break
    }

    return { ...newState }
}

export default main

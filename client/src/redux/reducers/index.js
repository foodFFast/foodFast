import { combineReducers } from "redux"

import main from "./main"
import tests from "./tests"
import theme from "./theme"

export default combineReducers({
    main,
    tests,
    theme
})

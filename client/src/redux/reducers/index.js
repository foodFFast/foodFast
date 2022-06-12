import { combineReducers } from "redux"

import main from "./main"
import theme from "./theme"
import user from "./user"

export default combineReducers({
    main,
    theme,
    user
})

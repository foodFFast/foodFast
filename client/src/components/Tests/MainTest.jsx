import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { runMainTest } from "../../redux/actions/sync"

const MainTest = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.main)

    return (
        <div>
            main Test = {state.mainTest}
            <button onClick={() => dispatch(runMainTest())}>
                Run Main Test
            </button>
        </div>
    )
}

export default MainTest

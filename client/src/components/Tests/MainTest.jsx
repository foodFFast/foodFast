import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { runMainTest } from "../../redux/actions/sync"

const MainTest = () => {
    const dispatch = useDispatch()
    const mainTest = useSelector((state) => state.main.mainTest)

    return (
        <div>
            main Test = {mainTest}
            <button onClick={() => dispatch(runMainTest())}>
                Run Main Test
            </button>
        </div>
    )
}

export default MainTest

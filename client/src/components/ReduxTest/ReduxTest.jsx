import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { runAsyncTest } from "../../redux/actions/async"
import { resetTests, runSyncTest } from "../../redux/actions/sync"

const ReduxTest = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.tests)

    return (
        <div
            style={{
                padding: "1rem",
                backgroundColor: "lightgrey"
            }}
        >
            <table>
                <thead>
                    <tr>
                        <th>Redux Test</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>sync =</td>
                        <td>{state.syncTest}</td>
                    </tr>
                    <tr>
                        <td>async =</td>
                        <td>{state.asyncTest}</td>
                    </tr>
                </tbody>
            </table>

            <button
                onClick={() => {
                    dispatch(runSyncTest("waiting"))
                    dispatch(runSyncTest("success"))
                }}
            >
                Run Sync Test
            </button>

            <button onClick={() => dispatch(runAsyncTest())}>
                Run Async Test
            </button>

            <button onClick={() => dispatch(resetTests())}>Reset</button>
        </div>
    )
}

export default ReduxTest

import { useDispatch, useSelector } from "react-redux"
import "./App.css"
import ReduxTest from "./components/ReduxTest/ReduxTest"
import { runMainTest } from "./redux/actions/sync"

function App() {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.main)

    return (
        <div className="App">
            main Test = {state.mainTest}
            <button onClick={() => dispatch(runMainTest())}>
                Run Main Test
            </button>
            <h1>Food Fast</h1>
            <ReduxTest />
        </div>
    )
}

export default App

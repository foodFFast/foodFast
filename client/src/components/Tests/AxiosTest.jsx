import { useDispatch, useSelector } from "react-redux"
import { fetchCategories } from "../../redux/actions/async"

const AxiosTest = () => {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.main.categories)
    return (
        <div>
            <h1>AxiosTest</h1>

            <button onClick={() => dispatch(fetchCategories())}>
                Fetch Categories
            </button>
            <div>{JSON.stringify(categories, null, 4)}</div>
        </div>
    )
}

export default AxiosTest

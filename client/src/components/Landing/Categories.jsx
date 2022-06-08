import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchAllCategories } from "../../redux/actions/async"

const Categories = () => {
    const dispatch = useDispatch()
    const allCategories = useSelector((state) => state.main.allCategories)

    useEffect(() => {
        dispatch(fetchAllCategories())
    }, [dispatch])

    return (
        <div>
            <h1>Categorias</h1>
            {!!allCategories && (
                <div>
                    {allCategories.map((c) => (
                        <Link to={c._id} key={c._id}>
                            {c.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Categories

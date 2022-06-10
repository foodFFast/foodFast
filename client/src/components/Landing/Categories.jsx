import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Categories = () => {
    const allCategories = useSelector((state) => state.main.categories.all)

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

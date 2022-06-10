import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchProductsByCat } from "../../redux/actions/async"

const SingleCat = () => {
    const { idCategory } = useParams()

    const dispatch = useDispatch()
    const allCategories = useSelector((state) => state.main.categories.all)
    const filteredProds = useSelector((state) => state.main.products.filtered)

    useEffect(() => {
        if (!allCategories.length) return
        let selectedCat = allCategories.find((c) => c._id === idCategory)
        dispatch(fetchProductsByCat(selectedCat.name.toLowerCase()))
    }, [dispatch, idCategory, allCategories])

    return (
        <div>
            Categoria id = {idCategory}
            {!!filteredProds.length ? (
                <div>
                    {filteredProds.map((p) => (
                        <div key={p._id}>{p.name}</div>
                    ))}
                </div>
            ) : (
                <h3>No se encontraron productos bajo esa categoria</h3>
            )}
        </div>
    )
}

export default SingleCat

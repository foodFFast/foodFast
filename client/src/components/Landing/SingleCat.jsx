import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {
    fetchAllCategories,
    fetchProductsByCat
} from "../../redux/actions/async"

const SingleCat = () => {
    const { idCategory } = useParams()

    const dispatch = useDispatch()
    const allCategories = useSelector((state) => state.main.allCategories)
    const filteredProds = useSelector((state) => state.main.filteredProducts)

    useEffect(() => {
        /*
            ----------------- BUG EN SIGUIENTE LINEA !!! -----------------

            Bug: si el siguiente if no existiera, cuando estas en la pagina de
            una categoria en particular (pr ej: .../categories/[:idCategory]) y
            refrescas la pagina, te va a decir que no existen productos con esa
            categoria.

            TL;DR: el fetch de categorias esta en la pagina anterior, si refrescamos
            en esta pagina no se ejecuta. PUEDE PASAR EN OTRAS PAGINAS !!!

            Explicacion: los useEffects se ejecutan de adentro hacia afuera. eso
            significa que primero va a empezar a ejecutarse el useEffect de App.jsx
            (si tuviera), despues el de sus hijos y asi hasta llegar al useEffect 
            de esta pagina, que va a ser el primero en terminar de ejecutarse,
            luego va a terminar de ejecutarse el useEffect del padre de este elemento
            y asi sucesivamente hasta llegar a App.jsx, que ese va a ser el ultimo 
            en terminar de ejecutarse

            Solucion: mover todos los fetchs a App.jsx ???
        */
        if (!allCategories.length) dispatch(fetchAllCategories())

        let selectedCat = allCategories.find((c) => c._id === idCategory)
        selectedCat &&
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

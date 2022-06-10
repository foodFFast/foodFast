import React, { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    deleteCategory,
    fetchAllCategories,
    postCategory
} from "../../redux/actions/async"

const CategoriesTest = () => {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.main.categories.all)

    useEffect(() => {
        dispatch(fetchAllCategories())
    }, [dispatch])

    const initialFormState = { name: "" }

    const [form, setForm] = useState(initialFormState)

    const changeForm = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }

    const postCat = () => {
        if (!!form.name) {
            dispatch(postCategory(form.name))
            setForm(initialFormState)
        }
    }

    return (
        <div>
            <h1>Categories Test</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="name">Nombre nueva categoria = </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={changeForm}
                    placeholder="Pastas"
                />
                <button onClick={postCat}>Crear categoria</button>
                <button>Reset Form</button>
            </form>
            allCats ={" "}
            {!!categories.length &&
                categories.map((c) => (
                    <div key={c._id}>
                        {c.name}
                        <button onClick={() => dispatch(deleteCategory(c._id))}>
                            Delete
                        </button>
                    </div>
                ))}
        </div>
    )
}

export default CategoriesTest

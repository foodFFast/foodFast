import axios from "axios"
import { delete_category, delete_product } from "../../redux/actions/sync"

const baseUrl = "http://localhost:3001/api/v1"

export default function useDelete (dispatch) {

    const handleDelete = (type, id) => {
        if(type === "products") {
            dispatch(delete_product(id))
       } else if(type === "categories") {
           dispatch(delete_category(id))
       } 
        axios.delete(`${baseUrl}/${type}/${id}`)
        .then(()=> console.log("borrado XD"))
        .catch((err)=> console.log(err))
        
    }

    return {handleDelete}
}
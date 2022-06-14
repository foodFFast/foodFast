import axios from "axios"

export const PostCategoryImg = (img) => 
    fetch("http://localhost:3001/api/v1/categories/image", {
        method: 'POST',
        body: img
    })

export const PostCategory = (input, routeResponse) => 
    axios.post('http://localhost:3001/api/v1/categories', {
    name: input.name,
    description: input.description, 
    img: routeResponse.img
    })

export const CleanCategoryImputs = (setIsSend, setForm, setIsAvailable, setImgCharge) => {
    setTimeout(()=> {
        setIsSend(false)
      }, 5000)
    setForm({
      name: "",
      description: "",
      img: null
    })
    setIsAvailable(false)   
    setImgCharge(false)
    document.getElementById("imageCategory").value = null;
}
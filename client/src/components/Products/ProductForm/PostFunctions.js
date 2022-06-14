import axios from "axios"

export const PostProductImg = (img) => 
    fetch("http://localhost:3001/api/v1/products/image", {
        method: 'POST',
        body: img
    })

export const PostProduct = (form, routeResponse) => 
    axios.post('http://localhost:3001/api/v1/products', {
    name: form.name,
    description: form.description, 
    img: routeResponse.img,
    price: form.price,
    categories: form.categories,
    stock: form.stock
    })

export const CleanProductsInput = (setIsSend, setForm, setIsAvailable, setImgCharge) => {
    setTimeout(()=> {
        setIsSend(false)
      }, 5000)
    setForm({
      name: "",
      description: "",
      price: 0,
      stock: 0,
      img: null,
      categories: []
    })
    setIsAvailable(false)   
    setImgCharge(false)
    document.getElementById("fileinput").value = null;
}
                
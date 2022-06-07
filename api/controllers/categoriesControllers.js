
export const getAllCategories = ()=>{
    //model.find()
    return ([{name: "Pizzas", id: 1}, {name: "Pastas", id: 2}]);
}

export const getCategorieByName = (name)=>{
    //model.find({name});
    return ([{name: "nombre buscado"}, {name: "el mismo nombre"}]);
}
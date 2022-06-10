export const validateForm = (form) => {
    let errors = {}; 
    let name = form.name; 
    let description = form.description; 
    let tags = form.tags;
    let price = parseFloat(form.price); 
    if(!name) errors = {...errors, name: "Name is required"}
    else if(name.length <= 3) errors = {...errors, name: "Name must be have more to 3 characters"}

    if(!description) errors = {...errors, description: "Description is required"}
    else if(description.length <= 5) errors = {...errors, description: "Description must be have more to 5 characters"}

    // if(tags.length === 0) errors = {...errors, category: "Tag is requrired"}
    

    if(!price) errors = {...errors, price: "Invalid price"}
    else if (price < 0) errors= {...errors, price: "The price cannot be less than "}
    console.log(errors)
    return errors
}
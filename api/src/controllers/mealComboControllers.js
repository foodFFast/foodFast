import mealCombo from "../models/mealCombo.js"

export const getCombos = async(req, res)=>{
    const {name,filter, sortCombo, filterValue, filterCombo} = req.query
 try {
    if(name){
        const mealComboName = await mealCombo.find({ name: {$regex: name, $options:'i'}})
        return mealComboName.length === 0 ? res.json({error : "not found combo"}) : res.json(mealComboName)

    } else if((filter || sortCombo || filterValue || filterCombo)){
    const objFilter = {}
    objFilter[filter] = filterValue
    
    const objOrder = {}
    objOrder[filterCombo] = sortCombo

    const mealCombo = await mealCombo.find(objFilter).sort(objOrder)  
    return res.json(product.length === 0? "not found product" : mealCombo)

    }
    const getAllcombos = await mealCombo.find().populate("productsId",{
        storeId: 0,
        _id: 0,
        __v: 0,
    })
    return res.json({getAllcombos})

 } catch (error) {
    console.log(error)
    return res.json({error: "server error"})
}
}

export const postMealCombo = async(req,res)=>{
    const products = req.body
    console.log(products)
    try {
        let combo = await mealCombo.findOne({name: products.name})
        if(combo) return res.json({error: `repeated name ${combo.name}`}) 
      //  combo = new combo({products})
        combo = new mealCombo(products)
        await combo.save()
        return res.send(combo)
    } catch (error) {
        console.log(error)
        return res.json({error: "server error"})
    }

}

export const getComboId = async(req,res)=>{
    const id = req.params.id 
     try {
        let combo = await mealCombo.findById(id).populate("productsId",{
            storeId: 0,
            __v: 0,
        })
        return res.json(combo)
     } catch (error) {
        console.log(error)
     }
}

export const upDateCombo = async(req,res)=>{
    try {
        const id = req.params.id
        const upDates = req.body
        const combo = await mealCombo.findByIdAndUpdate(id, upDates)
        if (!combo) return res.json({err: "not found maleCombo"})
        return res.json({ok: "upDate maleCombo"})

    } catch (error) {
        console.log(error)
        return res.json({msg: "Error de servidor"})
    }   
}

export const deleteCombo = async(req,res)=>{
    const {id}=req.params
    const product=await mealCombo.findByIdAndRemove(id)
    return res.json({ok: "remove combo"})
}

export const offer = async(req,res)=>{
 try {
    const offer =  await  mealCombo.find()
    console.log(offer)
    return res.json(offer)
 } catch (error) {
    console.log(error)
 }
}
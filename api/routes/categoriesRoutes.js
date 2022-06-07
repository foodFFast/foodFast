import express from 'express';
import { getAllCategories, getCategorieByName } from '../controllers/categoriesControllers.js'

const categoriesRouter = express.Router()

import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://pizza-and-desserts.p.rapidapi.com/pizzas',
  headers: {
    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com',
    'X-RapidAPI-Key': 'a5ba07fc15msh500f6ca2ed52e44p15477fjsn75f8172e8305'
  }
};



categoriesRouter.get('/', (req,res)=>{
    try{
        let {name} = req.query
        if(name){
            let byName = getCategorieByName(name);
            if(byName){
                res.json(byName);
            }else{
                res.status(404).send("Categorie by name not found")
            }
        }

        var all = getAllCategories();
        if(all){
            res.json(all);
        }else{
            res.status(404).send("Categories not found")
        }
    }catch(e){
        console.log("Error en el getCategories. ", e.message);
    }
})

categoriesRouter.get('/api', (req, res)=>{
    axios.request(options).then(function (response) {
        res.json(response.data)
        console.log(response.data.data);
    }).catch(function (error) {
        console.error(error);
    });
})

export default categoriesRouter;
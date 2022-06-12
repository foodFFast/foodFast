import express from 'express';
import {getCombos, postMealCombo, getComboId,  upDateCombo, deleteCombo} from '../controllers/mealComboControllers.js'

const router = express.Router()

router.get('/',getCombos)

router.post('/',postMealCombo)

router.get('/:id', getComboId)

router.patch('/:id', upDateCombo)

router.delete('/:id', deleteCombo)




export default router;
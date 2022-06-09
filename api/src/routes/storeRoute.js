import express from 'express';

import {allStore, postStore, getStore} from '../controllers/storeControllers.js'

const router = express.Router()

<<<<<<< HEAD
//get  http://localhost:3001/api/v1/store
router.get('/', getStore)
=======
//get  http://localhost:3000/api/v1/store
router.get('/', allStore)

//get  http://localhost:3000/api/v1/store/:idStore
router.get('/:id', getStore)
>>>>>>> 10484027d7d776a63e9ded780c8b33aa96052e90

//post  http://localhost:3001/api/v1/store
router.post('/', postStore)


export default router;

import express from 'express'
import { indexCustomers } from '../controllers/customersController.js';

const router = express.Router()

router.get('/', indexCustomers);


export default router
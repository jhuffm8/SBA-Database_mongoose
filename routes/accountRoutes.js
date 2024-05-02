import express from 'express'
import { indexAccounts, createAccount } from '../controllers/accountController.js';

const router = express.Router()

router.get('/', indexAccounts);

router.post('/', createAccount)




export default router
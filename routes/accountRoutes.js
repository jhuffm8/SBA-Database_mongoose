import express from 'express'
import { indexAccounts, createAccount, getAccountId, deleteAccount, updateAccount } from '../controllers/accountController.js';

const router = express.Router()
//grab all accounts
router.get('/', indexAccounts);


//add new account
router.post('/', createAccount);

//grab a single account
router.get('/:id', getAccountId);

//delete a single account
router.delete('/:id', deleteAccount);

//update a single account
router.patch('/:id', updateAccount);







export default router
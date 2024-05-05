import Accounts from '../models/accountModels.js'
import mongoose from 'mongoose';

// grabbing 50 accounts from accounts collection
const indexAccounts = async (req, res) => {
    const result = await Accounts.find()
        .limit(50)
    res.json(result).status(200)
};

//grab single account
const getAccountId = async (req, res) => {

    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json({error: "Account does not exist"}).status(404)
    }
    const result = await Accounts.findById(id);


    if(!result){
       return res.json({error: "Account does not exist"}).status(400)
    }
    res.json(result).status(200)
};

// creating new account in account collection
const createAccount = async (req, res) => {
    const account_id = Math.floor(100000 + Math.random() * 900000);
    const {products, limit} = req.body;
    let doc = {
        account_id, products, limit
    }
    if(!doc.limit){
        delete doc.limit
    }
    try{
        const account = await Accounts.create(doc);
        res.json(account).status(200)

    } catch(err) {
        res.json({error: err.message}).status(400)
    }
};

const deleteAccount = async (req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json({error: "Account does not exist"}).status(404)
    }
    const result = await Accounts.findByIdAndDelete({_id: id});
    
    if(!result){
        return res.json({error: "Account does not exist"}).status(400)
     }
     res.json(result).status(200)

};

const updateAccount = async (req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json({error: "Account does not exist"}).status(404)
    }

    const result = await Accounts.findByIdAndUpdate({_id: id}, {
        ...req.body
    });
    if(!result){
        return res.json({error: "Account does not exist"}).status(400)
     }

     res.json(result).status(200)

};






export {indexAccounts, createAccount, getAccountId, deleteAccount, updateAccount}
import Accounts from '../models/accountModels.js'

const indexAccounts = async (req, res) => {
    const result = await Accounts.find()
        .limit(50)
    res.json(result).status(200)
};

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
}


export {indexAccounts, createAccount}
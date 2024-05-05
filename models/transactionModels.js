import mongoose from "mongoose";
import { ObjectId } from "bson";

const Schema = mongoose.Schema;

const transactionsSchema = new Schema ({
    account_id: {
        type: Number,
        required: true
    },
    transaction_count: {
        type: Number
    },
    bucket_start_date: {
        type: Date
    },
    bucket_end_date: {
        type: Date
    },
    transactions: {
        type: [Number]
    }
});

export default mongoose.model('Transactions', transactionsSchema);
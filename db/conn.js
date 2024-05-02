import mongoose from "mongoose";
import 'dotenv/config'

const connectionString = process.env.ATLAS_URI || ""

const db = await mongoose.connect(connectionString)

export default db;
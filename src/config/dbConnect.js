import mongoose from "mongoose";
mongoose.connect("mongodb+srv://marcosodev:marcosodev@cluster0.1gd5f6p.mongodb.net/marcos_node");

let db = mongoose.connection;

export default db;
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes/index.js";


mongoose.connect('mongodb+srv://admin:admin@cluster0.tybff.mongodb.net/on-the-aux', {
    autoIndex: true,
}).then(() => {
    console.log('Connected to MongoDB');
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

routes(app);

export default app;
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import taskRouter from "./routes/taskRoute.js";
import cors from "cors";

dotenv.config();
const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome from the server - everything is running smoothly");
})

// Enable CORS so frontend apps from other origins can access this API
app.use(cors());

//middleware
app.use(express.json());
app.use("/task",taskRouter); // All task-related routes will be prefixed with /task

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is runnning on PORT: ${PORT}`);
});
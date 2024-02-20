import express from "express"
import cors from "cors"
import "dotenv/config"
import  mongoose  from "mongoose";
import userRoutes from './routes/Users'
mongoose.connect(process.env.URI as string)

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use("/api/users",userRoutes)

app.listen(7000,()=>{
    console.log("server is running")
})
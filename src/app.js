import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}));

// json formated data 
app.use(express.json({limit:"16kb"}))
// url data:
app.use(express.urlencoded({extended:true,limit:"16kb"}))
// static files which anyone can access such as images: (public folder)
app.use(express.static("public"))
// manipulate cookies from users browser securely and only server can access and modify them:
app.use(cookieParser())


export {app};
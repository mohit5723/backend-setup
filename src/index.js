import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`listerning to port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log(`DB connection failed ${err}`)
})



// // iify

// (async()=>{
//     try {
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     } catch (error) {
//         console.log(error)
//         throw error
//     }
// })()
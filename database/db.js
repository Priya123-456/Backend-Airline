import mongoose from "mongoose";


const Connection= async ()=>{


    const URL='mongodb+srv://userPriya:PR566677766776677@airline.jgv7ewx.mongodb.net/?retryWrites=true&w=majority&appName=Airline'
    try{

     await   mongoose.connect(URL,{useUnifiedTopology:true}) 

     console.log("database connected successfully");


    }catch (error) {
        console.error('Error connecting to MongoDB', error);
       
      }

    
}
export default Connection
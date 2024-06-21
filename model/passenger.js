// passenger-model.js


import mongoose from 'mongoose';

const passengerSchema = new mongoose.Schema({
    gender: { type: String, required: true },
    title: { type: String, required: true },
    dob: { type: Date, required: true },
    givenName: { type: String, required: true },
    familyName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    flightId: { type: String, required: true },
    airlineCode: { type: String, required: true },
   
    totalExpenseINR: { type: Number, required: true }
  });

  
  

const Passenger = mongoose.model('People', passengerSchema);

export default Passenger;

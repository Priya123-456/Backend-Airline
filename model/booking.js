import  mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Order' 
      },
      flightId: {
        type: String,
        required: true
      },
      airlineCode: {
        type: String,
        required: true
      },
      fromCity: {
        type: String,
        required: true
      },
      toCity: {
        type: String,
        required: true
      },
      totalExpenseINR: {
        type: Number,
        required: true
      },
      arrivalTime: {
        type: String,
        required: true
      },
      departureTime: {
        type: String,
        required: true
      },
      givenName: {
        type: String,
        required: true
      },
      familyName: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      dob: {
        type: Date,
        required: true
      },
      gender: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true
      }
    });
  
const Booking = mongoose.model('Booking', bookingSchema);

export default Booking

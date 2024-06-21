
import Booking from '../model/booking.js';



 export const createbooking = async (req, res) => {
    try {
        console.log('Request body:', req.body); // Log the request body
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).send(booking);
      } catch (error) {
        console.error('Error creating booking:', error); // Log the error
        res.status(500).send({ message: 'Error creating booking', error });
      }
  };


  export const getbooking= async (req, res) => {
    try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error); // Log error to the backend terminal
    res.status(500).json({ message: 'Error fetching bookings', error: error.message }); // Send detailed error message to the frontend
  }
    
    
  };


  export const deleteBooking = async (req, res) => {
    try {
      await Booking.findByIdAndDelete(req.params.id);
      res.status(200).send({ message: 'Booking deleted successfully' });
    } catch (error) {
      console.error('Error deleting booking:', error);
      res.status(500).send({ message: 'Error deleting booking', error });
    }
  };
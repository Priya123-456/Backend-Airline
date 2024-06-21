import express from "express";

import {addUser,getUsers} from "../controller/user-controller.js"
import {savePassengerDetails,getPassengerById} from '../controller/passengerDetail.js';
import {createbooking, getbooking,deleteBooking} from "../controller/bookingSave.js";

const router = express.Router();




router.post('/add' ,addUser)
router.get('/user/:userId',getUsers)
router.post('/passenger',savePassengerDetails);
router.get('/passenger/:passengerId', getPassengerById);

router.post('/booking', createbooking);
router.get('/people',getbooking);
router.delete('/booking/:id', deleteBooking);
export default router;



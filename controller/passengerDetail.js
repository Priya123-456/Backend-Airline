

import Passenger from '../model/passenger.js';



export const savePassengerDetails = async (req, res) => {
    try {

        
        
        const newPassenger = new Passenger(req.body);
        await newPassenger.save();
        res.status(201).json(newPassenger); 
      } catch (error) {
        console.error('error saving passemger ',error);
        res.status(500).json({ error: error.message });
      }
    };

    export const getPassengerById = async (req, res) => {
        try {
            const passenger = await Passenger.findById(req.params.passengerId);
            if (!passenger) {
                return res.status(404).json({ message: 'Passenger not found' });
            }
            res.status(200).json(passenger);
        } catch (error) {
            console.error('Error fetching passenger:', error);
            res.status(500).json({ error: error.message });
        }
    };
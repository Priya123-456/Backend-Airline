














import express from 'express';
import axios from'axios';
import bodyParser from 'body-parser';
import cors from 'cors';

import Connection from './database/db.js';
import Route from './router/routes.js';

//require('dotenv').config();

const app = express();
const PORT = 8000;
//app.use('/api/passenger',Route);



//app.use(bodyParser.json());
Connection();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


  
app.use('/', Route);




// Endpoint to handle flight search
app.post('/api/search-multi-city', async (req, res) => {
  const {fromCity1, toCity1, departDate1,adults} = req.body;
  console.log('Request Data:', fromCity1, toCity1, departDate1,adults); // Log request data for debugging
  try {
    const accessToken = await getAccessToken(); // Get access token from Amadeus API
    console.log('Access token:', accessToken);
    const flights1 = await searchFlights(accessToken, fromCity1, toCity1, departDate1,adults);
    console.log('Flights:', flights1);

    // Combine and send back response
    res.json({ flights: flights1 });
  } catch (error) {
    console.error('Error searching flights:', error);
    res.status(500).json({ error: 'Failed to search flights' });
  }
});

// Function to fetch access token from Amadeus API
async function getAccessToken() {
  try {
    const response = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token',
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: 'zE8JR61fUSTvEKqNAfCdVMOAe2tFARiT',
        client_secret: 'Tb6jtW1IlEz0kwGA',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error.response.data);
    throw error;
  }
}

// Function to search flights based on parameters
async function searchFlights(accessToken, fromCity1, toCity1, departDate1,adults) {
    try {
        const url=`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${fromCity1}&destinationLocationCode=${toCity1}&departureDate=${departDate1}&adults=${adults}`;
        console.log('URL:', url);
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error searching flights:', error.response.data);
        throw error;
    }
}

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

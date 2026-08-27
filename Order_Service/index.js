const express = require('express');
const axios = require('axios');
const app = express();

// Set the port based on your requirements (e.g., 3002 for Order service)
const PORT = 3002;
const HOST = '0.0.0.0'
app.use(express.json());

// API - addorder
app.post('/addorder', async (req, res) => {
    console.log("add order API was hit! calling Payment API...");

try{
    //Calling Payment Process API
    const paymentResponse = await axios.post('http://localhost:3003/paymentprocess')
    const paymentStatus = paymentResponse.status === 200 ? 'Success' : 'Failure';

    console.log(`Order API: Payment responded with ${paymentStatus}. Calling Notification API...`);

    //Calling Notification Service API based on success/failure
    const notificationResponse = await axios.post('http://localhost:3004/sendnotification', {
            status: paymentStatus,
            message: `Your payment was a ${paymentStatus}.`
    });

    // 3. Return final response to User
        res.send(`addorder API completed. Payment: ${paymentStatus}. Notification sent.`);
} catch (error) {
        console.error("Order API: Process failed.", error.message);
        
        // Handle Failure Notification
        try {
            await axios.post('http://localhost:3004/sendnotification', {
                status: 'Failure',
                message: 'Your payment process failed.'
            });
        } catch (notifyError) {
            console.error("Notification Service is down.");
        }
        
        res.status(500).send('addorder API failed during processing.');
    }
});

// API - vieworder
app.get('/vieworder', (req, res) => {
    console.log("view order API was hit!")
    res.send("vieworder API called successfully.");
});

// API - cancelorder
app.delete('/cancelorder', (req, res) => {
    console.log("cancel order API was hit!")
    res.send("cancelorder API called successfully.");
});

app.listen(PORT, () => {
    console.log(`Order Microservice is listening on port ${PORT}, ${HOST}`);
});
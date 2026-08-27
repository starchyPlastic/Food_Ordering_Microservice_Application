const express = require('express');
const app = express();

// Set the port based on your requirements (e.g., 3004 for Notification service)
const PORT = 3004;
const HOST = '0.0.0.0'
app.use(express.json());
// API - sendnotification

app.post('/sendnotification', (req, res) => {
    console.log("Send notification API was hit!");
    const status = req.body.status;
    const message = req.body.message;

    // Log it to the terminal so you can see it working!
    console.log(`Notification Service triggered!`);
    console.log(`Status: ${status}`);
    console.log(`Message to user: ${message}`);

    //Send a response back to the Order Service confirming receipt
    res.send(`sendnotification API is being called. Processed a ${status} notification.`);
});


app.listen(PORT, HOST, () => {
    console.log(`Notification Microservice is listening on port ${PORT}, ${HOST}`);
});
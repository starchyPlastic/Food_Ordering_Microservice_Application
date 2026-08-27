const express = require('express');
const app = express();

// Set the port based on your requirements (e.g., 3003 for Payment service)
const PORT = 3003;
const HOST = '0.0.0.0'

app.use(express.json());
// API - paymentprocess
app.post('/paymentprocess', (req, res) => {
    console.log("payment process API was hit!");
    res.send("paymentprocess API called successfully.");
});


app.listen(PORT, HOST, () => {
    console.log(`Payment Microservice is listening on port ${PORT}, ${HOST}`);
});
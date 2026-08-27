const express = require('express');
const app = express();

// Set the port based on your requirements (e.g., 3001 for Restaurant service)
const PORT = 3001;
const HOST = '0.0.0.0'

// API - viewallrestaurant

app.get('/viewallrestaurant', (req, res) => {
    console.log("view all restaurants API was hit!");
    res.send("viewallrestaurant API called successfully.");
});

// API - searchrestaurant
app.get('/searchrestaurant', (req, res) => {
    console.log("search restaurant API was hit!")
    res.send("searchrestaurant API called successfully.");
});

app.listen(PORT, () => {
    console.log(`Restaurant Microservice is listening on port ${PORT}, ${HOST}`);
});

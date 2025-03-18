var express = require("express")
const path = require('path');
var app = express()
var port = process.env.port || 3000;

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// In-memory array to store quotes
let quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do not wait to strike till the iron is hot; but make it hot by striking."
    ];

// GET endpoint to retrieve a random quote
// Usage example: http://localhost:3000/api/quote
app.get('/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json({ quote: quotes[randomIndex] });
});

// Define a GET endpoint at '/square' that calculates the square of a number.
// The endpoint expects a query parameter 'num', e.g., /square?num=5
app.get('/square', (req, res) => {
    // Extract the 'num' query parameter from the request and convert it to a floating point number.
    const num = parseFloat(req.query.num);
    // Check if 'num' is not a valid number. If it's not, send an error message as the response.
    if (isNaN(num)) {
    return res.send("Error: Please provide a valid number using query parameter 'num'.");
    }
    // Calculate the square of the number.
    const square = num * num;
    // Send a plain text response showing the result.
    res.send(`The square of ${num} is: ${square}`);
});

/*app.get('/', (req, res) => {
    res.send('Hello World!');
});*/

app.listen(port,()=>{
    console.log("App listening to: "+port)
});
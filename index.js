const express = require("express");

// Create an Express application
const app = express();

// Define a route handler for the root path
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Define the port number
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

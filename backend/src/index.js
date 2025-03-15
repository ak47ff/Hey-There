import express from "express";
import authRoutes from "./routes/auth.route.js";

const app = express();

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

// Using the auth route
app.use("/api/auth", authRoutes);

// Start the server
app.listen(5001, () => {
  console.log("Server is running on port 5001");
});

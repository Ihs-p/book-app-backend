const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// CORS Configuration
app.use(cors({
  origin: ['http://localhost:5173', 'https://book-app-frontend-zeta.vercel.app'], // Allow requests from this frontend origin
  credentials: true,               // Allow credentials (cookies, authorization headers)
}));

// Routes
const bookRouter = require("./src/books/book.route");
const orderRouter = require("./src/orders/order.route");
const userRouter = require("./src/users/user.route")
const adminRouter = require("./src/stats/admin.stats")

app.use('/api/books', bookRouter);
app.use('/api/orders', orderRouter);
app.use('/api/auth', userRouter);
app.use('/api/admin', adminRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Database connection
async function main() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Database connection error', err);
  }
}

main();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

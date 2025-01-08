
require('dotenv').config();
const cors = require('cors'); 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const propertyRoutes = require('./routes/propertyRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;


//cors
app.use(cors({
  origin: function (origin, callback) {
      const allowedOrigins = ['http://localhost:5173'];
      if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));


// Middleware
app.use(express.json());



// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Routes
app.use('/api/properties', propertyRoutes);
app.use('/api/users', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

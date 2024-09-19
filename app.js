const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://rakeshbade55:<Rakesh@55>@cluster0.dr3be.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const billRoutes = require('./routes/bills');

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/bills', billRoutes);

// Start Server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

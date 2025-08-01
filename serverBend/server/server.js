


import express from 'express';
import mongoose from 'mongoose';
import contactRoutes from './routes/contactRoutes.js';
import userRoutes from './routes/userRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import authRoutes from './routes/authRoutes.js';

import path from 'path';
import { fileURLToPath } from 'url';

import dotenv from 'dotenv';

//create dirname for equivalent to ES modules
const _filename = fileURLToPath(import.meta.url);
const _dirname =path.dirname(_filename);

// Load environment variables
dotenv.config();
console.log('JWT_SECRET:', process.env.JWT_SECRET);

const app = express();


// MongoDb connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'MongoDB connection error'));
connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Welcome to the Portfolio Backend!');
});

// API routes
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/data', (req, res) => {
  res.status(200).json({ message: 'Welcome to my portfolio' });
});
app.use(express.static(path.join(_dirname, '../react-portfolio/dist')));
app.get ('*',(req,res)=> {
  res.sendFile(path.join(_dirname, '../react-portfolio/dist/index.html'))
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

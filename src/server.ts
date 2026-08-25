import express from 'express';
import cors from 'cors';
import adminRoutes from './routes/admin.js';

const app = express();

app.use(cors());

app.use('/admin', adminRoutes);

app.listen(3000,() => {
  console.log('Server is running on port 3000');
});


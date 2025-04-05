import express from 'express';
import adminRoutes from './routes/adminRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(express.json());
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
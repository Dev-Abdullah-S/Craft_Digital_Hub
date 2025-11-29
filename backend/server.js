import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ConnectDB from './common/DB.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/user' , (await import('./user.route.js')).default)
app.use('/api/query' , (await import('./query.route.js')).default)


app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on http://${process.env.HOST}:${process.env.PORT}`);
    ConnectDB();
})
import express from 'express';
import cors from 'cors';

import Connection from './database/db.js';
import Routes from './route/route.js'

const app=express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', Routes);

Connection();

const PORT=5500;
app.listen(5500, () => console.log("Server running on port 5500"));

app.listen(PORT, () => console.log('Your server is running successfully on PORT'));
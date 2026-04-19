import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { config } from 'dotenv'
config({ path: './src/.env' })

import connectDB from './lib/db.js'
import AUTH_ROUTER from './Routes/auth.route.js'
import MESSAGE_ROUTER from './Routes/message.route.js'

const app = express()
const ALLOWED_ORIGINS = ['http://localhost:5173']
const port = process.env.PORT;

app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: ALLOWED_ORIGINS,
    credentials: true
}))

app.use('/api/auth', AUTH_ROUTER)
app.use('/api/message', MESSAGE_ROUTER)

app.get('/', (req, res) => {
    res.send("Hello from Server")
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port : ${port}`);
    connectDB();
})
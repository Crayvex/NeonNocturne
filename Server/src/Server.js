import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { config } from 'dotenv'
config({ path: './src/.env' })

import authRoutes from './Routes/auth.route.js'
import connectDB from './lib/db.js'

const app = express()
const ALLOWED_ORIGINS = ['http://localhost:5173']
const port = process.env.PORT;

app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: ALLOWED_ORIGINS,
    Credential: true
}))

app.use('/api/auth', authRoutes)

app.listen(port, () => {
    console.log(`Server running on port : ${port}`);
    connectDB();
})
import express, { urlencoded } from 'express'
import chalk from 'chalk'
import morgan from 'morgan'     
import connectToDB from './db/mongodb.js'
import errorHandler from './error/errorHandler.js'
import postRouter from '../src/routes/postRouter.js'

const PORT = process.env.PORT || 8000

const app = express()


app.use(express.json())  
app.use(morgan('dev'))

app.use('/posts', postRouter)

app.use(errorHandler)
const start = async () => {
  try {
    await connectToDB(process.env.DB_URL).then(() => console.log(chalk.magenta.bold('DB connected')))
    app.listen(PORT, () => console.log(chalk.cyanBright.bold(`Server up on Port ${PORT}`))) 
  } catch (error) {
    console.error(error)
  }
}

start()
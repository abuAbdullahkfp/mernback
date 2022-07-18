      import CustomError from './CustomError.js'

const errorHandler = (err, req, res, next) => {
    if (err.name === 'ValidationError') {
      return res.status(err.status).json(err.errors.message)
    }
    if (err.name === 'CastError') {
      return res.status(404).json('not found')
    }
    if (err.code === 11000) {
      return res.status(404).json(err.message)
    }
    if (err instanceof CustomError) {
      return res.status(err.status).json({error: err.message})
    }
    res.status(500).json(err.message)
}


export default errorHandler
<<<<<<< HEAD
import { ValidationError } from '../utils/errors/AppError.js'
=======
import { validationError } from '../utils/errors/AppError.js'
>>>>>>> 95507b70c05d8a1d6764016fcfd3aadec2cd03a9

const validateMiddleware = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body)
        if (error) {
            throw new ValidationError(error.details[0].message)
        }
        next()
    }
}

export default validateMiddleware
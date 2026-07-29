const validateMiddlewareTemplate = (schema) => {
    return `import { validationError } from '../../../src/utils/errors/AppErrorTemplate.js'
    
    const validateMiddleware = (${schema}) => {
        return (req, res, next) => {
            const { error } = ${schema}.validate(req.body)
            if (error) {
                throw new validationError(error.details[0].message)
            }
            next()
        }
    }
    
    export default validateMiddleware`
}

export default validateMiddlewareTemplate;
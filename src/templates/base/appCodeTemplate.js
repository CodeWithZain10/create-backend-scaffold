const appCodeTemplate = (includeAuthentication) => {
    return `import express from 'express'
import cors from 'cors'
 ${includeAuthentication ? "import authRoutes from './routes/auth.routes.js'" : "" }
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())


${includeAuthentication ? "app.use('/api/auth', authRoutes)" : "" }


export default app`
}

export default appCodeTemplate;
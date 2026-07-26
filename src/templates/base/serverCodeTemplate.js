const serverCodeTemplate = () => {
    return `import dotenv from 'dotenv'
dotenv.config()
import app from './src/app.js' 
import connectDB from './src/config/db.js'

connectDB()


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

`
}

export default serverCodeTemplate;
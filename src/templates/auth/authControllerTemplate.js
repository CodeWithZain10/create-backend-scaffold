const authControllerTemplate = () => {
    return `import userModel from '../models/user.model.js'
import jwt from 'jsonwebtoken'

export const registerUser = async (req, res) => {

    const {username, email, password} = req.body

    if(!username || !email || !password){
        return res.status(400).json({message: 'Please provide all required fields'})
    }

    const isUserAlreadyExists = await userModel.findOne({email})

    if(isUserAlreadyExists) {
        return res.status(422).json({message: 'User already exists'})
    }

    const user = await userModel.create({
        username, 
        email, 
        password
    })



    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, { expiresIn: '3d'})

    res.cookie("token", token)


     res.status(201).json({
        message: "User created successfully",
        user: {
            _id: user._id,
            user: user.username,
            email: user.email
        },
        token: token
    })



}

export const loginUser = async (req, res) => {

    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({message: 'Please provide all required fields'})
    }

    const user = await userModel.findOne({email}).select("+password")

    if(!user) {
        return res.status(404).json({message: 'User not found'})
    }

    const isPasswordCorrect = await user.comparePassword(password)

    if(!isPasswordCorrect) {
        return res.status(401).json({message: 'Invalid credentials'})
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, { expiresIn: '3d'})

    res.cookie("token", token)

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            _id: user._id,
            user: user.username,
            email: user.email,
            password: user.password, 
            },
            token: token
        })

}


export const logoutUser = async (req, res) => {

    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]

    if(!token) {
        return res.status(401).json({message: 'Unauthorized'})
    }

    res.clearCookie("token")

    res.status(200).json({message: "User logged out successfully"})

}`
}

export default authControllerTemplate;
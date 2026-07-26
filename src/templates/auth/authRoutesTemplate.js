const authRoutesTemplate = () => {
    return `import express from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', authMiddleware, logoutUser);

export default router;`
}

export default authRoutesTemplate;
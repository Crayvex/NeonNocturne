import jwt from 'jsonwebtoken';          // ✓ default import, not named
import User from '../Models/user.model.js';

export const USER_CHECK = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized — no token provided' });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId).select('-password');

        if (!user) {
            return res.status(401).json({ error: 'Unauthorized — user not found' });
        }

        req.user = user;

        next();

    } catch (error) {
        console.error('Error in USER_CHECK middleware:', error.message);
        return res.status(401).json({ error: 'Unauthorized — invalid token' });
    }
};
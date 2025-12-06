const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const beareToken = req.headers['authorization'];
    if (!beareToken) {
        return res.status(401).json({success: false, message: "No token provided", data:{}});
    }

    const token = beareToken.split(' ')[1];

    if (!token) {
        return res.status(401).json({success: false, message: "Invalid token", data:{}});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({success: false, message: "Failed to authenticate token", data:{}});
        }   

        req.userId = decoded.id;
        req.userRole = decoded.role;
        next();

    });
}

const isValidToken = (token) => {
    try {
        jwt.verify(token, process.env.JWT_SECRET), (err) => {
            if (err) {
                return false;
            }
            return true;
        }
    } catch (error) {
        return false;
    }
};

module.exports = { verifyToken, isValidToken };
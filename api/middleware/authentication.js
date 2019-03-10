const jwt = require("jsonwebtoken");

const jwtKey =
  process.env.JWT_SECRET || "defeating a sandwich only makes it tastier";

module.exports = {
  authenticate,
  generateToken
};

function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtKey, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ success: false, message: "Invalid token." });
      } else {
        req.token = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Unauthorized to view this page. No token provided."
    });
  }
}

function generateToken(user) {
  const payload = {
    subject: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  };

  const secret = jwtKey;

  const options = {
    expiresIn: "60m"
  };

  return jwt.sign(payload, secret, options);
}

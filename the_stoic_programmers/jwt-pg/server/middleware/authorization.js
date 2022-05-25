const jwt = require("jsonwebtoken");

module.exports = async function authorization(req, res, next) {
  try {
    // 1. Get token from header.
    const token = req.header("token");
    if (!token) {
      return res.status(401).json({ msg: "Not Authorize." });
    }

    // 2. Verify token
    const payload = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    if (!payload || !payload.user || !payload.user.id) {
      return res.status(401).json({ msg: "Not Authorize." });
    }
    req.user = payload.user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json(error);
  }
};

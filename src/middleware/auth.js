const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const auth = req.headers.authorization;

  if(!auth?.startsWith("Bearer ")) {
    return next(new Error("Invalid or non existent authorization header"));
  }

  const token = auth.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const { id, username } = payload;

    req.user = { id, username };

    next();
  } catch(err) {
    next(err);
  }
}

module.exports = auth;
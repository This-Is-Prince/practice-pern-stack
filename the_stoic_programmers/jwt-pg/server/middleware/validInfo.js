module.exports = function validateInfo(req, res, next) {
  const { email, name, password } = req.body;
  function validEmail(user_email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user_email);
  }

  if (req.path === "/signup") {
    if (!name) {
      return res.status(401).json({ msg: "Please send the name." });
    } else if (!email) {
      return res.status(401).json({ msg: "Please send the email." });
    } else if (!validEmail(email)) {
      return res.status(401).json({ msg: "Invalid Email." });
    } else if (!password) {
      return res.status(401).json({ msg: "Please send the password." });
    }
  } else if (req.path === "/login") {
    if (!email) {
      return res.status(401).json({ msg: "Please send the email." });
    } else if (!validEmail(email)) {
      return res.status(401).json({ msg: "Invalid Email." });
    } else if (!password) {
      return res.status(401).json({ msg: "Please send the password." });
    }
  }
  next();
};

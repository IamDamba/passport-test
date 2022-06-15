const authController = {
  getFailure: (req, res) => {
    res.send("Something went wrong...");
  },
  getProtectedRoute: (req, res) => {
    res.send(`Welcome ${req.user.displayName}!`);
  },
  getLogout: (req, res) => {
    req.logout();
    res.clearCookie("session.sig");
    res.clearCookie("session");
    res.redirect("http://localhost:3000/login");
  },
};

module.exports = authController;

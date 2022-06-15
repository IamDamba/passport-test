const router = require("express").Router();
const passport = require("passport");
const authController = require("../controllers/authController.js");
const authMW = require("../middlewares/authMW");

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/api/auth/protected",
    failureRedirect: "/api/auth/failure",
  })
);

router.get("/failure", authController.getFailure);
router.get("/protected", authMW, authController.getProtectedRoute);
router.get("/logout", authController.getLogout);

module.exports = router;

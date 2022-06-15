//|||||||||||||||||||||||||||||||||| Dependences ||||||||||||||||||||||||||||||||||

const express = require("express");
const authRoute = require("./back/routes/authRoutes");
const session = require("cookie-session");
const cors = require("cors");
const passport = require("passport");
require("./passport");

const app = express();
const port = process.env.PORT || 3001;

//|||||||||||||||||||||||||||||||||| Middlewares ||||||||||||||||||||||||||||||||||

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PATCH, PUT, DELETE",
    credentials: true,
  })
);
app.use(
  session({
    secret: "cats",
  })
);
app.use(passport.initialize());
app.use(passport.session());

//|||||||||||||||||||||||||||||||||| Routes ||||||||||||||||||||||||||||||||||

app.use("/api/auth", authRoute);

//|||||||||||||||||||||||||||||||||| Listen ||||||||||||||||||||||||||||||||||

app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});

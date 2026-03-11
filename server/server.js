const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

/* -------- MongoDB Connection -------- */

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

/* -------- Home Route -------- */

app.get("/", (req, res) => {
  res.send("Movie Booking Backend Running");
});

/* -------- Register API -------- */

app.post("/register", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    // check duplicate email
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already registered. Please login." });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    res.json({ message: "User registered successfully" });

  } catch (error) {

    console.log(error);
    res.status(500).json({ message: "Server error" });

  }

});

/* -------- Login API -------- */

app.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    // check email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Email not registered. Please register first." });
    }

    // check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    // create token
    const token = jwt.sign(
      { userId: user._id },
      "secretkey",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token: token,
      user: {
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {

    console.log(error);
    res.status(500).json({ message: "Server error" });

  }

});

/* -------- Start Server -------- */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
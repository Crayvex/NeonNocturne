import bcrypt from "bcryptjs";
import User from "../Models/user.model.js";
import generateToken from "../lib/generateToken.js";

// ─── SIGNUP ─────────────────────────────────────────────────────────────────
export const SIGNUP = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // 1. Validate all fields are present
    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // 2. Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    // 3. Validate password strength
    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters" });
    }

    // 4. Validate username length
    if (username.length < 3 || username.length > 30) {
      return res
        .status(400)
        .json({ error: "Username must be between 3 and 30 characters" });
    }

    // 5. Check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ error: "Email already in use" });
    }

    // 6. Check if username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(409).json({ error: "Username already taken" });
    }

    // 7. Hash password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 8. Create the new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // 9. Save & issue JWT
    await newUser.save();
    generateToken(newUser._id, res);

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.error("Error in signup controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ─── LOGIN ───────────────────────────────────────────────────────────────────
export const LOGIN = async (req, res) => {
  const { email, password } = req.body;
  try {
    // 1. Validate all fields are present
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // 2. Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      // Intentionally vague to prevent user enumeration attacks
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // 3. Verify password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // 4. Issue JWT
    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.error("Error in login controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ─── LOGOUT ──────────────────────────────────────────────────────────────────
export const LOGOUT = async (req, res) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development",
    });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in logout controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const GET_USER = async (req, res) => {
  try {
    const username = req.body.username || req.query.username;

    if (!username)
      return res
        .status(400)
        .json({ success: false, message: "Username Required" });

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res
      .status(200)
      .json({
        message: "User Found",
        user:{
            username: user.username,
            email: user.email,
            profilePic: user.profilePic
        }
      });
  } catch (e) {
    return res.json({success: false, message: e.message})
  }
};

export const CHECK_AUTH = async (req, res) => {
  try {
    const user = req.user;

    if(!user) return res.status(401).json({success: false, message: 'User NOT authorized'})
    
    return res.json({success: true, message: 'User Authorized', user})
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({success: false, message: 'Internal server error'})
  }
};
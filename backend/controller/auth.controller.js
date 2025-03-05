import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      throw new Error("All fields are required");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User email already exists",
      });
    }
    //Hashing password
    const hashed = await bcrypt.hash(password, 10);

    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const user = new User({
      name,
      email,
      password: hashed,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, //24 hours
    });

    await user.save();

    //jwt
    generateTokenAndSetCookie(res, user._id);

    res.status(200).json({
      success: true,
      message: "User created Successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "SignUp Error",
    });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password); //comparing entered password and database saved password

    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

    generateTokenAndSetCookie(res, user._id);

    user.lastSignIn = new Date();
    await user.save();

    res.status(200).json({
      success: true,
      message: "Signed in successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const signout = async (req, res) => {
  res.clearCookie("authToken");
  res.status(200).json({
    success: true,
    message: "Signout Successful",
  });
};

export const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("Error in checkAuth ", error);
    res.status(400).json({ success: false, message: error.message });
  }
<<<<<<< HEAD
};
=======
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Logged out successfully" });
};
>>>>>>> d98c783 (pushing final code)

import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const registerUser = async (req, res) => {

    console.log("Hello I am working in Register USER....!!!");
    


    try {

        const { email, name, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "Email address already in use."})
        }

        const salt = await bcrypt.genSalt(10);

        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            email,
            password: hashPassword,
            name,
        });

        // TODO: send email.
        const verificationToken = jwt.sign(
          { userId: newUser._id, property: "email-verification" },
            process.env.JWT_SECRET,
          { expiresIn: "1h"},
        );


        
        res.status(201).json({
            message: "Verification email is send to your email. Please check and verify your account."
        });
        
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Internal server error.",
        });
        
    }
};



const loginUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal server error.",
    });
  }
};

export { registerUser, loginUser };

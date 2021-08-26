import bcrypt from 'bcryptjs'; // Hashes user information.
import jwt from 'jsonwebtoken'; // JSON Web Token to store in local storage.

import User from '../models/user.js';

export const signin = async (req, res) => {
    // email, password
    const { email, password } = req.body; // destructure them from req.body

    try {
        const existingUser = await User.findOne({ email }); // If the user email is in our database.
        
        if(!existingUser) return res.status(404).json({ message: "User does not exist." }); // If the user isn't in our database.

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password); // Use bcrypt to compare passwords.

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." }); // If the password is incorrect.

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}

export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {
        // Can't create an account if there is already an existing user email.
        const existingUser = await User.findOne({ email }); // If the user email is in our database.
        
        if(existingUser) return res.status(400).json({ message: "User already exists." });

        if(password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match "});

        const hashedPassword = await bcrypt.hash(password, 12); // Password and level of hash difficulty.

        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

        const token = jwt.sign({ email: result.email, id: result._id }, 'test' , { expiresIn: "1h" } );

        res.status(200).json({ result, token });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}
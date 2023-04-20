import User from "../model/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const signUp= async (req, res, next) => {
    const {username, email, password}= req.body;
    let existingUser;
    try {
        existingUser= await User.findOne({email});
    } catch (err) {
        return console.log(err);
    }
    if(existingUser) {
        return res.status(400).json({message:'User Already exists! Login instead'});
    }
    const hashedPassword= bcrypt.hashSync(password)

    const newuser= new User({
        username,
        email,
        password:hashedPassword
    });
    
    try {
        await newuser.save()
    } catch (err) {
        return console.log(err);
    }
    return res.status(201).json({ newuser });

}

export const Login= async ( req, res, next )=>{
    const { username, password} = req.body;
    let existingUser;
    try {
        existingUser= await User.findOne({username});
    } catch (err) {
        return console.log(err);
    }
    if(!existingUser) {
        return res.status(404).json({message:"Couldn't Fnd User With This Username"});
    }
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password );
    if(!isPasswordCorrect) {
        return res.status(400).json({ message: 'Incorrect Password'});

    }
    const accessToken = jwt.sign(
        {
            id: User._id,
            isAdmin: User.isAdmin,
        },
        process.env.JWT_SEC,
            {expiresIn:"3d"}
        );
    return res.status(200).json({ message: 'Login Successfull',accessToken})

}
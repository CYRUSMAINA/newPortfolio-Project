import User from "../models/user.js";
// READ ALL PROJECT
export const getAllUsers = async (req, res) =>{
    try{
        const users = await User.find() // get users from db
        res.status(200).json(users);// 200 HTTP status code for success
    }catch(error){
        res.status(500).json({message: error.message});// 500 HTTP status code for server errpr

    }

};

// read user by id
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//create new user
export const createUser = async (req, res) => {
    try {
        const newUser = new User({
            ...req.body,
            created: new Date(),
            updated: new Date(),
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// update user by id
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { ...req.body, updated: new Date() },
            { new: true, runValidators: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// delete user by id
export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
import User from "../models/user.model.js";

export const getUserForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId }, // We are lookong for all users and exclude current user 
    }).select("-password"); //remove the password in getusers request
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUserForSideBar".error.message);
    res.status(500), json("Internal server error");
  }
};

import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */

export const createPost = async (res, req) => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            fisrtName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {
            },
            comments: []
        })
        await newPost.save();
        const post = await Post.find();
        
    } catch (err) {
        
    }
}

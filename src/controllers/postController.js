const { Post } = require("../models/PostModel")

// CRUD operations to be defined here....

// Read - get all posts
async function getAllPosts(request, response) {
    try {
        const posts = await Post.find({
            user: request.authUserData.userId
        });
        response.json(posts);
    } catch (error) {
        response
        .status(500)
        .json({
            message: error.message
        });
    }
}

// Create a post
async function createPost(request, response) {
    try {
        const { title, content } = request.body;

        console.log(request.authUserData.userId)

        const post = await Post.create({
            title,
            content,
            user: request.authUserData.userId
        });

        response.status(201).json(post);
    } catch (error) {
        response
        .status(500)
        .json({
            message: error.message
        });
    }
}

module.exports = {
    getAllPosts, createPost
};
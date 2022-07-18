import Posts from '../models/postModel.js'

export const getAllPosts = async (req, res, next) => {
  const posts = await Posts.find({}).sort('-createdAt') 
  res.status(200).json(posts)
}

export const createPost = async (req, res, next) => {
  const post = await Posts.create(req.body)
  res.status(201).json(post)
}

export const updatePost = async (req, res, next) => {
  const post = await Posts.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidator: true}) 
  res.status(201).json(post)
}   
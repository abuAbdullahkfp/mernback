import {Router} from 'express'
import asyncHandler from '../utils/asyncHandler.js'
import { getAllPosts, createPost, updatePost } from '../controllers/postController.js'

const router = Router()

router.route('/')
      .get(asyncHandler(getAllPosts))
      .post(asyncHandler(createPost))

router.route('/:id').patch(asyncHandler(updatePost))

export default router
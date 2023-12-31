import { CommentsController } from "./controllers/CommentsController.js";
import { LikesController } from "./controllers/LikesController.js";
import { PostsController } from "./controllers/PostsController.js";


/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [PostsController, CommentsController, LikesController],
    // @ts-ignore
    view: null
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */
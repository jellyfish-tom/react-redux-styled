import { genericGet, genericPost } from './generics';

export const getPosts = genericGet('posts');
export const createPost = genericPost('posts');

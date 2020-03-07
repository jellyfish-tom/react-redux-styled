import { genericGet, genericDelete, genericPost, genericUpdate } from './generics';

const domain = 'posts';

export const getPosts = genericGet(domain);
export const createPost = genericPost(domain);
export const deletePost = genericDelete(domain);
export const updatePost = genericUpdate(domain);

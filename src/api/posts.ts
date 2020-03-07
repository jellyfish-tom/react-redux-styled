import { genericGet, genericDelete, genericPost } from './generics';

const domain = 'posts';

export const getPosts = genericGet(domain);
export const createPost = genericPost(domain);
export const deletePost = genericDelete(domain);

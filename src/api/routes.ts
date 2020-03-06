export default {
  home: '/',
  posts: '/posts',
  postDetails: (postId: string | number = ':id') =>
    `/posts/${postId}`,
};

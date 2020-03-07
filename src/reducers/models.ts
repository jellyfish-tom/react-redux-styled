export interface Action {
  type: string;
  payload: any;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type NullablePost = Post | null;

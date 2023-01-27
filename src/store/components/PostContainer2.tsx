
import React from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";
import { PostInterface } from "../models/PostInterface";

const PostContainer2 = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchPostsQuery(5);
  const [createPost, {} ] = postAPI.useCreatePostMutation();
  const [updatePost, {} ] = postAPI.useUpdatePostMutation();
  const [removePost, {} ] = postAPI.useRemovePostMutation();

  const handleRemove = async (post: PostInterface) => {
    await removePost(post);
  };
  const handleUpdate = async (post: PostInterface) => {
    await updatePost(post);
  };


  if (error)
    return (
      <div>
        <h1>Something went wrong</h1>
      </div>
    );

  return (
    <div>
      <div className="post__list">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          posts?.map((post) => <PostItem  remove={handleRemove} update={handleUpdate} key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
};

export default PostContainer2;

import React, { useEffect } from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";
import { PostInterface } from "../models/PostInterface";

const PostContainer = () => {
  const [limit, setLimit] = React.useState(100);
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postAPI.useFetchPostsQuery(limit, {
    pollingInterval: 1000,
  });
  const [createPost, {} ] = postAPI.useCreatePostMutation();
  const [updatePost, {} ] = postAPI.useUpdatePostMutation();
  const [removePost, {} ] = postAPI.useRemovePostMutation();


  useEffect(() => {
    // setTimeout(() => {
    //   setLimit(5);
    // }, 5000);
  }, []);

  const handleCreate = async () => {
    const title = prompt("Enter title");
    await createPost({ title, body: title } as PostInterface);
  };
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
        <button onClick={handleCreate}>Create Post</button>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          posts?.map((post) => <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
};

export default PostContainer;

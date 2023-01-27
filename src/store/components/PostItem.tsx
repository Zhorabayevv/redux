import React from 'react'
import { PostInterface } from '../models/PostInterface'

interface PostItemProps {
    post : PostInterface;
    remove: (post: PostInterface) => void;
    update: (post: PostInterface) => void;
}

const PostItem:React.FC<PostItemProps> = ({post, remove, update}) => {

  const handleRemove = (event: React.MouseEvent) => {
    event?.stopPropagation();
    remove(post);
  }

  const handleUpdate = (event: React.MouseEvent) => {
    const title = prompt("Enter new title") || "";
    event?.stopPropagation();
    update({...post, title} as PostInterface);
  }

  return (
    <div className='post' onClick={handleUpdate}>
        {post.id} - {post.title}
        <button onClick={handleRemove}>Delete</button>
    </div>
  )
}

export default PostItem

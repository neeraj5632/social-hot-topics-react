import React from "react";

function PostList({ posts, likePost }) {
  if (posts.length === 0) return <p>No posts</p>;

  return (
    <>
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <h4>{post.title}</h4>
          <p>Category: {post.category}</p>
          <p>Likes: {post.likes}</p>

          <button onClick={() => likePost(post.id)}>Like</button>
        </div>
      ))}
    </>
  );
}

export default PostList;

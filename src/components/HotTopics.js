import React from "react";

function HotTopics({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <div className="card hot" key={post.id}>
          <h4>{post.title}</h4>
          <p>🔥 {post.likes} likes</p>
        </div>
      ))}
    </>
  );
}

export default HotTopics;

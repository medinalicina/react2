import React from "react";
import "./post.css";

export default function Post({ posts }) {
  return (
    <div className="post">
      <h1 className="keys">{posts.title}</h1>
      <h3 className="keys">{posts.body}</h3>
    </div>
  );
}

// export default Post;

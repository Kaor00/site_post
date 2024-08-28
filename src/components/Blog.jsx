import React, { useState } from "react";

import Post from "./Post";
import NewPostForm from "./NewPostForm";

function Blog() {
  const [posts, setPosts] = useState([
    { title: "многоточие:", content: "Закон, натянутый на улице канат" },
    {
      title: "Летов:",
      content:
        "Джим Моррисон умер у тебя на глазах. А ты остался таким же как был...",
    },
  ]);

  const handleNewPost = (newPost) => {
    setPosts(
      newPost.title.trim() === "" || newPost.content.trim() === ""
        ? posts
        : [...posts, newPost]
    );
  };

  const handleDeletePost = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
  <div className="container">
    <div className="blog">
      <h1>Мой Блог</h1>
      <NewPostForm onSubmit={handleNewPost} />
      {posts.length ? (
        posts.map((post, index) => (
          <Post
            key={index}
            title={post.title}
            content={post.content}
            onDelete={() => handleDeletePost(index)}
          />
        ))
      ) : (
        <h2>Постов не найдено...</h2>
      )}
    </div>
    <div className="footer">xy xyxy xy</div>
  </div>
);
}

export default Blog;

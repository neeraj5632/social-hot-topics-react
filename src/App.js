import React, { useState } from "react";
import "./App.css";

import PostList from "./components/PostList";
import HotTopics from "./components/HotTopics";
import CategoryFilter from "./components/CategoryFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "React Tips", likes: 10, category: "Tech" },
    { id: 2, title: "Java Basics", likes: 25, category: "Tech" },
    { id: 3, title: "Fitness Guide", likes: 8, category: "Health" },
    { id: 4, title: "Healthy Diet", likes: 15, category: "Health" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  // like post
  const likePost = (id) => {
    const updated = posts.map((p) =>
      p.id === id ? { ...p, likes: p.likes + 1 } : p
    );
    setPosts(updated);
  };

  // filter posts
  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  // trending logic
  const hotTopics = [...posts].sort((a, b) => b.likes - a.likes).slice(0, 3);

  return (
    <div className="container">
      <h2>Social Media Hot Topics</h2>

      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="grid">
        <div>
          <h3>All Posts</h3>
          <PostList posts={filteredPosts} likePost={likePost} />
        </div>

        <div>
          <h3>🔥 Hot Topics</h3>
          <HotTopics posts={hotTopics} />
        </div>
      </div>
    </div>
  );
}

export default App;

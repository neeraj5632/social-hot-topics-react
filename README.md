# 🔥 Social Media Hot Topics

This is a React-based application that simulates a simple social media platform where users can view posts, like them, and see trending (hot) topics based on popularity.

---

## 🚀 Features

* View all posts
* Like posts (real-time update)
* Category-based filtering (Tech, Health, etc.)
* Display top trending posts (Hot Topics)
* Dynamic UI updates based on user interaction
* Clean and simple interface

---

## 🛠 Tech Used

* React JS
* JavaScript (Array operations)
* Basic CSS

---

## 📂 Project Structure

src/
├── components/
│    ├── PostList.js
│    ├── HotTopics.js
│    ├── CategoryFilter.js
├── App.js
├── App.css

---

## ⚙️ How to Run

1. Clone the repository

```bash id="gqk7bt"
git clone <your-repo-link>
cd social-hot-topics
```

2. Install dependencies

```bash id="f9ru9j"
npm install
```

3. Start the project

```bash id="0gq2pu"
npm start
```

---

## 🧠 Approach Used

### 🔹 1. State Management

* Posts are stored in React state
* Each post contains:

  * Title
  * Likes
  * Category

---

### 🔹 2. Like System

* Users can like any post
* Likes are updated in real-time using state update

---

### 🔹 3. Trending Logic (Hot Topics)

* Posts are sorted based on number of likes
* Top 3 posts are selected as trending topics

---

### 🔹 4. Category Filtering

* Users can filter posts by category
* Filtering is done using array `filter()` method

---

## ⚠️ Limitations

* No backend (data is static)
* No user authentication
* No persistence (data resets on refresh)

---

## 🚀 Future Improvements

* Add backend (Node.js / database)
* Add comments and sharing features
* Store data using localStorage
* Real-time updates using APIs

---

## 💡 Conclusion

This project demonstrates how a trending system works using simple logic. It shows how user interactions (likes) can dynamically affect content ranking in a social media environment.


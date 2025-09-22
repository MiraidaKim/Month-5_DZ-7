import React, { useEffect, useState } from "react";
import axios from "axios";
import cls from "./Posts.module.scss";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [filter, setFilter] = useState("");


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/posts");
        setPosts(res.data.posts);
      } catch (err) {
        console.error("Ошибка", err);
      }
    };
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !body.trim()) {
      alert("Заполните поля");
      return;
    }

    try {
      const res = await axios.post("https://dummyjson.com/posts/add", {
        title,
        body,
        userId: 1,
      });

      console.log("Все получилось", res.data);

    
      setPosts((prev) => [res.data, ...prev]);

      
      setTitle("");
      setBody("");
    } catch (err) {
      console.error("Ошибка", err);
    }
  };

  
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={cls.postsPage}>
      <h1> Посты</h1>

   
      <form className={cls.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Текст поста"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Отправить</button>
      </form>

   
      <input
        className={cls.filter}
        type="text"
        placeholder="Поиск по заголовку..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

     
      <div className={cls.list}>
        {filteredPosts.map((post) => (
          <div key={post.id} className={cls.card}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

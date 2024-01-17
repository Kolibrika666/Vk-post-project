import React, { useEffect, useState } from "react";
import s from "./Posts.module.scss";
function PostList() {
  const [postText, setPostText] = useState("");
  const [postList, setPostList] = useState([]);

  const doPost = () => {
    console.log(postText);
    fetch(
      "https://vk-posts-data-base-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
      {
        method: "POST",
        body: JSON.stringify({
          text: postText,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      console.log(res);
      setPostText("");
      getPosts();
    });
  };

  const getPosts = () => {
    fetch(
      "https://vk-posts-data-base-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const rezult = [];
        for (const key in data) {
          rezult.push({ id: key, text: data[key].text });
        }
        setPostList(rezult);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={s.posts}>
      <h3>Новости</h3>
      <label className={s.label}>
        <input
          type="text"
          placeholder="Введите ваше сообщение"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        <button type="submit" onClick={doPost}>
          Отправить
        </button>
      </label>
      <ul>
        {postList.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;

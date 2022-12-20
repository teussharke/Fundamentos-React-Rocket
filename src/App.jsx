import { useState } from "react";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import style from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/teussharke.png",
      name: "Mateus Oliveira",
      role: "Front-end Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "paragraph",
        content:
          "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-12-12 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/mateuslouback.png",
      name: "Mateus Louback",
      role: "UI/UX Designer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "paragraph",
        content:
          "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-12-13 22:30:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
            <Post
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  );
}

export default App;

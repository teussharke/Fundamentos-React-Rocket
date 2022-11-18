import { useState } from "react";
import { Header } from "./components/Header";
import { Post } from "./Post";
import './global.css'
import style from './App.module.css'
import { Sidebar } from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />

    <div className={style.wrapper}>
      <Sidebar />

      <main>
        
      <Post
        author="Mateus Oliveira"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore autem hic necessitatibus veritatis pariatur vel consectetur, ducimus omnis cum accusamus nobis id at blanditiis maiores? Sint, eum? Placeat, incidunt accusantium?"
      />
      <Post 
      author="Lucas Oliveira"
      content=" Um novo post muito legal"
      />
      
      </main>
    </div>
    </div>
  );
}

export default App;

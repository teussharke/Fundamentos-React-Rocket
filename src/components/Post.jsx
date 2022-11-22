import styles from './Post.module.css';
console.log(styles);

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/teussharke.png"
          />
          <div className={styles.authorInfo}>
            <strong>Mateus Oliveira</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de maio as 08:13h" dateTime="2022-05-02">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        
         <p> Fala galeraa 👋</p>

         <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          
          <p>{''} <a href="">jane.design/doctorcare </a> </p>

            <p>
            <a href="">#rocketseat </a>{''}
            <a href="">#novoprojeto</a>{''}
            <a href="">#nlw</a>
            </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      
    </article>
  );
}

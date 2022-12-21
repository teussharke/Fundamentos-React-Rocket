import { format } from 'date-fns';

import styles from "./Post.module.css";
import { Comentario } from "./Comment";
import { Avatar } from "./Avatar";


export function Post({ author, publishedAt, }) {
const publishedDateFormatted = format(publishedAt, "d de LLL ás HH:mm'h'")


  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="11 de maio as 08:13h" dateTime="2022-05-02">
          {publishedDateFormatted}
        </time>
      </header>

      <div className={styles.content}>
       
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comentario />
        <Comentario />
        <Comentario />
      </div>
    </article>
  );
}

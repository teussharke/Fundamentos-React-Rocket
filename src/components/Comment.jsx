import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/teussharke" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mateus Oliveira</strong>
              <time title="11 de maio as 08:13h" dateTime="2022-05-02">
                Cerca de 1h atrás
              </time>
            </div>
          </header>

          <p>Muito bom Devon, Parabens</p>
        </div>
      </div>
    </div>
  );
}

import { Trash, ThumbsUp } from "phosphor-react"
import styles from "./Comment.module.css"

export function Comment(){
  
  return (
    <div className={styles.comment}>
      <img src="http://github.com/kantutamolina.png" alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Kantuta Molina</strong>
              <time 
                        title="22 de Junho às 23:00" 
                        dateTime="2022-06-11 23:00:00"
                        >Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />

            </button>
          </header>

          <p>Muito bom Dev, parabéns!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>28</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
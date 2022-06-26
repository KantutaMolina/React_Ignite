import styles from "./Post.module.css"

export function Post(){
    return (
        <article className={styles.post}>
                <header>
                    <div className={styles.author} >
                        <img 
                            className={styles.avatar}
                            src="https://github.com/KantutaMolina.png" 
                            alt="" 
                        />
                        <div className={styles.authorInfo}>
                            <strong>Kantuta Molina</strong>
                            <span>Web Developer</span>
                        </div>
                    </div>

                    <time 
                        title="22 de Junho às 23:00" 
                        dateTime="2022-06-11 23:00:00"
                        >Publicado há 1h
                    </time>
                </header>

                <div className={styles.content}>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                    <p>👉{" "}<a href="#">jane.design/doctorcare</a></p>
                    <p>
                        <a href="#">#novoprojeto</a>{" "}
                        <a href="#">#nlw</a>{" "}
                        <a href="#">#rocketseat</a>
                    </p>
                </div>

                <form className={styles.commentForm}>
                    <strong>Deixe um feedback</strong>

                    <textarea 
                    placeholder="Deixe seu comentário"
                    />

                <footer>
                    <button type="submit">Comentar</button>
                </footer>
                </form>
        </article>
        
    )
}
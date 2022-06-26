import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css"

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
              src="https://images.unsplash.com/photo-1587620931276-d97f425f62b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" 
              alt="" 
            />

            <div className={styles.profile}>
                <img 
                  className={styles.avatar}
                  src="https://github.com/KantutaMolina.png" 
                  alt="foto de perfil" 
                />
                <strong>Kantuta Molina</strong>
                <spam>Web developer</spam>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>


        </aside>
    )
}
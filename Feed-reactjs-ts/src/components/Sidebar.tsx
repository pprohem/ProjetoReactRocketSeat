import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
           <img 
                className={styles.cover}
                src="https://as1.ftcdn.net/v2/jpg/03/48/39/74/1000_F_348397404_wXuf22GUPNAh67htBZZnaDSx3Bj92yep.jpg" 
                alt="Capa do Usuario"/>
            
            <div className={styles.profile}>
              <Avatar src="https://github.com/pprohem.png" />
              <strong>Pedro Rohem</strong>
              <span>Web Developer</span>
            </div>

            <footer>
                <a href= "#">
                   <PencilLine size={20}/>
                    Editar seu perfil
                </a>
                    
            </footer>
        </aside>
    )
}
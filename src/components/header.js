import styles from './header.module.css'
import {Link} from 'react-router-dom'
function Header(){
    return(
    <div>
<header>
 <div className={styles.interface}>
                <div className={styles.img}>
                    <h1>PETS<span className={styles.rainbow_text}>Club</span></h1>

         
                </div> 

                <nav className={styles.navHome}>
                     <ul className={styles.nav_links}>

                         <li><Link to="/quemSou">PLACE HOLDER</Link></li>
                        <li><Link to="/projetos">PLACE HOLDER</Link></li>
                        <li><Link to="/clientes">PLACE HOLDER</Link></li>
                        <li> <Link to="/contato">PLACE HOLDER</Link></li>
                    </ul>
                </nav>
            
            </div> 


        </header>  
    </div>
    )
}

export default Header;
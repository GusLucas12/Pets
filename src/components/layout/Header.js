import styles from './header.module.css'
import {Link} from 'react-router-dom'
function Header(){
    return(
    <div>
<header>
 <div className={styles.interface}>
                <div className={styles.img}>
                   <h1><Link to="/">PETS<span className={styles.rainbow_text}>Club</span></Link>
</h1> 
         
                </div> 

                <nav className={styles.navHome}>
                     <ul className={styles.nav_links}>

                         <li><Link to="/pet">Pets</Link></li>
                        <li><Link to="/servico">Servico</Link></li>
                       
                    </ul>
                </nav>
            
            </div> 


        </header>  
    </div>
    )
}

export default Header;
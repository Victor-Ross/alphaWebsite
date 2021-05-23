import { Link } from 'react-router-dom';

import logoImg from '../../images/logo.png'

import styles from './styles.module.scss';

export default function Header() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
          <Link to='/'><img src={logoImg} alt="logo"/></Link>
          <nav className={styles.navbarContainer}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/lines">Rotas</Link></li>
              <li><Link to="/busRent">Aluguel</Link></li>
              <li><Link to="/history">História</Link></li>
              <li><Link to="/contact">Fale conosco</Link></li>
            </ul>
          </nav>
        </div>
    </div>
  );
}
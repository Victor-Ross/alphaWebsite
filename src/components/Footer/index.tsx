import busIcon from '../../images/bus-icon.png';
import facebookIcon from '../../images/facebook-icon.png';
import instagramIcon from '../../images/instagram-icon.png';
import twitterIcon from '../../images/twitter-icon.png';
import gmailIcon from '../../images/gmail-icon.png';

import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div>
          <span className={styles.signature}>Auto Viação Alpha</span>
          <img src={busIcon} alt="Ícone de ônibus"/>
        </div>
        <span className={styles.copyright}>
          1950 © Todos os Direitos Reservados. <br/><br/>
          autoviacaoalpha@gmail.com <br/><br/>
          <ul>
            <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/autoviacaoalpha/"><img src={facebookIcon} alt=""/></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/explore/locations/1707238846218763/auto-viacao-alpha-sa/"><img src={instagramIcon} alt=""/></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://twitter.com/autoviacaoalpha?lang=en"><img src={twitterIcon} alt=""/></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/autoviacaoalpha/"><img src={gmailIcon} alt=""/></a></li>
          </ul>
        </span>
      </footer>
  );
}
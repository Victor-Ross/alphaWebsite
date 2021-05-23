import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Parallax from '../../components/Parallax';

import busImg1 from '../../images/onibus-img-1.jpg';
import busImg2 from '../../images/onibus-img-2.jpg';
import busImg3 from '../../images/onibus-img-3.jpg';

import styles from './styles.module.scss';

export default function BusRent() {
  return(
    <div className={styles.pageContainer}>
      <Header />
      <Parallax />
      <section>
        <main className={styles.rentDescription}>
          <h2>Alugue com os melhores ônibus do Rio de Janeiro</h2>
          <div>
            <span>Para alugar um de nossos ônibus, falar com <p>Sra. Tamires Rosa tel (21) 3278-9611</p>
              <p>Sra. Amanda tel (21) 3278-9600</p> 
               ou através do nosso email.
              <p>viaçãoalpha@gmail.com</p>
            </span>
            <span>
              Pensando na sua segurança e conforto, mantemos nossos veículos em ótimo estado,
              com ar-condicionado e vistoria em dia!
            </span>
          </div>
        </main>
        <ul>
          <li><img src={busImg1} alt="" /></li>
          <li><img src={busImg2} alt="" /></li>
          <li><img src={busImg1} alt="" /></li>
          <li><img src={busImg2} alt="" /></li>
          <li><img src={busImg3} alt="" /></li>
          <li><img src={busImg2} alt="" /></li>
        </ul>
      </section>
      <Footer />
    </div>
  );
}
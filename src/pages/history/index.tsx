import Header from '../../components/Header';

import quadroImg from '../../images/history/quadro-antigo.jpg';
import busImg1 from '../../images/history/bus-1.jpg'
import busImg2 from '../../images/history/bus-2.jpg'
import busImg3 from '../../images/history/bus-3.jpg'
import busImg4 from '../../images/history/bus-4.jpg'
import busImg5 from '../../images/history/bus-5.jpg'
import redTokenImg from '../../images//history/token-red.png';
import tokenImg from '../../images//history/token.png';

import styles from './styles.module.scss';

export default function History() {
  return (
    <>
    <Header />
    <div className={styles.historyPageContainer}>
      <section>
        <header>
          <h1>Auto Viação Alpha</h1>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
             It has roots in a piece of classical Latin literature from 45 BC, 
             making it over 2000 years old. Richard McClintock, a Latin professor 
             at Hampden-Sydney College in Virginia, looked up one of the more obscure
            Latin words, consectetur, from a Lorem Ipsum passage, and going through 
            ites of the word in classical literature, discovered the undoubtable source.
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
            et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
            This book is a treatise on the theory of ethics, very popular during the 
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
            comes from a line in section 1.10.32</p>
          <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced 
            below for those interested. Sections 1.10.32 and 1.10.33 from "de 
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their 
            exact original form, accompanied by English versions from the 1914 
            translation by H. Rackham.</p>
        </header>
        <main>
          <div className={styles.portrait}>
            <img src={quadroImg} alt="Imagem quadro" />
            <span>Contrary to popular belief, Lorem Ipsum is not simply random 
              text. It has roots in a piece of classical Latin literature from 
              45 BC, making it over 2000 years old. Richard McClintock, a Latin 
              professor at Hampden-Sydney College in Virginia, looked up one of the 
              more obscure Latin words, consectetur</span>
          </div>
          {/* <div className={styles.oldBusCarousel}>
            <span>Contrary to popular belief, Lorem Ipsum is not simply random 
              text. It has roots in a piece of classical Latin literature from 
              45 BC, making it over 2000 years old. Richard McClintock, a Latin 
              professor at Hampden-Sydney College in Virginia, looked up one of the 
              more obscure Latin words, consecteturContrary to popular belief, Lorem Ipsum is not simply random 
              text. It has roots in a piece of </span>
            <div style={{ width: '70%' }}>
              <CarouselScroll 
                width='100%'
                height={600} 
                wrapperWidth='100%' 
                busImg={[busImg5, busImg4 ,busImg3, busImg2, busImg1]}
              />
            </div>
          </div> */}
          <div className={styles.timeline}>
          <div>
              <h2>1960</h2>
              <span>
                <img src={busImg4} alt="ônibus antigo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magni blanditiis deleniti
                mollitia id assumenda quaerat modi nostrum quasi! Minima pariatur deleniti adipisci eveniet
                illum iste mollitia eum maxime obcaecati.
                </p>
              </span>
            </div>

            <div>
              <h2>1965</h2>
              <span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur similique porro omnis debitis maiores alias recusandae error minima. In reprehenderit laboriosam a corrupti odit sit quisquam quibusdam eum, quaerat tempore!</p>
              <img src={busImg5} alt="ônibus antigo" />
              </span>
            </div>
            <div>
              <h2>1970</h2>
              <span>
              <img src={busImg3} alt="ônibus antigo" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur similique porro omnis debitis maiores alias recusandae error minima. In reprehenderit laboriosam a corrupti odit sit quisquam quibusdam eum, quaerat tempore!</p>
              </span>
            </div>
            <div>
              <h2>1980</h2>
              <span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur similique porro omnis
                debitis maiores alias recusandae error minima. In reprehenderit laboriosam a corrupti odit sit
                quisquam quibusdam eum, quaerat tempore!</p>
                <img src={busImg1} alt="ônibus antigo" />
              </span>
            </div>
            <div>
              <h2>1985</h2>
              <span>
                <img src={busImg2} alt="ônibus antigo" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur similique porro omnis
                debitis maiores alias recusandae error minima. In reprehenderit laboriosam a corrupti odit
                sit quisquam quibusdam eum, quaerat tempore!</p>
              </span>
            </div>
          </div>
          <div className={styles.tokens}>
            <img src={tokenImg} alt="Antiga ficha vermelha Alpha" />
            <p>Contrary to popular belief, Lorem Ipsum is not simply random 
            text. It has roots in a piece of classical Latin literature from 
            45 BC, making it over roots in a piece of classical Latin literature from 
            45 BC, making it over</p>
            <img src={redTokenImg} alt="Antiga ficha Alpha" />
          </div>
        </main>
      </section>
    </div>
    </>
    
  );
}
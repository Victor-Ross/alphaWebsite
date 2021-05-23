import { CarouselScroll } from '../../components/Carousel';

import busImg1 from '../../images/onibus-img-1.jpg';
import busImg2 from '../../images/onibus-img-2.jpg';
import busImg3 from '../../images/onibus-img-3.jpg';

import styles from './styles.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
    <Header />
    <div className={styles.homeContainer}>
      <div className={styles.backgroundGradient}>
        <section className={styles.body}>
          <main className={styles.garagem}>
            <CarouselScroll
              width='100%' 
              height={550} 
              busImg={[busImg1, busImg2, busImg3]} 
            />
            <div className={styles.descricao}>
              <span>
              <h1>Quem somos</h1>
              <p> Auto Viação Alpha é uma empresa de ônibus municipal na Cidade do Rio de Janeiro.
              localizada do Engenho Novo, possui linhas do Centro Zona Sul e Zona
              Norte,ligação Zona Norte à Zona Sul,Zona Norte ao Centro e Centro
              à Zona Sul</p>
              </span>
              <span>
              <h1>Nossos objetivos</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur similique nesciunt ratione.
              Rem dolor assumenda voluptatem inventore? Perspiciatis sapiente odit ducimus nostrum deleniti, 
              impedit, incidunt, optio amet</p>
              </span>
              <iframe 
                width="100%"
                height="600"
                style={{ margin: '0 auto', borderRadius: '5px' }} 
                src="https://www.youtube.com/embed/BkQSc4Yi_Wc" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            <div className={styles.endereco}>
              <h1>Bem vindo a Auto Viação Alpha!</h1>
            <iframe 
              title="Google maps Alpha address"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837.5367273398472!2d-43.271493579227716!3d-22.910661368027977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997dc0f9fc3ecb%3A0x6e273cbbadc1893b!2sAuto%20traffic%20Alpha!5e0!3m2!1sen!2sbr!4v1621597719253!5m2!1sen!2sbr" 
              width="100%" 
              height="450" 
              style={{ border: '0', margin: '0 auto', borderRadius: '10px' }}
              allowFullScreen
              loading="lazy">
            </iframe>
            </div>
          </main>
        </section>
      </div>
      <Footer />
    </div>
    </>
  )
}
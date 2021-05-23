import React, { FormEvent } from 'react';
import * as emailjs from 'emailjs-com';
import apiKey from '../../utils/emailkey';

import Header from "../../components/Header"

import styles from './styles.module.scss';
import Footer from '../../components/Footer';

export default function ContactUs() {
  function handleEmailSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const target = event.target as HTMLFormElement;

    emailjs.sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, target, apiKey.USER_ID);
  }


  return (
    <div>
      <Header />
      <div className={styles.pageContainer}>
        <form action="" onSubmit={handleEmailSubmit}>
          <h1>Venha fazer parte do nosso time!</h1>
          
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required placeholder="Escreva seu nome aqui"/>

          <label htmlFor="tel">Telefone:</label>
          <input type="tel" id="tel" name="tel" required placeholder="Exemplo: (21) 9xxxx xxxx"/>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required placeholder="exemplo@email.com" />

          <label htmlFor="text">Descreva sua experiência profissional e/ou motivação para trabalhar na Alpha!</label>
          <textarea name="message" id="message" cols={30} rows={10} required></textarea>

          <span><button type="submit">Enviar</button></span>
        </form>
      </div>
      <Footer />
    </div>
  );
}
import React from 'react';
import styles from './Presentation.module.scss';
import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si';

function Presentation() {
  return (
    <div className={styles.presentation}>
      <header className={'text-center'}>
        <h1 className="text-green">Hernande Monteiro</h1>
        <h5 className="text-white">
          Software Developer and Data Scientist Enthusiastic
        </h5>

        <div className={styles.SocialLinks}>
          <a href="https://github.com/hernandemonteiro" target="__blank">
            <SiGithub />
          </a>

          <a href="https://linkedin.com/in/hernande-monteiro" target="__blank">
            <SiLinkedin />
          </a>

          <a href="https://instagram.com/monteiro.ops" target="__blank">
            <SiInstagram />
          </a>

          <a href="https://wa.me/41999175718" target="__blank">
            <SiWhatsapp />
          </a>
        </div>
        <div>
          <p className="text-white">
            Apaixonado por tecnologia e inovação! 😍💻📱
            <br />
            <br />
            Desde 2019 descobrindo novas maneiras de transformar o mundo com
            código.
          </p>
        </div>
      </header>
    </div>
  );
}

export default Presentation;

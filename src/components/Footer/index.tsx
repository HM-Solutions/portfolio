import React from "react";
import Image from 'next/image';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <span>Created by <b>Hernande Monteiro</b><br /><br /></span>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className={styles.SocialIcons}>
                    <a href="/curriculum">
                        <FontAwesomeIcon icon={faUser} size='lg' /> : Sobre Mim
                    </a>
                    <a href="/portfolio">
                        <FontAwesomeIcon icon={faNewspaper} size='lg' /> : Portfolio
                    </a>
                    <a href="https://github.com/hernandemonteiro">
                        <FontAwesomeIcon icon={faGithub} size='lg' /> : Github
                    </a>
                    <a href="https://www.instagram.com/monteiro.ops/">
                        <FontAwesomeIcon icon={faInstagram} size='lg' /> : Instagram
                    </a>
                    <a href="https://www.instagram.com/monteiro.ops/">
                        <FontAwesomeIcon icon={faLinkedin} size='lg' /> : Linkedin
                    </a>
                </div>
                <br />
                Powered by{' '}
                <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a>
        </footer>
    )
}
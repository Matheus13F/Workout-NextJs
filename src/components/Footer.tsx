import Link from "next/link";
import { FiCoffee, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import styles from "../styles/components/Footer.module.scss";

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <header>
        <p>Desenvolvido com ❤ por @Matheus13f</p>
      </header>
      <main>
        <Link href="https://www.github.com/matheus13f/">
          <a>
            <FiGithub size={25} />
          </a>
        </Link>

        <Link href="https://www.linkedin.com/in/matheus13f/">
          <a>
            <FiLinkedin size={25} />
          </a>
        </Link>

        <Link href="https://www.instagram.com/oi_matthew/">
          <a>
            <FiInstagram size={25} />
          </a>
        </Link>
      </main>
      <footer>
        <Link href="https://ko-fi.com/matheus13f">
          <a>
            Me pague um café! <FiCoffee />
          </a>
        </Link>
      </footer>
    </div>
  );
}

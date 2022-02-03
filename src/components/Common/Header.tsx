import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import classes from './Header.module.scss';
import LanguageSelector from './LanguageSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={classes.header}>
      <ul className={classes['nav-links']}>
        <li>
          <Link href="/">{t('header.work')}</Link>
        </li>
        <li>
          <Link href="/about">{t('header.about')}</Link>
        </li>
        <li>
          <Link href="/contact">{t('header.contact')}</Link>
        </li>
      </ul>
      <h1 className={classes.title}>
        <Link href="/">Lucas R. Cipriani</Link>
      </h1>
      <ul className={classes['social-links']}>
        <li>
          <a
            href="https://www.facebook.com/lucas.cipriani2/"
            target="_blank"
            title="Facebook"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lucas-cipriani/"
            target="_blank"
            title="LinkedIn"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="tel:+5548996001678" title="Phone">
            <FontAwesomeIcon icon={faPhoneSquare}></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="mailto: lucas.ci25@hotmail.com" title="E-mail">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <LanguageSelector />
        </li>
      </ul>
    </header>
  );
};

export default Header;

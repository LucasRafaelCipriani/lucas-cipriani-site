import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classes from './Header.module.scss';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={classes.header}>
      <ul className={classes['nav-links']}>
        <li>
          <NavLink to="/">{t('header.work')}</NavLink>
        </li>
        <li>
          <NavLink to="/about">{t('header.about')}</NavLink>
        </li>
        <li>
          <NavLink to="/contact">{t('header.contact')}</NavLink>
        </li>
      </ul>
      <h1 className={classes.title}>
        <Link to="/">Lucas R. Cipriani</Link>
      </h1>
      <ul className={classes['social-links']}>
        <li>
          <a
            href="https://www.facebook.com/lucas.cipriani2/"
            target="_blank"
            title="Facebook"
            rel="noreferrer noopener"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lucas-cipriani/"
            target="_blank"
            title="LinkedIn"
            rel="noreferrer noopener"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="tel:+5548996001678" title="Phone">
            <i className="fas fa-phone-square"></i>
          </a>
        </li>
        <li>
          <a href="mailto: lucas.ci25@hotmail.com" title="E-mail">
            <i className="far fa-envelope"></i>
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

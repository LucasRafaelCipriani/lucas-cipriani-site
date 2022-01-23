import { Link, NavLink } from 'react-router-dom';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <ul className={classes['nav-links']}>
        <li>
          <NavLink to="/">Work</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
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
      </ul>
    </header>
  );
};

export default Header;

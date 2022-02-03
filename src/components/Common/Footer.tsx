import { useTranslation } from 'react-i18next';
import classes from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
      <small>{t('copyright')}</small>
    </footer>
  );
};

export default Footer;

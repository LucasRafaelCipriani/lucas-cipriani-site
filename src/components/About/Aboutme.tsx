import classes from './Aboutme.module.scss';
import { useTranslation } from 'react-i18next';

const Aboutme = () => {
  const { t } = useTranslation();

  return (
    <section className={classes['aboutme-section']}>
      <p>{t('about-me')}</p>
      <img src="https://via.placeholder.com/300" alt="My Portrait" />
    </section>
  );
};

export default Aboutme;

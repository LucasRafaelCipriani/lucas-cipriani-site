import { useTranslation } from 'react-i18next';
import classes from './Education.module.scss';

const Education = () => {
  const { t } = useTranslation();

  return (
    <section className={classes['education-section']}>
      <h1>{t('education.title')}</h1>
      <div className={classes['education-list']}>
        <div className={classes['education-item']}>
          <h2>{t('education.item1.title')}</h2>
          <p>{t('education.item1.description')}</p>
          <br />
          <p>{t('education.time')}: 2012-2014</p>
        </div>
        <div className={classes['education-item']}>
          <h2>{t('education.item2.title')}</h2>
          <p>{t('education.item2.description')}</p>
          <br />
          <p>{t('education.time')}: 2015-2018</p>
        </div>
      </div>
    </section>
  );
};

export default Education;

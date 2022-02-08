import classes from './Skills.module.scss';
import { useTranslation } from 'react-i18next';

const Skills = ({ skills }: any) => {
  const { t } = useTranslation();

  return (
    <section className={classes['skills-section']}>
      <h1>{t('skills.title')}</h1>
      <div className={classes['skill-chart']}>
        <div className={classes['skill-item']}>
          <span>{t('skills.beginner')}</span>
          <div className={classes['white-bar']}></div>
          <span>{t('skills.advanced')}</span>
        </div>
        {skills.map((skill: any) => (
          <div
            className={`${classes['skill-item']} ${classes['leveled']} `}
            key={skill.name}
          >
            <span>{skill.name}</span>
            <div
              className={`${classes['white-bar']} ${classes[skill.level]}`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

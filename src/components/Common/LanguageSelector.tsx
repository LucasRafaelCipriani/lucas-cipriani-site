import classes from './LanguageSelector.module.scss';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguageHandler = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <select
        className={classes['language-selector']}
        onChange={changeLanguageHandler}
      >
        <option value="en" selected>
          EN
        </option>
        <option value="pt">PT</option>
      </select>
    </>
  );
};

export default LanguageSelector;

import classes from './Header.module.css';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;

import { HeaderElem } from './HeaderStyles';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderElem>
      <h1>{title}</h1>
    </HeaderElem>
  );
};

export default Header;

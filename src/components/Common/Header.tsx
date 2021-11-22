import React from 'react';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="App-header">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;

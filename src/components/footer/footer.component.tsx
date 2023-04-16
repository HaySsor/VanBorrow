import styled from './footer.module.scss';

export const Footer = () => {
  const year = new Date().getFullYear();

  return <footer className={styled.footer}>&#169; {year} #VANLIFE</footer>;
};

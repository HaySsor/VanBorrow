import styled from './navigation.module.scss';
import {Link} from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className={styled.nav}>
      <Link className={`${styled.logo}`} to='/'>
        #VanBorrow
      </Link>
      <div className={styled.linkBox}>
        <Link className={styled.link} to='/about'>
          About
        </Link>
        <Link className={styled.link} to='/vans'>
          Vans
        </Link>
      </div>
    </nav>
  );
};

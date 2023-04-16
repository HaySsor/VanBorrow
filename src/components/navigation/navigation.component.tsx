import styled from './navigation.module.scss';
import {NavLink} from 'react-router-dom';
import {useNavActiveClass} from '../../hooks/useNavActiveClass';

export const Navigation = () => {
  const [activeClassName] = useNavActiveClass(styled);

  return (
    <nav className={styled.nav}>
      <NavLink className={`${styled.logo}`} to='/'>
        #VanBorrow
      </NavLink>
      <div className={styled.linkBox}>
        <NavLink className={activeClassName} to='/host'>
          Host
        </NavLink>
        <NavLink className={activeClassName} to='/about'>
          About
        </NavLink>
        <NavLink className={activeClassName} to='/vans'>
          Vans
        </NavLink>
      </div>
    </nav>
  );
};

//  `

import styled from './about.module.scss';
import bgImg from '../../assets/image 55.png';
import {Link} from 'react-router-dom';

export const AboutPage = () => {
  return (
    <div className={styled.about}>
      <img src={bgImg} className={styled.aboutImg} />
      <div className={styled.aboutContent}>
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className={styled.aboutCta}>
        <h2>Your destination is waiting. Your van is ready.</h2>
        <Link className={styled.aboutButton} to='/vans'>
          Explore our vans
        </Link>
      </div>
    </div>
  );
};

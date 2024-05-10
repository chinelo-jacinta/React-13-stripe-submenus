import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';
const Hero = () => {
  const { closeSubMenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubMenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>payments infrastructure for the internet</h1> <br />
          <p>
            million s of companies of all sizes-from startups to fortune
            500s-use stripe's software and APIs to accept paymennts, send
            payouts, and manage their businesses online
          </p>
          <button className='btn'>start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='' />
        </article>
      </div>
    </section>
  );
};

export default Hero;

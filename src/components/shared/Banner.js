import React, { useContext } from 'react';
import './Banner.css';
import {useTranslation} from 'react-i18next';
import { PageContext } from '../PageContext';

function Banner() {
  const { t } = useTranslation();
  const { page } = useContext(PageContext);

  return (
    <>
      <div className={`home__top-banner ${page === 'home' ? '' : 'home__top-banner_sub'}`}>
        TODO
        <img className="home__top-banner__img wow fadeIn" src='/icons/bg-home-top.jpg' alt="lucci dental" />
        <div className="home__top-banner__introduce wow fadeInUp hide-mobile">
          <p className="title-with-bg">{t(`${page}.title`)}</p>
          <h2 className="home__top-banner__description hide-tablet">{t(`${page}.description`)}</h2>
        </div>
      </div>
    </>
  )
}

export default Banner

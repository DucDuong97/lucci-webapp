import React, { useContext } from 'react';
import './Banner.css';
import {useTranslation} from 'react-i18next';
import { PageContext } from '../PageContext';

function Banner() {
  const { t } = useTranslation();
  const { page } = useContext(PageContext);

  return (
    <>
      <div class={`home__top-banner ${page == 'home' ? '' : 'home__top-banner_sub'}`}>
        <img class="home__top-banner__img wow fadeIn" src='/icons/bg-home-top.jpg' alt="lucci dental" />
        <div class="home__top-banner__introduce wow fadeInUp hide-mobile">
          <p class="title-with-bg">{t(`${page}.title`)}</p>
          <h2 class="home__top-banner__description hide-tablet">{t(`${page}.description`)}</h2>
        </div>
      </div>
    </>
  )
}

export default Banner

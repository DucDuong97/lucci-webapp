import React, { useEffect } from 'react';
import {useTranslation} from 'react-i18next';
import './AchievementSection.css'
import background from "../../../images/bg-home.jpg"
import SectionHeader from '../../shared/SectionHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faHeart, fas, faUserMd } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas, faUserMd, faCalendar, faHeart);

function AchievementSection({
  achievements
}) {
  const { t } = useTranslation();

  const Achievement = ({name, number, imgUrl}) => {
    return (
      <div class="col-sm-4 home__achievement-item">
        <p class="eha-animate-number">{number}</p>
        {/* <img src={`/icons/${imgUrl.imgUrl}`} alt=""/> */}
        <FontAwesomeIcon icon={imgUrl.imgUrl} size="4x"/>
        <p>{name}</p>
      </div>
    );
  }

  const AchievementList = () => {
    return (
      <div id="home__achievement-list" class="home__achievement-list">
        <img class="home__achievement-bg" src={background} alt="lucci dental" />
        <div class="container">
          <div class="row">
            {Array.isArray(achievements) ? achievements.map((achievement) => <Achievement {...achievement} />) : ''}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div class="container-fluid">
        <div class="row margin-top-15">
          <div className="col-md-4 no-padding">
            <SectionHeader header={t('home.achievementHeader')} side={true} withBg={true} />
          </div>
          <div className="col-md-8 no-padding">
            <AchievementList />
          </div>
        </div>
      </div>
    </>
  )
}

export default AchievementSection

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
      <div className="col-sm-4 home__achievement-item">
        <p className="eha-animate-number">{number}</p>
        {imgUrl &&
        <FontAwesomeIcon icon={imgUrl.imgUrl} size="4x"/>}
        <p>{name}</p>
      </div>
    );
  };

  const AchievementList = () => {
    return (
      <div id="home__achievement-list" className="home__achievement-list">
        <img className="home__achievement-bg" src={background} alt="lucci dental" />
        <div className="container">
          <div className="row">
            {Array.isArray(achievements) ? achievements.map((achievement) => <Achievement {...achievement} />) : ''}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row margin-top-15">
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

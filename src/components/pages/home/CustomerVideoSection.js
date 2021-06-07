import React from 'react';
import './CustomerVideoSection.css';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../../shared/SectionHeader';

function CustomerVideoSection({
  videoLinks
}) {

  const { t } = useTranslation();

  const YoutubeVideo = ({link}) => {
    return (
      <div className="iframe-container">
        <iframe src={`https://www.youtube.com/embed/${link ? link.url : ''}`} frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
        </iframe>
      </div>
    );
  };

  return (
    <>
      <div className="container-fluid overflow-hidden margin-top-15">
        <div className="row">
          <div className="col-lg-8 no-padding">
            <YoutubeVideo link={videoLinks[0]} />
          </div>
          <div className="col-lg-4 home__customer-video-list no-padding">
            <div>
              <SectionHeader header={t('home.customerVideoHeader')} side={true} withBg={true}/>
            </div>
            <div className="scrollable">
              {Array.isArray(videoLinks) ? videoLinks.slice(1).map((video) => <YoutubeVideo link={video} />): ''}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerVideoSection

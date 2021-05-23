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
      <div class="iframe-container">
        <iframe src={`https://www.youtube.com/embed/${link ? link.url : ''}`} frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
      </div>
    );
  }

  return (
    <>
      <div class="container-fluid overflow-hidden margin-top-15">
        <div class="row">
          <div class="col-lg-8 no-padding">
            <YoutubeVideo link={videoLinks[1]} />
          </div>
          <div class="col-lg-4 home__customer-video-list no-padding">
            <div>
              <SectionHeader header={t('home.customerVideoHeader')} side={true} withBg={true}/>
            </div>
            <div class="scrollable">
              {Array.isArray(videoLinks) ? videoLinks.map((video) => <YoutubeVideo link={video} />): ''}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerVideoSection

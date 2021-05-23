import React from 'react'
import {useTranslation} from 'react-i18next';
import Button from '../../shared/Button';
import SectionHeader from '../../shared/SectionHeader';
import './ServiceSection.css';

function ServiceSection({
  services
}) {
  const { t } = useTranslation();

  const ServiceItem = ({imgUrl, name, description}) => {
    return (
      <>
        <div class="col-lg-4 col-sm-6 col-xs-12 media home__service-item hvr-grow">
          <a href="DichVu.html">
            <img class="media-object icon" src={`/icons/${imgUrl.imgUrl}`} alt="service" />
          </a>
          <div class="media-body text-center">
            <p class="media-heading home__si__header">
              {name}
            </p>
            <p className="home__si__desc">
              {description} 
            </p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div class="home__service-section">
        <div class="container-fluid">
          <SectionHeader header={t('home.serviceHeader')} withBg={true}/>
          <div class="container wow fadeIn">
            <div class="row">
              {Array.isArray(services) ? services.map((service) => <ServiceItem {...service}/>) : ""}
            </div>
            <div class="row d-flex justify-content-center margin-top-30">
              <Button content="Liên hệ ngay" link="#contact-form" />
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default ServiceSection

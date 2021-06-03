import React from 'react'
import {useTranslation} from 'react-i18next';
import Button from '../../shared/Button';
import SectionHeader from '../../shared/SectionHeader';
import './ServiceSection.css';
import {Link} from "react-router-dom";
import {IMAGE_SOURCE_URL} from "../../../Data";

function ServiceSection({
  services
}) {
  const { t } = useTranslation();

  const ServiceItem = ({imgUrl, name, description}) => {
    return (
      <>
        <div className="col-lg-4 col-sm-6 col-xs-12 media home__service-item hvr-grow">
          <Link to="/services">
            {imgUrl != null &&
            <img className="media-object icon" src={IMAGE_SOURCE_URL + imgUrl.imgUrl} alt="service" />}
          </Link>
          <div className="media-body text-center">
            <p className="media-heading home__si__header">
              {name}
            </p>
            <p className="home__si__desc">
              {description} 
            </p>
          </div>
        </div>
      </>
    )
  };

  return (
    <>
      <div className="home__service-section">
        <div className="container-fluid">
          <SectionHeader header={t('home.serviceHeader')} withBg={true}/>
          <div className="container wow fadeIn">
            <div className="row">
              {Array.isArray(services) ? services.map((service) => <ServiceItem {...service}/>) : ""}
            </div>
            <div className="row d-flex justify-content-center margin-top-30">
              <Button content="Liên hệ ngay" link="#contact-form" />
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default ServiceSection

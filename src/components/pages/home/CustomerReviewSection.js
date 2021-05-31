import React from 'react';
import './CustomerReviewSection.css';
import SectionHeader from '../../shared/SectionHeader';
import {useTranslation} from 'react-i18next';
import Slider from 'react-slick';
import {WEB_URL} from "../../../Data";

function CustomerReviewSection({
  reviews
}) {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const CustomerReview = ({customerImgUrl, customerName, customerAddress, comment}) => {
    return (
      <div className="eht-item">
        <div className="ehti-img">
          <img src={WEB_URL + customerImgUrl.imgUrl} alt="Testimonials" />
        </div>
        <div className="ehti-text">
          <p>{comment}</p>
          <div>{customerName} – {customerAddress}</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container-fluid e-home-testimonials">
        <SectionHeader header={t('home.customerReviewHeader')} side={false} withBg={false} />
        <div className="container overflow-hidden">
          <div className="eht-container wow fadeInUp">
            <Slider {...settings}>
              {Array.isArray(reviews) ? reviews.map(review => <CustomerReview {...review} />) : ''}
            </Slider>
          </div>
          
          
        </div>
      </div>
    </>
  )
}

export default CustomerReviewSection

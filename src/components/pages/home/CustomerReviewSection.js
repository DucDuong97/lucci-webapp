import React from 'react';
import './CustomerReviewSection.css';
import SectionHeader from '../../shared/SectionHeader';
import {useTranslation} from 'react-i18next';
import Slider from 'react-slick';

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
      <div class="eht-item">
        <div class="ehti-img">
          <img src={`/icons/${customerImgUrl.imgUrl}`} alt="Testimonials" />
        </div>
        <div class="ehti-text">
          <p>{comment}</p>
          <div>{customerName} – {customerAddress}</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div class="container-fluid e-home-testimonials">
        <SectionHeader header={t('home.customerReviewHeader')} side={false} withBg={false} />
        <div class="container overflow-hidden">
          <div class="eht-container wow fadeInUp">
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

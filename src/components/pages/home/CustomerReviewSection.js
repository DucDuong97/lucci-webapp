import React from 'react';
import './CustomerReviewSection.css';
import SectionHeader from '../../shared/SectionHeader';
import {useTranslation} from 'react-i18next';
import Slider from 'react-slick';
import {IMAGE_SOURCE_URL} from "../../../Data";
import {Link} from "react-router-dom";

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
          {customerImgUrl &&
          <img src={IMAGE_SOURCE_URL + customerImgUrl.imgUrl} alt="Blog" />}
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

import React from 'react';
import './ContactPage.css'
import GoogleMap from './GoogleMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from '../../shared/SocialMedia';
import {useTranslation} from 'react-i18next';

function ContactPage({adresses, phone, email}) {
  const { t } = useTranslation();

  return (
    <>
      <div className="contact-page__container container">
        <div className="row">
          <div id="e-google-map" className="col-lg-6 e-google-map">
            <GoogleMap/>
          </div>
          <div className="col-lg-6">
            <div className="ecc-info">
              <h2 className="epg-title">{t('contactPage.title')}</h2>
              <div className="ef-contact margin-bottom-30">
                {adresses && adresses.map(adress => 
                  <p>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3"/>
                    {adress}
                  </p>)
                }
                <p><FontAwesomeIcon icon={faPhone} className="mr-3"/>{phone}</p>
                <p><FontAwesomeIcon icon={faEnvelope} className="mr-3"/>{email}</p>
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage

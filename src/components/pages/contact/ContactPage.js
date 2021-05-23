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
      <div class="contact-page__container container">
        <div class="row">
          <div id="e-google-map" class="col-lg-6 e-google-map">
            <GoogleMap/>
          </div>
          <div class="col-lg-6">
            <div class="ecc-info">
              <h2 class="epg-title">{t('contactPage.title')}</h2>
              <div class="ef-contact margin-bottom-30">
                {adresses && adresses.map(adress => 
                  <p>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3"/>
                    {adress}
                  </p>)
                }
                <p><FontAwesomeIcon icon={faPhone}className="mr-3"/>{phone}</p>
                <p><FontAwesomeIcon icon={faEnvelope}className="mr-3"/>{email}</p>
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

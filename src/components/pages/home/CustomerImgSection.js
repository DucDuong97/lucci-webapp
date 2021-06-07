import React, {useState, useEffect} from 'react'
import SectionHeader from '../../shared/SectionHeader';
import {useTranslation} from 'react-i18next';
import './CustomerImgSection.css'
import { Tab, Nav } from 'react-bootstrap';
import Button from '../../shared/Button';
import {IMAGE_SOURCE_URL} from "../../../Data";

function CustomerImgSection({
  customerImgs
}) {
  const { t } = useTranslation();
  const [key, setKey] = useState('');

  useEffect(() => {
    setKey(Array.isArray(customerImgs) && customerImgs.length > 0 ? 
    customerImgs[0].service.serviceName : '');
  }, [customerImgs]);

  const ServiceTab = ({serviceImg, serviceName}) => {
    return (
      <Nav.Item>
        <Nav.Link className="home__service-tab hvr-grow" eventKey={serviceName}>
          {serviceImg &&
          <img src={IMAGE_SOURCE_URL + serviceImg.imgUrl} alt="Blog" />}
          {serviceName}
        </Nav.Link>
      </Nav.Item>
    );
  };

  const CustomerImg = ({customerImg}) => {
    return (
      <div className="col-lg-4 col-sm-6 col-xs-12 home__customer-img-pane">
        <img src={IMAGE_SOURCE_URL + customerImg} alt="service"/>
      </div>
    );
  };

  const TabContent = ({serviceName, imgs}) => {
    return (
      <Tab.Pane eventKey={serviceName} className="container-fluid">
        <div className="row">
          {Array.isArray(imgs) ? imgs.map((img) => <CustomerImg customerImg={img}/>) : ''}
        </div>
      </Tab.Pane>
    );
  };

  return (
    <>
      <div id="customerImgs" className="home__customer-img-section container-fluid">
        <SectionHeader header={t('home.customerHeader')} side={false} withBg={false} />
        <Tab.Container activeKey={key}>
          <Nav variant="pills" className="nav-justified home__service-tab-menu" onSelect={(key) => setKey(key)}>
            {Array.isArray(customerImgs) ? customerImgs.map((customerImg) => <ServiceTab {...customerImg.service} />) : ''}
          </Nav>
          <Tab.Content>
            {Array.isArray(customerImgs) ? customerImgs.map((customerImg) => 
              <TabContent serviceName={customerImg.service.serviceName} imgs={customerImg.imgs}/>) : ''}
          </Tab.Content>
        </Tab.Container>
        <div className="row d-flex justify-content-center margin-top-30">
          <Button content="Liên hệ ngay" link="#contact-form" />
        </div>
      </div>
    </>
    
  )
}

export default CustomerImgSection

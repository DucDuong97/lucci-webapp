import React, { useEffect, useState } from 'react';
import { getServiceItems, IMAGE_SOURCE_URL } from '../../../Data'
import {useTranslation} from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import './ServiceDetail.css';
import { Tab, Nav, Col, Row } from 'react-bootstrap';
import Button from '../../shared/Button';
import SectionHeader from '../../shared/SectionHeader';
import 'react-step-progress/dist/index.css';

function ServiceDetail() {
  
  const { t } = useTranslation();
	const [services, setServices] = useState([]);
  const [key, setKey] = useState('');

  useEffect(() => {
		const fetchData = async () => {
			setServices(await getServiceItems());
      setKey(Array.isArray(services) && services.length > 0 ? 
      services[0].name : '');
		}
		fetchData();
	}, []);

  useEffect(() => {
		setKey(Array.isArray(services) && services.length > 0 ? services[0].name : '');
	}, [services]);

  const ServiceTab = ({imgUrl, name}) => {
    return (
      <Nav.Item>
        <Nav.Link eventKey={name}>
          <div className="media service_item hvr-grow">
            <div className="media-body">
              <p className="media-heading">{name}</p>
            </div>
            {imgUrl &&
            <img className="mr-3" src={IMAGE_SOURCE_URL + imgUrl.imgUrl} alt={name} />}
          </div>
        </Nav.Link>
      </Nav.Item>
    );
  }

  const ServicePackContent = ({content, pro}) => {
    return (
      <>
        <span className="fa-li"><FontAwesomeIcon icon={pro ? faCheck : faTimes} /></span>
        <strong>{content}</strong>
      </>
    );
  }

  const PricingCard = ({name, price, contents}) => {
    return (
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <h5 className="card-title text-center">{name}</h5>
          <h6 className="card-price text-center">{price ? price.toLocaleString() : ''}đ</h6>
          <hr />
          <ul className="fa-ul">
            {Array.isArray(contents) ? 
            contents.map((content) => <li><ServicePackContent {...content} /></li>) : 
            ''}
          </ul>
          <Button content={t('contactUs')} link="#contact-form" />
        </div>
      </div>
    );
  }

  const Process = ({name}) => {
    return (
      <div className="col-xs-3 bs-wizard-step">
        <div className="text-center bs-wizard-stepnum"><p>{name}</p></div>
        <div className="progress"><div className="progress-bar"></div></div>
        <a href="#" className="bs-wizard-dot"></a>
      </div>
    );
  }

  const CustomerImg = ({imgUrl}) => {
    return (
      <div className="col-md-6 col-xs-12 home__customer-img-pane">
        <img src={IMAGE_SOURCE_URL + imgUrl} alt="service"/>
      </div>
    );
  }

  const Blog = ({title, titleImgUrl, publicDate, link}) => {
    return (
      <div className="col-md-6 blog-page__latest-item ebl-item-latest row">
        <div className="col-lg-6 col-xs-5 blog-page__latest-item-img">
          {titleImgUrl &&
          <a href={link}><img src={IMAGE_SOURCE_URL + titleImgUrl.imgUrl} alt={title}/></a>}
        </div>
        <div className="col-lg-6 col-xs-7 blog-page__latest-item-text">
          <h3><a href={link}>{title}</a></h3>
          <p>{publicDate}</p>
        </div>
      </div>
    );
  }
  
  const TabContent = ({name, description, customerImgUrls, pricingCards, processes, relatedBlogs}) => {
    return (
      <Tab.Pane eventKey={name}>
        <SectionHeader header={name} withBg={false} style="text-center"/>
        <p className="e-description text-left">{description}</p>

        <SectionHeader header={t('serviceDetail.servicePacks')} withBg={false} style="text-center"/>
        <div className="row service_pricing">
          {Array.isArray(pricingCards) && pricingCards.map((card) => <PricingCard {...card} />)}
        </div>
        <p className="margin-top-30">** Giá trên bao gồm răng sứ titaium chính hãng</p>
        
        <SectionHeader header={t('serviceDetail.processes')} withBg={false} style="text-center"/>
        <div className="row bs-wizard">
          {Array.isArray(processes) && processes.map((process) => <Process {...process} />)}
        </div>
        
        <SectionHeader header={t('serviceDetail.customerImages')} withBg={false} style="text-center"/>
        <div className="row">
          {Array.isArray(customerImgUrls) && customerImgUrls.map((img) => <CustomerImg {...img} />)}
        </div>
        
        <SectionHeader header={t('serviceDetail.relatedBlogs')} withBg={false} style="text-center"/>
        <div className="row gx-5">
          {Array.isArray(relatedBlogs) && relatedBlogs.map((blog) => <Blog {...blog} />)}
        </div>
      </Tab.Pane>
    );
  }

  return (
    <>
      <Tab.Container activeKey={key}>
        <Row>
          <Col sm={3} className="service_sidebar">
            <div className="service_service-list">
              <p className="title-no-bg">{t('serviceDetail.service')}:</p>
              <Nav variant="pills" className="flex-column" onSelect={(key) => setKey(key)}>
                {Array.isArray(services) && services.map((service) => <ServiceTab {...service} />)}
              </Nav>
            </div>
          </Col>
          <Col sm={9}>
            <Tab.Content className="service_detail">
              <button className="service_menu-mobile hide-pc">
                <img src="images/icon-mobile-menu.png" alt="Mobile menu" />
              </button>
              {Array.isArray(services) && services.map((service) => <TabContent {...service} />)}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  )
}

export default ServiceDetail

import React, { useContext, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import { faChevronRight, faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PageContext } from '../PageContext';
import { getBlogs, getPolicies } from '../pages/home/Data';
import './Footer.css';
import SocialMedia from './SocialMedia';

function Footer({
  footerData
}) {

  const { handlePageChange } = useContext(PageContext);
  const [blogs, setBlogs] = useState([]);
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
		const fetchData = async () => {
			setBlogs(await getBlogs());
            setPolicies(await getPolicies());
		};
		fetchData();
	}, []);

  return (
    <>
      <div className="e-footer">
        <div className="container no-padding">
          <div className="row">
            <div className="col-md-4 ef-listing hide-mobile">
              <img src="/icons/lucci-icon.png" alt="Loon eyes" />
              {Array.isArray(policies) && policies.map((policy) =>
                <Link to={`/policies/${policy.id}`} onClick={() => handlePageChange('articlePage')}>
                  <FontAwesomeIcon icon={faChevronRight} className="mr-3"/>
                  {policy.name}
                </Link>
              )}
            </div>
            <div className="col-md-4 ef-contact">
              <h2 className="epg-title">Liên hệ</h2>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3" />
                {footerData ? footerData.adress : ''}
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="mr-3" />
                {footerData ? footerData.phone : ''}
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                {footerData ? footerData.email : ''}
              </p>
              <div>
                <SocialMedia />
              </div>
            </div>
            <div className="col-lg-4 ef-articles hide-mobile">
              <h2 className="epg-title">Blog</h2>
              {Array.isArray(blogs) && blogs.slice(0, 3).map((blog) =>
                <Link to={`/blogs/${blog.id}`} onClick={() => handlePageChange('articlePage')}>
                  <FontAwesomeIcon icon={faChevronRight} className="mr-3"/>
                  {blog.title}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer

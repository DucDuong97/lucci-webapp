import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import {FaTimes, FaBars} from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import './Navbar.css'
import { PageContext } from '../PageContext'

function Navbar({sub}) {
  const { t, i18n } = useTranslation();
  const { handlePageChange } = useContext(PageContext);
 
  const changeLanguage = code => {
    i18n.changeLanguage(code);
    setVi(code === 'vi');
  };

  const [vi,setVi] = useState(true);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(() => !click);

  return (
    <>
      <div className= {sub ? 'navbar__sub-page position-relative' : 'navbar'}>
        <div className="navbar-container container">
          <Link to='/' className="nav-logo" onClick={()=>handlePageChange("home")}>
            <img src='/icons/lucci-icon.png' alt="logo" />
          </Link>
          
          <div className="menu-icon hide-pc" onClick={handleClick}>
            {click ? <FaTimes size={28}/> : <FaBars size={28}/>}
          </div>
          <div className={click ? 'nav-menu active' : 'nav-menu'}>
            <Link to='/services' className="nav-link" onClick={()=>handlePageChange("serviceDetail")}>
              {t('services')}
            </Link>
            <Link to='/#customerImgs' className="nav-link">
            {t('customers')}
            </Link>
            <Link to='/blogs' className="nav-link" onClick={()=>handlePageChange("blogPage")}>
            {t('blogs')}
            </Link>
            <Link to='/contact' className="nav-link" onClick={()=>handlePageChange("contactPage")}>
            {t('contact')}
            </Link>
            <div className="lang-menu">
              <div className={vi ? 'active' : ''} onClick={() => changeLanguage('vi')}>
                <img alt="Language" src='/icons/icon-lang-vi.png' /> Vie
              </div>
              <div className={vi ? '' : 'active'} onClick={() => changeLanguage('en')}>
                <img alt="Language" src='/icons/icon-lang-en.png' /> Eng
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

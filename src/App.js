import React, { createContext, useEffect, useState } from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/home/Home';
import ServiceDetail from './components/pages/service/ServiceDetail';
import Navbar from './components/shared/Navbar'
import Banner from './components/shared/Banner'
import ContactForm from './components/shared/ContactForm'
import Footer from './components/shared/Footer'
import { getServiceItems, getSingletonContents, getOffices } from './components/pages/home/Data'
import BlogPage from './components/pages/blog/BlogPage';
import ContactPage from './components/pages/contact/ContactPage';
import BlogDetail from './components/pages/blog/BlogDetail';
import { PageContext } from './components/PageContext';
import PolicyArticle from './components/pages/article/PolicyArticle';

function App() {
  
  const [page, setPage] = useState('home');
  const [sub, setSub] = useState(false);
  const [services, setServices] = useState([]);
  const [footerData, setFooterData] = useState([]);
  const [offices, setOffices] = useState([]);

	const createFooterData = (singletons) => {
		const singletonMap = {};
		singletons.map(singleton => singletonMap[singleton.type] = singleton.content);
		return {
			adress: singletonMap.ADDRESS,
			phone: singletonMap.PHONE,
			email: singletonMap.EMAIL,
			policies: [],
			blogs: []
		};
	}

  const handlePageChange = (pageName) => {
    setPage(pageName);
    setSub(false);
    if (pageName === 'contactPage' || pageName === 'articlePage') {
      setSub(true);
    }
    window.scrollTo(0, 0);
  } 

	useEffect(() => {
		const fetchData = async () => {
			setServices(await getServiceItems());
			setFooterData(createFooterData(await getSingletonContents()));
      setOffices(await getOffices());
		}
		fetchData();
	}, []);

  return (
    <div className="App">
      
      <Router>
        <PageContext.Provider value={{ page, handlePageChange }} >
          <Navbar sub={sub} />
          {!sub && <Banner/>}
          
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/services' exact component={ServiceDetail}/>
            <Route path='/blogs' exact component={BlogPage}/>
            <Route path='/blogs/:id' exact component={BlogDetail}/>
            <Route path='/policies/:id' exact component={PolicyArticle}/>
            <Route path='/contact' exact 
              render={() => <ContactPage 
                adresses={Array.isArray(offices) && offices.map((office) => office.adress)}
                phone={footerData && footerData.phone} 
                email={footerData && footerData.email} />
              }
            />
          </Switch>
        
          <ContactForm services={Array.isArray(services) && services.map((service) => service.name)} 
                        offices={Array.isArray(offices) && offices.map((office) => office.adress)} />
          <Footer footerData={footerData}/>
        </PageContext.Provider>
      </Router>
    </div>
  );
}

export default App;

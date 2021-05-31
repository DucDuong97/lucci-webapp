import React, { useEffect, useState } from 'react'
import AchievementSection from './AchievementSection'
import CustomerImgSection from './CustomerImgSection'
import CustomerReviewSection from './CustomerReviewSection'
import CustomerVideoSection from './CustomerVideoSection'
import { getServiceItems, getAchievements, getVideos, getCustomerReviews} from '../../../Data'
import ServiceSection from './ServiceSection';

function Home() {

	const [services, setServices] = useState([]);
	const [achievements, setAchievements] = useState([]);
	const [customerImgs, setCustomerImgs] = useState([]);
	const [videos, setVideos] = useState([]);
	const [customerReviews, setCustomerReviews] = useState([]);

	const createCustomerImgs = (serviceItems) => {
		return Array.isArray(serviceItems) ? serviceItems.map(serviceItem => ({
			service: {
				serviceName: serviceItem.name,
				serviceImg: serviceItem.imgUrl
			},
			imgs: serviceItem.customerImgUrls.map(customerImgUrl => customerImgUrl.imgUrl)
		})) : [];
	};

	useEffect(() => {
		const fetchData = async () => {
			const serviceItems = await getServiceItems();
			setServices(serviceItems);
			setAchievements(await getAchievements());
			setCustomerImgs(createCustomerImgs(serviceItems));
			setVideos(await getVideos());
			setCustomerReviews(await getCustomerReviews());
		};
		fetchData();
	}, []);

	return (
		<div>
			<ServiceSection services={services} />
			<AchievementSection achievements={achievements} />
			<CustomerImgSection customerImgs={customerImgs} />
			<CustomerVideoSection videoLinks={videos} />
			<CustomerReviewSection reviews={customerReviews} />
		</div>
	)
}

export default Home

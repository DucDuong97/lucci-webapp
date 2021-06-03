import axios from 'axios';

export const IMAGE_SOURCE_URL="https://lucci.s3-ap-southeast-1.amazonaws.com/";
// export const WEB_URL = "http://localhost:8080/";
export const WEB_URL = "https://lucciadmin.herokuapp.com/";
const API_URL = WEB_URL + "api/";
const SERVICE_API_URL = API_URL + "service-items";
const ACHIEVEMENT_API_URL = API_URL + "achievements";
const VIDEO_LINK_API_URL = API_URL + "videos";
const CUSTOMER_REVIEW_API_URL = API_URL + "customer-reviews";
const SINGLETON_CONTENT_API_URL = API_URL + "singleton-contents";
const OFFICE_API_URL = API_URL + "branches";
const BLOG_API_URL = API_URL + "blogs";
const POLICY_API_URL = API_URL + "policies";

export const getServiceItems = async () => {
  try {
    return (await axios.get(SERVICE_API_URL)).data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const getAchievements = async () => {
  try {
    return (await axios.get(ACHIEVEMENT_API_URL)).data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const getVideos = async () => {
  try {
    return (await axios.get(VIDEO_LINK_API_URL)).data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const getCustomerReviews = async () => {
  try {
    return (await axios.get(CUSTOMER_REVIEW_API_URL)).data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const getSingletonContents = async () => {
  try {
    return (await axios.get(SINGLETON_CONTENT_API_URL)).data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const getOffices = async () => {
  try {
    return (await axios.get(OFFICE_API_URL)).data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const getBlogs = async () => {
  try {
    return (await axios.get(BLOG_API_URL)).data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const getBlog = async (id) => {
  try {
    return (await axios.get(BLOG_API_URL + "/" + id)).data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const getPolicies = async () => {
  try {
    return (await axios.get(POLICY_API_URL)).data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const getPolicy = async (id) => {
  try {
    return (await axios.get(POLICY_API_URL + "/" + id)).data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
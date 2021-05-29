import React, { useState, useEffect, useContext } from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import './BlogPage.css';
import { getBlogs } from '../home/Data';
import BlogItemCommonSide from './BlogItemCommonSide';
import { PageContext } from '../../PageContext';

function BlogPage() {

  const { handlePageChange } = useContext(PageContext);
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setBlogs(await getBlogs());
    };
    fetchData();
  }, []);

  const BlogItem = ({title, titleImgUrl, id}) => {
    return (
      <Link to={`/blogs/${id}`} className="blog-page__banner-item" onClick={() => handlePageChange('articlePage')}>
          TODO
        <img src={`/icons/${titleImgUrl.imgUrl}`} alt="Blog" />
        <div>{title}</div>
      </Link>
    );
  };

  const BlogItemSub = ({title, titleImgUrl, id}) => {
    return (
      <Link to={`/blogs/${id}`} className="blog-page__banner-item blog-page__banner-item-sub"
      onClick={() => handlePageChange('articlePage')}>
          TODO
        <img src={`/icons/${titleImgUrl.imgUrl}`} alt="Blog" />
        <div>{title}</div>
      </Link>
    );
  };

  const BlogItemLatest = ({title, titleImgUrl, publishDate, id, description}) => {
    return (
      <div className="blog-page__latest-item ebl-item-latest row">
        <div className="col-lg-6 col-xs-5 blog-page__latest-item-img">
          <Link to={`/blogs/${id}`} onClick={() => handlePageChange('articlePage')}>
              TODO
            <img src={`/icons/${titleImgUrl.imgUrl}`} alt="Blog" />
          </Link>
        </div>
        <div className="col-lg-6 col-xs-7 blog-page__latest-item-text">
          <h3><Link to={`/blogs/${id}`} onClick={() => handlePageChange('articlePage')}>{title}</Link></h3>
          <p>{publishDate ? publishDate.split("T")[0] : ''}</p>
          <div className="hide-mobile">{description}</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container blog-page__banner">
        <div className="row">
          <div className="col-lg-8 col-xs-12 blog-page__slide-container" id="ebb-item-slide">
            {blogs && blogs.map((blog) => <BlogItem {...blog} />)}
          </div>
          <div className="col-lg-4 col-xs-12 hide-tablet">
            {blogs && blogs.slice(1,3).map((blog) => <BlogItemSub {...blog} />)}
          </div>
        </div>
      </div>

      <div className="container no-padding">
        <div className="row">
          <div className="col-lg-8 col-xs-12 margin-bottom-30">
            <h2 className="blog-page__title">{t('blogPage.recentBlogs')}</h2>
            {blogs && blogs.map((blog) => <BlogItemLatest {...blog} />)}
          </div>
          <div className="col-lg-4 col-xs-12 hide-tablet">
            <BlogItemCommonSide blogs={blogs} />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPage

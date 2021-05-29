import React, { useEffect, useState } from 'react';
import './BlogDetail.css';
import SocialMedia from '../../shared/SocialMedia';
import { useParams } from 'react-router-dom';
import { getBlog, getBlogs } from '../home/Data';
import BlogItemCommonSide from './BlogItemCommonSide';
import './BlogDetail.css';

function BlogDetail() {

  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setBlog(await getBlog(id));
      setBlogs(await getBlogs());
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div className="e-blog-detail container">
        <div className="row">
          <div className="ebd-container col-lg-8 col-xs-12">
            <h1>{blog.title}</h1>
            <div className="ebd-param">
              <span>Last update: {blog.publishDate}</span>
              <p><SocialMedia /></p>
            </div>
            <div className="ebd-content">{blog.content}</div>
          </div>

          <div className="col-lg-4 col-xs-12 hide-tablet">
            <BlogItemCommonSide blogs={blogs} />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetail

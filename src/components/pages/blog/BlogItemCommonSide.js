import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

function BlogItemCommonSide({blogs}) {

  const { t } = useTranslation();
  
  const BlogItemCommon = ({title, titleImgUrl, publishDate, id}) => {
    return (
      <div class="blog-page__latest-item row">
        <div class="col-md-5 blog-page__latest-item-img">
          <Link to={`/blogs/${id}`}>
            <img src={`/icons/${titleImgUrl.imgUrl}`} alt="Blog" />
          </Link>
        </div>
        <div class="col-md-7 blog-page__latest-item-text">
          <h3>
            <Link to={`/blogs/${id}`}>
              {title}
            </Link>
          </h3>
          <p>{publishDate ? publishDate.split("T")[0] : ''}</p>
        </div>
      </div>
    );
  }
  return (
    <>
      <div class="position-sticky">
        <h2 class="blog-page__title">{t('blogPage.commonBlogs')}</h2>
        {blogs && blogs.slice(0, 3).map((blog) => <BlogItemCommon {...blog} />)}
      </div>
    </>
  )
}

export default BlogItemCommonSide

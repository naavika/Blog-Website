import React, { useContext } from 'react';
import { BlogContext } from '../../context/BlogContext';
import classes from './BlogList.module.css';

const BlogList = () => {
  const { blogs, deleteBlog, editBlog } = useContext(BlogContext);

  return (
    <div className={classes['blog-list']}>
      {blogs.map((blog, index) => (
        <div key={index} className={classes['blog-details']}>
          <h2>{blog.title}</h2>
          <div className={classes['image-container']}>
            <img src={blog.imageUrl} alt={blog.title} />
          </div>
          <p>{blog.description}</p>
          <div className={classes['button-group']}>
            <button
              onClick={() => editBlog(index)}
              className={classes['edit-blog-button']}
            >
              Edit Blog
            </button>
            <button
              onClick={() => deleteBlog(index)}
              className={classes['delete-blog-button']}
            >
              Delete Blog
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

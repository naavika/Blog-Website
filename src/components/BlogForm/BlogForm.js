import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { BlogContext } from '../../context/BlogContext';
import classes from './BlogForm.module.css';

const BlogForm = () => {
  const {
    isFormVisible,
    setIsFormVisible,
    imageUrl,
    setImageUrl,
    title,
    setTitle,
    description,
    setDescription,
    addBlog,
    editIndex, 
  } = useContext(BlogContext);

  const handlePostBlog = () => {
    const newBlog = { imageUrl, title, description };
    addBlog(newBlog);
    setIsFormVisible(false);
    setImageUrl('');
    setTitle('');
    setDescription('');
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
    setImageUrl('');
    setTitle('');
    setDescription('');
  };

  if (!isFormVisible) return null;

  return ReactDOM.createPortal(
    <>
      <div className={classes['form-backdrop']} onClick={handleCloseForm}></div>
      <div className={classes['form-container']}>
        <form>
          <div>
            <label htmlFor="image-url">Image URL:</label>
            <input
              id="image-url"
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Blog Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className={classes['button-container']}>
            <button
              type="button"
              onClick={handlePostBlog}
              className={classes['post-blog-button']}
            >
              {editIndex !== null ? 'Update Blog' : 'POST BLOG'}
            </button>
            <button
              type="button"
              onClick={handleCloseForm}
              className={classes['close-button']}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </>,
    document.getElementById('modal-root')
  );
};

export default BlogForm;

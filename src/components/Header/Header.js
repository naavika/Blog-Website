import React, { useContext } from 'react';
import { BlogContext } from '../../context/BlogContext';
import classes from './Header.module.css';


const Header = () => {
  const { setIsFormVisible } = useContext(BlogContext);

  const handleAddNewBlogClick = () => {
    setIsFormVisible(true);
  };

  return (
    <>
      <h1 className={classes['header-title']}>Blog Website</h1>
      <div className={classes['header-button-container']}>
       <button onClick={handleAddNewBlogClick} className={classes['add-new-blog-button']}>Add New Blog</button>
      </div>
      <hr />
    </>
  );
};

export default Header;

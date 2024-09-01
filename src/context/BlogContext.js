import React, { useState, createContext } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addBlog = (newBlog) => {
    if (editIndex !== null) {
      const updatedBlogs = blogs.map((blog, index) =>
        index === editIndex ? newBlog : blog
      );
      setBlogs(updatedBlogs);
      setEditIndex(null);
    } else {
      setBlogs([...blogs, newBlog]);
    }
  };

  const deleteBlog = (index) => {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(updatedBlogs);
  };

  const editBlog = (index) => {
    const blogToEdit = blogs[index];
    setImageUrl(blogToEdit.imageUrl);
    setTitle(blogToEdit.title);
    setDescription(blogToEdit.description);
    setIsFormVisible(true);
    setEditIndex(index);
  };

  return (
    <BlogContext.Provider
      value={{
        isFormVisible,
        setIsFormVisible,
        blogs,
        setBlogs,
        imageUrl,
        setImageUrl,
        title,
        setTitle,
        description,
        setDescription,
        addBlog,
        deleteBlog,
        editBlog,
        setEditIndex,
        editIndex,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

import React from 'react';
import Header from './components/Header/Header';
import BlogForm from './components/BlogForm/BlogForm';
import BlogList from './components/BlogList/BlogList';
import { BlogProvider } from './context/BlogContext';


function App() {
  return (
    <BlogProvider>
      <div className="App">
        <Header />
        <BlogForm />
        <BlogList />
      </div>
    </BlogProvider>
  );
}

export default App;
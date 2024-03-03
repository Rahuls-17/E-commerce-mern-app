import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import {Helmet} from "react-helmet";
import { Toaster } from 'react-hot-toast';

const layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
       <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        </Helmet>
      <Header/>
      <main style={{minHeight:'80vh'}}> {children} </main>
      <Footer/>
      <Toaster />
    </div>
  );
};

layout.defaultProps ={
  title: 'Ecommerce App',
  description: 'mern stack project',
  keywords: 'mern,react,node,ecommerce,webapp',
  author: 'Rahul'
}

export default layout
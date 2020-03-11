import React from 'react';
import './Admin.css';
import AddNewsContainer from './Admin_Components/addNewsContainer';
import AddArticleContext from './Admin_Components/addArticleContext';
import AuthForm from "./Admin_Components/AuthForm";

const Admin = () => (
  <div className="admin">
      <div className='authForm'>
          <AuthForm />
      </div>
    <AddNewsContainer />
    <AddArticleContext />
  </div>
);

export default Admin;

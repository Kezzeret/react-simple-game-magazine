import React from 'react';
import './Admin.css'
import AddNewsContainer from "./Admin_Components/addNewsContainer";
import AddArticleContext from "./Admin_Components/addArticleContext";


const Admin = () => {
    return <div className='admin'>
      <AddNewsContainer />
      <AddArticleContext />
    </div>
}

export default Admin;
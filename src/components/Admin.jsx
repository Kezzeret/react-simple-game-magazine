import React from 'react';
import './Admin.css'
import AddNewsContainer from "./Admin_Components/addNewsContainer";
import AddArticleContext from "./Admin_Components/addArticleContext";


const Admin = () => {
    debugger
    return <div className='admin'>
      <AddNewsContainer />
      <p/>
      <AddArticleContext />
    </div>
}

export default Admin;
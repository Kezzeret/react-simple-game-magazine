import React from 'react';
import './Admin.css'
import AddNews from './Admin_Components/addNews'
import AddArticle from './Admin_Components/addArticle'


const Admin = (props) => {


  
  
    return <div className='admin'>
      <AddNews dispatch={props.dispatch}/>
      <p/>
      <AddArticle dispatch={props.dispatch}/>
    </div>
}

export default Admin;
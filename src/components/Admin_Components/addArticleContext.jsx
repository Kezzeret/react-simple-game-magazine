import React from 'react';
import { addNewArticleActionCreator } from '../../redux/articlesData-reducer';
import AddArticle from './addArticle';
import StoreContext from '../../StoreContex';

const AddArticleContext = () => (
  <StoreContext.Consumer>
    { (store) => {
      const addNewArticle = (title, image, preview, text, textSmall) => {
        store.dispatch(addNewArticleActionCreator(title, image, preview, text, textSmall));
      };

      return <AddArticle addNewArticle={addNewArticle} />;
    }}
  </StoreContext.Consumer>
);

export default AddArticleContext;

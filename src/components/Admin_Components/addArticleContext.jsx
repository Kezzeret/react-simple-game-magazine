import React from 'react';
import { addNewArticleActionCreator } from './../../redux/articlesData-reducer';
import AddArticle from "./addArticle";
import StoreContext from "../../StoreContex";

const AddArticleContext = () => {
    return (
        <StoreContext.Consumer>
            { store => {
                let addNewArticle = (title, image, preview, text, text_small) => {
                    store.dispatch(addNewArticleActionCreator(title, image, preview, text, text_small));
                }

                return <AddArticle addNewArticle={addNewArticle}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default AddArticleContext;
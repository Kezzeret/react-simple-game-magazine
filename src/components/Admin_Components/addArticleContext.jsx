import React from 'react'
import {addNewArticleActionCreator} from './../../redux/articlesData-reducer'
import AddArticle from "./addArticle";
import StoreContext from "../../StoreContex";

const AddArticleContext = () => {

debugger
    return (
        <StoreContext.Consumer>
            { store => {
                let addNewArticle = (title, image, preview, text) => {
                    store.dispatch(addNewArticleActionCreator(title, image, preview, text));
                }

                return <AddArticle addNewArticle={addNewArticle}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default AddArticleContext;
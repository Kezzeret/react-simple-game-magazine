import React from 'react'
import { addNewPostActionCreator } from './../../redux/newsData-reducer'
import AddNews from "./addNews";
import StoreContext from "../../StoreContex";

//эта компаонента - просто обёртка для addNews, созданная, чтобы последняя не взаимодействовала с дтспатчем

const AddNewsContainer = () => {


    
    return (
        <StoreContext.Consumer>
            { store => {
                let addNewPost = (title, img, text) => {
                    store.dispatch(addNewPostActionCreator(title, img, text));
                }

                return <AddNews addNewPost={addNewPost} />}
        }
        </StoreContext.Consumer>
    )
}

export default AddNewsContainer;
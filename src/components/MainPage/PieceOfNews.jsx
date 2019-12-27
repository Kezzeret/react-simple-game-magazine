import React from 'react';
import './PieceofNews.css';
import ReactHtmlParser from "react-html-parser";

const PieceOfNews = (props) => {

    let previewRef = React.createRef();
    return <div className='new'>
        <div className='new_preview' ref={previewRef} style={{ backgroundImage: `url(${props.preview})` }}>

        </div>
        <div className='new_name new_style'>
            {props.title}
        </div>
        <div className='new_date new_style'>
            <span className="icon-calendar"></span>
            {props.date}
        </div>
        <div className='new_like new_style'>
            <span className="icon-comments"></span>
            {props.like_count}
        </div>
        <div className='new_text new_style'>
            {ReactHtmlParser(props.text)}
        </div>
        <div className='new_links new_style'>
            <span className="icon-social-vk social-link"></span>
            <span className="icon-social-fb social-link"></span>
            <span className="icon-social-tw social-link"></span>
            <span className="icon-social-gp social-link"></span>
        </div>
        <div className='new_read new_style'>
            {props.more}
        </div>
    </div>
}




export default PieceOfNews;
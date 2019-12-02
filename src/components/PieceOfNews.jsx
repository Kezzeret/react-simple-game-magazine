import React from 'react';
import './PieceofNews.css';

const PieceOfNews = (props) => {
    return <div className='new'>
        <div className='new_preview'>
            <img src={props.preview}></img>
        </div>
        <div className='new_name'>
            {props.title}
        </div>
        <div className='new_date'>
            {props.date}
        </div>
        <div className='new_like'>
            {props.like_count}
        </div>
        <div className='new_text'>
            {props.text}
        </div>
        <div className='new_links'>
            {props.links}
        </div>
        <div className='new_read'>
            {props.more}
        </div>
    </div>
}




export default PieceOfNews;
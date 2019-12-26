import React from 'react';
import './InterviewItem.css';

const InterviewItem = (props) => {

    return <div className='interviewItem'>
        <div className='interviewPreview' style={{backgroundImage: `url(${props.image})`}} />
        <div className='interviewTitle'>
            {props.title}
        </div>
        <div className='interviewText'>
            {props.text}
        </div>
        <div className='interviewLink'>
            Читать
        </div>
    </div>
}




export default InterviewItem;
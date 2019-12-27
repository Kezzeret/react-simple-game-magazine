import React from 'react';
import './PieceofNews.css';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

const PieceOfNews = ({preview, title, date, likeCount, text, more}) => {
  const previewRef = React.createRef();
  return (
    <div className="new">
      <div className="new_preview" ref={previewRef} style={{ backgroundImage: `url(${preview})` }} />
      <div className="new_name new_style">
        {title}
      </div>
      <div className="new_date new_style">
        <span className="icon-calendar" />
        {date}
      </div>
      <div className="new_like new_style">
        <span className="icon-comments" />
        {likeCount}
      </div>
      <div className="new_text new_style">
        {ReactHtmlParser(text)}
      </div>
      <div className="new_links new_style">
        <span className="icon-social-vk social-link" />
        <span className="icon-social-fb social-link" />
        <span className="icon-social-tw social-link" />
        <span className="icon-social-gp social-link" />
      </div>
      <div className="new_read new_style">
        {more}
      </div>
    </div>
  );
};

PieceOfNews.propTypes = {
  preview: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  likeCount: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  more: PropTypes.string.isRequired,
};

export default PieceOfNews;

import React from 'react';
import './Article.css';
import PropTypes from 'prop-types';

const Article = ({ preview, title, link }) => (
  <div className="article">
    <div className="article_preview" style={{ backgroundImage: `url(${preview})` }} />
    <div className="article_name">
      {title}
    </div>
    <div className="article_read">
      {link}
    </div>
  </div>
);

Article.propTypes = {
  preview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Article;

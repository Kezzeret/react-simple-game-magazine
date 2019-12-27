import React, { Component } from 'react';
import './ArticleItem.css';
import ReactHtmlParser from 'react-html-parser';

class ArticleItem extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      className: 'articleItem small',
    };

    this.handleClick = () => {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    };
  }

  render() {
    const articleTextFull = this.state.isOpen && <div className="articleText">{ReactHtmlParser(this.props.text)}</div>;
    const articleTextSmall = !this.state.isOpen && <div className="articleText">{this.props.text_small}</div>;
    return (
      <div className={this.state.className}>
        <div className="articlePreview" style={{ backgroundImage: `url(${this.props.image})` }} />
        <div className="articleTitle">
          {this.props.title}
        </div>
        <div className="articleDate">
          <span className="icon-calendar" />
          {this.props.date}
        </div>
        <div className="articleComment">
          <span className="icon-comments" />
          {this.props.commentsCount}
        </div>
        {articleTextFull}
        {articleTextSmall}
        <button type="button" className="buttonReadMore" onClick={this.handleClick}>
          {this.state.isOpen ? 'Свернуть' : 'Читать далее'}
        </button>
      </div>
    );
  }
}

export default ArticleItem;

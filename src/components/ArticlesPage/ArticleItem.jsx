import React, {Component} from 'react';
import './ArticleItem.css';
import ReactHtmlParser from 'react-html-parser';

class ArticleItem extends Component {

    state = {
        isOpen: false,
        className: 'articleItem small'
    }

    render() {

        const articleTextFull = this.state.isOpen && <div className='articleText'>{ReactHtmlParser(this.props.text)}</div>
        const articleTextSmall = !this.state.isOpen && <div className='articleText'>{this.props.text_small}</div>
        return <div className={this.state.className}>
        <div className='articlePreview' style={{backgroundImage: `url(${this.props.image})`}} />
        <div className='articleTitle'>
            {this.props.title}
        </div>
        <div className='articleDate'>
            <span className="icon-calendar"></span>
            {this.props.date}
        </div>
        <div className='articleComment'>
            <span className="icon-comments"></span>
            {this.props.commentsCount}
        </div>
        {articleTextFull}
        {articleTextSmall}
            <button className="buttonReadMore" onClick={this.handleClick}>
                {this.state.isOpen ? "Свернуть" : "Читать далее"}
            </button>
    </div>
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });

    }
}

export default ArticleItem;

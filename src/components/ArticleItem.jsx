import React, {Component} from 'react';
import './ArticleItem.css';
import { tsImportEqualsDeclaration } from '@babel/types';

class ArticleItem extends Component {

    state = {
        isOpen: true
    }
    render() {
        const articleTextFull = this.state.isOpen && <div className='articleText'>{this.props.text}</div>
        const articleTextSmall = !this.state.isOpen && <div className='articleText'>укороченная версия</div>
        return <div className='articleItem'>
        <div className='articlePreview'>
            <img src={this.props.preview}></img>
        </div>
        <div className='articleTitle'>
            {this.props.title}
        </div>
        <div className='articleDate'>
            {this.props.date}
        </div>
        <div className='articleComment'>
            {this.props.commentsCount}
        </div>
        <button onClick={this.handleClick}>
            {this.state.isOpen ? "Закрыть" : "Открыть"}
        </button>
        {articleTextFull}
        {articleTextSmall}
    </div>
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default ArticleItem;

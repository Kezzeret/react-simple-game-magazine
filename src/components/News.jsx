import React from 'react';
import './News.css';

import PieceOfNews from './PieceOfNews.jsx'

const News = () => {
    let newsData = [
        {preview: 'https://cdn.everyplayer.ru/source/1/AxlQOLHYrt_76tfaDUqbTQVvFqYPj81P.jpg', title: 'Азерот здесь', date: '01 августа 1999', like_count: 'никому не нравится', text: 'Готовьтесь к грандиозному возвращению королевы волн 26 июня в обновлении «Возвращение Азшары»!', links: 'ссылки на соцсети', more: 'читать подробнее'},
        {preview: 'https://cdn.everyplayer.ru/source/1/AxlQOLHYrt_76tfaDUqbTQVvFqYPj81P.jpg', title: 'Азерот там', date: '01 августа 1999', like_count: 'никому не нравится', text: 'Готовьтесь к грандиозному возвращению королевы волн 26 июня в обновлении «Возвращение Азшары»!', links: 'ссылки на соцсети', more: 'читать подробнее'},
        {preview: 'https://cdn.everyplayer.ru/source/1/AxlQOLHYrt_76tfaDUqbTQVvFqYPj81P.jpg', title: 'Азерот сям', date: '01 августа 1999', like_count: 'никому не нравится', text: 'Готовьтесь к грандиозному возвращению королевы волн 26 июня в обновлении «Возвращение Азшары»!', links: 'ссылки на соцсети', more: 'читать подробнее'},
        {preview: 'https://cdn.everyplayer.ru/source/1/AxlQOLHYrt_76tfaDUqbTQVvFqYPj81P.jpg', title: 'Азерот здесь', date: '01 августа 1999', like_count: 'никому не нравится', text: 'Готовьтесь к грандиозному возвращению королевы волн 26 июня в обновлении «Возвращение Азшары»!', links: 'ссылки на соцсети', more: 'читать подробнее'},
        {preview: 'https://cdn.everyplayer.ru/source/1/AxlQOLHYrt_76tfaDUqbTQVvFqYPj81P.jpg', title: 'Азерот там', date: '01 августа 1999', like_count: 'никому не нравится', text: 'Готовьтесь к грандиозному возвращению королевы волн 26 июня в обновлении «Возвращение Азшары»!', links: 'ссылки на соцсети', more: 'читать подробнее'},
        {preview: 'https://cdn.everyplayer.ru/source/1/AxlQOLHYrt_76tfaDUqbTQVvFqYPj81P.jpg', title: 'Азерот сям', date: '01 августа 1999', like_count: 'никому не нравится', text: 'Готовьтесь к грандиозному возвращению королевы волн 26 июня в обновлении «Возвращение Азшары»!', links: 'ссылки на соцсети', more: 'читать подробнее'},
        {preview: 'https://cdn.everyplayer.ru/source/1/AxlQOLHYrt_76tfaDUqbTQVvFqYPj81P.jpg', title: 'Азерот здесь', date: '01 августа 1999', like_count: 'никому не нравится', text: 'Готовьтесь к грандиозному возвращению королевы волн 26 июня в обновлении «Возвращение Азшары»!', links: 'ссылки на соцсети', more: 'читать подробнее'},
        {preview: 'https://cdn.everyplayer.ru/source/1/AxlQOLHYrt_76tfaDUqbTQVvFqYPj81P.jpg', title: 'Азерот там', date: '01 августа 1999', like_count: 'никому не нравится', text: 'Готовьтесь к грандиозному возвращению королевы волн 26 июня в обновлении «Возвращение Азшары»!', links: 'ссылки на соцсети', more: 'читать подробнее'},
        {preview: 'https://cdn.everyplayer.ru/source/1/AxlQOLHYrt_76tfaDUqbTQVvFqYPj81P.jpg', title: 'Азерот сям', date: '01 августа 1999', like_count: 'никому не нравится', text: 'Готовьтесь к грандиозному возвращению королевы волн 26 июня в обновлении «Возвращение Азшары»!', links: 'ссылки на соцсети', more: 'читать подробнее'}
    ]

    let newsElement = newsData.map( n => 
        <PieceOfNews preview={n.preview} title={n.title} date={n.date} like_count={n.like_count} text={n.text} links={n.links} more={n.more} />
    );

    return <div className='news'>
        {newsElement}
  </div>
}

export default News;
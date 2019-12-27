const ADD_POST = 'ADD-POST';

const initialState = [
  {
    id: 1,
    preview: 'https://cdn.everyplayer.ru/source/1/AxlQOLHYrt_76tfaDUqbTQVvFqYPj81P.jpg',
    title: 'Азерот здесь',
    date: '01 августа 1999',
    likeCount: 'никому не нравится',
    text: 'Готовьтесь к грандиозному возвращению королевы волн 26 июня в обновлении «Возвращение Азшары»!',
    links: 'ссылки на соцсети',
    more: 'читать подробнее',
  },
  {
    id: 2,
    preview: 'https://cdn.everyplayer.ru/source/1/AxlQOLHYrt_76tfaDUqbTQVvFqYPj81P.jpg',
    title: 'Азерот там',
    date: '01 августа 1999',
    likeCount: 'никому не нравится',
    text: 'Готовьтесь к грандиозному возвращению королевы волн 26 июня в обновлении «Возвращение Азшары»!',
    links: 'ссылки на соцсети',
    more: 'читать подробнее',
  },
  {
    id: 3,
    preview: 'https://cdn.everyplayer.ru/source/1/AxlQOLHYrt_76tfaDUqbTQVvFqYPj81P.jpg',
    title: 'Азерот сям',
    date: '01 августа 1999',
    likeCount: 'никому не нравится',
    text: 'Готовьтесь к грандиозному возвращению королевы волн 26 июня в обновлении «Возвращение Азшары»!',
    links: 'ссылки на соцсети',
    more: 'читать подробнее',
  },
  {
    id: 4,
    preview: 'https://cdn.everyplayer.ru/source/1/AxlQOLHYrt_76tfaDUqbTQVvFqYPj81P.jpg',
    title: 'Азерот здесь',
    date: '01 августа 1999',
    likeCount: 'никому не нравится',
    text: 'Готовьтесь к грандиозному возвращению королевы волн 26 июня в обновлении «Возвращение Азшары»!',
    links: 'ссылки на соцсети',
    more: 'читать подробнее',
  },
  {
    id: 5,
    preview: 'https://cdn.everyplayer.ru/source/1/AxlQOLHYrt_76tfaDUqbTQVvFqYPj81P.jpg',
    title: 'Азерот там',
    date: '01 августа 1999',
    likeCount: 'никому не нравится',
    text: 'Готовьтесь к грандиозному возвращению королевы волн 26 июня в обновлении «Возвращение Азшары»!',
    links: 'ссылки на соцсети',
    more: 'читать подробнее',
  },
  {
    id: 6,
    preview: 'https://cdn.everyplayer.ru/source/1/AxlQOLHYrt_76tfaDUqbTQVvFqYPj81P.jpg',
    title: 'Азерот сям',
    date: '01 августа 1999',
    likeCount: 'никому не нравится',
    text: 'Готовьтесь к грандиозному возвращению королевы волн 26 июня в обновлении «Возвращение Азшары»!',
    links: 'ссылки на соцсети',
    more: 'читать подробнее',
  },
  {
    id: 7,
    preview: 'https://cdn.everyplayer.ru/source/1/AxlQOLHYrt_76tfaDUqbTQVvFqYPj81P.jpg',
    title: 'Азерот здесь',
    date: '01 августа 1999',
    likeCount: 'никому не нравится',
    text: 'Готовьтесь к грандиозному возвращению королевы волн 26 июня в обновлении «Возвращение Азшары»!',
    links: 'ссылки на соцсети',
    more: 'читать подробнее',
  },
  {
    id: 8,
    preview: 'https://cdn.everyplayer.ru/source/1/AxlQOLHYrt_76tfaDUqbTQVvFqYPj81P.jpg',
    title: 'Азерот там',
    date: '01 августа 1999',
    likeCount: 'никому не нравится',
    text: 'Готовьтесь к грандиозному возвращению королевы волн 26 июня в обновлении «Возвращение Азшары»!',
    links: 'ссылки на соцсети',
    more: 'читать подробнее',
  },
  {
    id: 9,
    preview: 'https://cdn.everyplayer.ru/source/1/AxlQOLHYrt_76tfaDUqbTQVvFqYPj81P.jpg',
    title: 'Азерот сям',
    date: '01 августа 1999',
    likeCount: 'никому не нравится',
    text: 'Готовьтесь к грандиозному возвращению королевы волн 26 июня в обновлении «Возвращение Азшары»!',
    links: 'ссылки на соцсети',
    more: 'читать подробнее',
  },
];

const newsDataReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    today = `${dd}/${mm}/${yyyy}`;

    const newPost = {
      preview: action.postImg,
      title: action.postTitle,
      date: today,
      likeCount: 'никому не нравится',
      text: action.postMessage,
      links: 'ссылки на соцсети',
      more: 'читать подробнее',
    };
    state.unshift(newPost);
  }
  return state;
};

export const addNewPostActionCreator = (title, img, text) => (
  {
    type: ADD_POST,
    postMessage: text,
    postTitle: title,
    postImg: img,
  }
);

export default newsDataReducer;

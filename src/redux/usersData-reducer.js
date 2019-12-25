const ADD_USER = 'ADD-USER';

let initialState = [
    { id: 1, avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg', nickname: 'Стальнолязг', links: 'ссылки на соцсети'},
    { id: 2, avatar: 'https://klike.net/uploads/posts/2019-03/1551511862_48.jpg', nickname: 'Нобуди', links: 'ссылки на соцсети'},
    { id: 3, avatar: 'http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg', nickname: 'Галеак', links: 'ссылки на соцсети'},
    { id: 4, avatar: 'https://cdnimg.rg.ru/img/content/176/91/41/kinopoisk.ru-The-Witcher-3391871_d_850.jpg', nickname: 'Махакамец', links: 'ссылки на соцсети'},
    { id: 5, avatar: 'https://upload.wikimedia.org/wikipedia/ru/a/a9/%D0%92%D0%9A_%D0%92%D0%9A_soundtrack.jpg', nickname: 'Серый', links: 'ссылки на соцсети'},
];

const usersReducer = (state = initialState, action) => {

    if (action.type === ADD_USER) {


        let newUser = {
            avatar: action.userImg,
            nickname: action.userNickname,
            links: 'ссылки на соцсети',
        };
        state.unshift(newUser);

    }
    return state;
}

export const addNewUserActionCreator = (avatar, nickname) => {
    return (
        {
            type: ADD_USER,
            userAvatar: avatar,
            userNickname: nickname
        }
    )
}

export default usersReducer;
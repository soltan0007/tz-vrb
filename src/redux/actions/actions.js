export const addArticle = (title, author, description) => ({
    type: 'ADD_ARTICLE',
    payload: {
        title,
        author,
        description
    },
});

export const removeArticle = (index) => ({
    type: 'REMOVE_ARTICLE',
    payload: index,
});

export const pinArticle = (index) => ({
    type: 'PIN_ARTICLE',
    payload: index,
});


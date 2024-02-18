const initialState = {
    articles: [],
    externalArticles: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ARTICLE':
            return {
                ...state,
                articles: [...state.articles, action.payload],
            };
        case 'REMOVE_ARTICLE':
            return {
                ...state,
                articles: state.articles.filter((_, index) => index !== action.payload),
            };
        case 'PIN_ARTICLE':
            const pinnedArticle = state.articles[action.payload];
            const updatedArticles = state.articles.filter((_, index) => index !== action.payload);
            return {
                ...state,
                articles: [pinnedArticle, ...updatedArticles],
            };
        case 'FETCH_EXTERNAL_ARTICLES':
            return {
                ...state,
                externalArticles: [...state.externalArticles, ...action.payload],
            };
        default:
            return state;
    }
};

export default reducer;

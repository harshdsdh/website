import { configureStore, createAction, createReducer, getState } from '@reduxjs/toolkit';


const initialState = {
    blogs: [],
    blogPost: {
        id: null,
        title: null,
        content: null,
        error: null,
    },
};

const fetchBlogsAction = createAction('blogs/fetch');
const fetchBlogsSuccessAction = createAction('blogs/fetchSuccess');
const fetchBlogsErrorAction = createAction('blogs/fetchError');
export const selectBlogPost = createAction('blogs/selectBlogPost', (id) => ({
    payload: id,
}));

export const fetchBlogPost = createAction('blogs/fetchBlogPost');
export const loadBlogPostSuccess = createAction('blogs/loadBlogPostSuccess');
export const loadBlogPostError = createAction('blogs/loadBlogPostError');

export const resetBlogPost = createAction('blogs/resetBlogPost');


const parseMarkdown = (markdown) => {
    const lines = markdown.split('\n');
    const title = lines[0].replace(/^#\s/, '').trim();
    const content = lines.slice(1).join('\n').trim();

    return { title, content };
};

export const fetchBlogsThunk = () => async (dispatch) => {
    try {
        const response = await fetch('./blog/blogsNumber.md');
        let totalBlogs = parseMarkdown(await response.text());
        dispatch(fetchBlogsSuccessAction(totalBlogs));

    } catch (error) {
        dispatch(fetchBlogsErrorAction(error));
    }
};

export const fetchBlogPostContentThunk = (postId) => async (dispatch) => {
    try {
        const response = await fetch(`./blog/post-${postId}.md`);
        const data = await response.text();
        let parsedData = parseMarkdown(data);
        parsedData.id = postId;
        dispatch(selectBlogPost(postId));
        dispatch(loadBlogPostSuccess(parsedData));
    } catch (error) {
        dispatch(loadBlogPostError(error));
    }
};

const blogReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchBlogsSuccessAction, (state, action) => ({
            ...state,
            blogs: action.payload,
        }))
        .addDefaultCase((state) => state);
});

const blogPostReducer = createReducer(null, (builder) => {
    builder
        .addCase(selectBlogPost, (state, action) => {
            // Always update the selected blog post ID, regardless of the current state
            return {
                ...state,
                id: action.payload
            };
        })
        .addCase(loadBlogPostSuccess, (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        })
        .addCase(resetBlogPost, (state, action) => null)
        .addCase(loadBlogPostError, (state, action) => {
            // Add meaningful error handling logic here
            return { ...state, error: action.payload };
        });
});

const blogPostIDReducer = createReducer(null, (builder) => {
    builder
        .addCase(selectBlogPost, (state, action) => action.payload)
        .addCase(resetBlogPost, (state, action) => null)
        .addCase(loadBlogPostError, (state, action) => {
            // Add meaningful error handling logic here
            return { ...state, error: action.payload };
        });
});



const store = configureStore({
    reducer: {
        blogs: blogReducer,
        blogPost: blogPostReducer, // Combine selected blog properties here
        blogID: blogPostIDReducer
    },
});


export default store;
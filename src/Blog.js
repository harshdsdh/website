import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import BlogPost from './BlogPost';
import { fetchBlogsThunk, selectBlogPost, fetchBlogPostContentThunk, resetBlogPost } from './store';
import "./styles.css";

function Blog() {
    const dispatch = useDispatch();
    const totalBlogs = parseInt(useSelector((state) => state.blogs.blogs.content));
    const [isLoading, setIsLoading] = useState(false);
    const blogsArray = [];
    for (let i = 0; i < totalBlogs; i++) {
        blogsArray.push(i);
    }

    const selectedPostId = useSelector((state) => state.blogID);
    const [prevSelectedPostId, setPrevSelectedPostId] = useState(null);
    console.log(useSelector((state) => state));

    useEffect(() => {
        if (typeof selectedPostId == 'number') {
            dispatch(fetchBlogPostContentThunk(selectedPostId));
            setPrevSelectedPostId(selectedPostId);
        }
    }, [dispatch, selectedPostId, prevSelectedPostId]);


    useEffect(() => {
        dispatch(fetchBlogsThunk());
    }, [dispatch]);

    useEffect(() => {
        return () => {
            // This cleanup effect will be called when the component unmounts
            dispatch(resetBlogPost());
        };
    }, [dispatch]);

    return (
        <div className="blog-container">
            <h3 className="blogs-heading">Blogs</h3>
            <div className="blog-items">
                <div className="blog-list">
                    {Array.isArray(blogsArray) && blogsArray.map((index) => (
                        <div key={index}>
                            <h3>Blog {index + 1}</h3>
                            <button onClick={() => dispatch(selectBlogPost(index + 1))}>
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
                <div className="blog-content">
                    {selectedPostId && <BlogPost post={selectedPostId} />}
                </div>
            </div>
        </div >
    );
}

export default Blog;
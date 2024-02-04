import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogPostContentThunk } from './store';

function BlogPost() {

    const selectedPost = useSelector((state) => state.blogPost);
    const prevSelectedPostId = useRef(null);
    useEffect(() => {
        if (selectedPost) {
            prevSelectedPostId.current = selectedPost.id;

        }
    }, [selectedPost]);

    if (!selectedPost) {
        return <p>Select a blog post...</p>;
    }

    // Display post content based on its structure
    return (
        <div className="blog-post-container">
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.content}</p>
        </div>
    );
}

export default BlogPost;
import React from "react";
import usePosts from "../hooks/usePosts";

const PostContext = React.createContext();

function PostProvider({ children }) {
    const {posts, createPost, getPost, updatePost, deletePost} = usePosts();

    return (
        <PostContext.Provider
            value={{
                posts,
                createPost,
                getPost,
                updatePost,
                deletePost
            }}
        >
            {children}
        </PostContext.Provider>
    );
}

export { PostContext, PostProvider };

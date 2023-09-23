import React from "react";
import usePosts from "../hooks/usePosts";

const PostContext = React.createContext();

function PostProvider({ children }) {
    const {posts, postKeys, createPost, getPost, updatePost} = usePosts();

    return (
        <PostContext.Provider
            value={{
                posts,
                postKeys,
                createPost,
                getPost,
                updatePost
            }}
        >
            {children}
        </PostContext.Provider>
    );
}

export { PostContext, PostProvider };

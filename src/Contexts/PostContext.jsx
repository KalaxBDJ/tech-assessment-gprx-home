import React from "react";
import usePosts from "../hooks/usePosts";

const PostContext = React.createContext();

function PostProvider({ children }) {
    const { posts, createPost, getPost, updatePost, deletePost, sharedMessage,
        setSharedMessage, dataLoaded } = usePosts();

    return (
        <PostContext.Provider
            value={{
                posts,
                createPost,
                getPost,
                updatePost,
                deletePost,
                sharedMessage,
                setSharedMessage,
                dataLoaded
            }}
        >
            {children}
        </PostContext.Provider>
    );
}

export { PostContext, PostProvider };

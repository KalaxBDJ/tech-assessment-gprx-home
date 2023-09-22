import React from "react";
import usePosts from "./hooks/usePosts";

const PostContext = React.createContext();

function PostProvider({ children }) {
    const {posts, postKeys} = usePosts();

    return (
        <PostContext.Provider
            value={{
                posts,
                postKeys
            }}
        >
            {children}
        </PostContext.Provider>
    );
}

export { PostContext, PostProvider };

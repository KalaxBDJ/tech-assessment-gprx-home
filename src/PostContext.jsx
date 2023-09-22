import React, { useEffect, useState } from "react";
const PostContext = React.createContext();

function PostProvider({ children }) {
    const [posts, setPosts] = useState([]);
    const [postKeys, setPostKeys] = useState([]);

    //Get posts
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((resp) => {
            setPosts(resp);
            setPostKeys(Object.keys(resp[0]));
        });
    } , []);

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

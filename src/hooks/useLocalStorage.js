import { useEffect, useState } from "react";
const LOCAL_STORAGE_KEY = "POSTS_V1";

function useLocalStorage() {
  //Posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //Get from local storage for data persistance
    if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((resp) => {
          setPosts(resp);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(resp));
        });
    } else {
      const localPosts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      setPosts(localPosts);
    }
  }, []);

  const savePosts = (newPosts) => {
    //Save Posts in localStorage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newPosts));

    //Update Posts state
    setPosts(newPosts);
  };

  return { posts, savePosts };
}

export { useLocalStorage };

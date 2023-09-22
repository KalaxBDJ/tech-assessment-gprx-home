import { useState, useEffect } from 'react';

//Get the posts from API
function usePosts() {
  const [posts, setPosts] = useState([]);

  //Keys for MUI DataTable
  const [postKeys, setPostKeys] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((resp) => {
        setPosts(resp);
        setPostKeys(Object.keys(resp[0]));
      });
  }, []);

  return { posts, postKeys };
}

export default usePosts;

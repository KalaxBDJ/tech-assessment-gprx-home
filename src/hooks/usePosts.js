import { useLocalStorage } from "./useLocalStorage";

//Get the posts from API
function usePosts() {
  //LocalStorage Custom Hook
  const { posts, postKeys, savePosts } = useLocalStorage();

  const createPost = (post) => {
    //Crate post structure
    const newPost = {
      title: post.title,
      body: post.body,
      userId: 1,
      id: posts[posts.length - 1].id + 1,
    };

    //Create copy of actual posts and save them in the state with the new post
    let newPosts = [...posts];
    newPosts.push(newPost);
    savePosts(newPosts);
  };

  return { posts, postKeys, createPost };
}

export default usePosts;

import { useLocalStorage } from "./useLocalStorage";

//Get the posts from API
function usePosts() {
  //LocalStorage Custom Hook
  const {posts, postKeys, savePosts} = useLocalStorage();

  return { posts, postKeys };
}

export default usePosts;

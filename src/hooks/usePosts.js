import { useLocalStorage } from "./useLocalStorage";

//Get the posts from API
function usePosts() {
  //LocalStorage Custom Hook
  const { posts, postKeys, savePosts } = useLocalStorage();

  const createPost = async (post) => {
    //Crate post structure
    const newPost = {
      title: post.title,
      body: post.body,
      userId: 1,
    };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(newPost),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      const resp = await response.json();

      // Cambia el Id debido a que la API siempre establece el mismo id
      resp.id = posts[posts.length - 1].id + 1;

      // Crea una copia de los posts actuales y guárdalos en el estado con el nuevo post
      let newPosts = [...posts];
      newPosts.push(resp);
      savePosts(newPosts);

      return resp.id;
    } catch (error) {
      return -1;
    }
  };

  const getPost = (id) => {
    return posts.find((post) => post.id == id);
  };

  const updatePost = async (postData) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postData.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            userId: 1,
            id: postData.id,
            title: postData.title,
            body: postData.body
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      //create resp variable and change id
      let resp = await response.json();
      resp.id = postData.id;

      const index = posts.findIndex((post) => post.id == resp.id);

      let newPosts = [...posts];
      newPosts[index] = { ...resp };
      savePosts(newPosts);
    } catch (e) {
      return -1;
    }
  };

  return { posts, postKeys, createPost, getPost, updatePost };
}

export default usePosts;

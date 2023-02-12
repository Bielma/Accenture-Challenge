const base_url = "https://my-json-server.typicode.com/bielma/posts_db/";

const getPosts = async () => {
  const route = "posts";
  const request = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  return await sendRequest(route, request);
};
const getPost = async (id) => {
  const route = `posts/${id}`;
  const request = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  return await sendRequest(route, request);
};

const sendRequest = async (route, request, isFile = false) => {
  let response;
  try {
    response = await fetch(base_url + route, request);
    if (response.status === 401) {
      return { success: false };
    }
  } catch (error) {
    return { success: false };
  }
  try {
    const data =
      isFile && response.status === 200
        ? await response.blob()
        : await response.json();
    return data;
  } catch (error) {
    return { success: false };
  }
};

export { getPost, getPosts };

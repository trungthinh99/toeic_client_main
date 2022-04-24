const url = "https://jsonplaceholder.typicode.com/users";

const fetchLoginAdmin = () => {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};

export {fetchLoginAdmin};
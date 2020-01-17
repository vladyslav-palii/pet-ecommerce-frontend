import API from "../config";

export const createCategory = (userId, token, categoryName) => {

  return fetch(`${API}/category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(categoryName)

  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err);
    })
}
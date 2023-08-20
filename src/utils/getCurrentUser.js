import Cookies from "js-cookie";

const getCurrentUser = async () => {
  try {
    const response = await fetch(
      "https://spotifymern-7660789c547e.herokuapp.com/spotifymern/users/authorization/current-user",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            Cookies.get("jsonwebtoken") || localStorage.getItem("jsonwebtoken")
          }`,
        },
        credentials: "include",
      }
    );

    if (!response.ok) return null;

    const { data } = await response.json();

    console.log(data);

    return data.user;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default getCurrentUser;

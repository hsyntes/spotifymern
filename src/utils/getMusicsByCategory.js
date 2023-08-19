const getMusicByCategory = async (category) => {
  const response = await fetch(
    `http://localhost:8000/spotifymern/musics/category/${category}`
  );

  const { data } = await response.json();

  return data.musics;
};

export default getMusicByCategory;

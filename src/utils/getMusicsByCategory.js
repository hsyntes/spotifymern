const getMusicByCategory = async (category) => {
  const response = await fetch(
    `https://spotifymern-7660789c547e.herokuapp.com/spotifymern/musics/category/${category}`
  );

  const { data } = await response.json();

  return data.musics;
};

export default getMusicByCategory;

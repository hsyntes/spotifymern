const searchMusics = async (name) => {
  const response = await fetch(
    `http://localhost:8000/spotifymern/musics/search/${name}`
  );

  const { data } = await response.json();

  return data.musics;
};

export default searchMusics;

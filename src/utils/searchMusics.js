const searchMusics = async (name) => {
  const response = await fetch(
    `https://spotifymern-7660789c547e.herokuapp.com/spotifymern/musics/search/${name}`
  );

  const { data } = await response.json();

  return data.musics;
};

export default searchMusics;

const getMusics = async () => {
  const response = await fetch("http://localhost:8000/spotifymern/musics/");

  const { data } = await response.json();

  return data.musics;
};

export default getMusics;

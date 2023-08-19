const getAllMusics = async () => {
  const response = await fetch("http://localhost:8000/spotifymern/musics/all");

  const { data } = await response.json();

  return data.musics;
};

export default getAllMusics;

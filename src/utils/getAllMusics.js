const getAllMusics = async () => {
  const response = await fetch(
    "https://spotifymern-7660789c547e.herokuapp.com/spotifymern/musics/all"
  );

  const { data } = await response.json();

  return data.musics;
};

export default getAllMusics;

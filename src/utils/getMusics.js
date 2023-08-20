const getMusics = async () => {
  const response = await fetch(
    "https://spotifymern-7660789c547e.herokuapp.com/spotifymern/musics/"
  );

  const { data } = await response.json();

  return data.musics;
};

export default getMusics;

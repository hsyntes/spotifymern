const getMusic = async (id) => {
  if (!id) return null;

  const response = await fetch(
    `https://spotifymern-7660789c547e.herokuapp.com/spotifymern/musics/id/${id}`
  );

  const { data } = await response.json();

  return data.music;
};

export default getMusic;

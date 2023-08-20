const getRecommendedMusics = async (req, res, next) => {
  const response = await fetch(
    "https://spotifymern-7660789c547e.herokuapp.com/spotifymern/musics/recommended"
  );

  const { data } = await response.json();

  return data.musics;
};

export default getRecommendedMusics;

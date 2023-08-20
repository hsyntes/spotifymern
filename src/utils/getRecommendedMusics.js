const getRecommendedMusics = async (req, res, next) => {
  const response = await fetch(
    "http://localhost:8000/spotifymern/musics/recommended"
  );

  const { data } = await response.json();

  return data.musics;
};

export default getRecommendedMusics;

const getCategories = async () => {
  const response = await fetch(
    "http://localhost:8000/spotifymern/musics/categories"
  );

  const { data } = await response.json();

  return data.categories;
};

export default getCategories;

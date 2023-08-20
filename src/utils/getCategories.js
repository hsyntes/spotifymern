const getCategories = async () => {
  const response = await fetch(
    "https://spotifymern-7660789c547e.herokuapp.com/spotifymern/musics/categories"
  );

  const { data } = await response.json();

  return data.categories;
};

export default getCategories;

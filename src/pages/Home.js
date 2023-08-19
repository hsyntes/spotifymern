import { useQuery } from "react-query";
import getMusics from "../utils/getMusics";
import Splash from "../components/ui/Splash";
import getCategories from "../utils/getCategories";
import Musics from "../components/musics/Musics";
import Categories from "../components/categories/Categories";
import { useOutletContext } from "react-router-dom";

const HomePage = () => {
  const { handlePlay } = useOutletContext();

  const { data: musics, isLoading: isMusicsLoading } = useQuery({
    queryKey: "getMusics",
    queryFn: getMusics,
  });

  const { data: categories, isLoading: isCategoriesLoading } = useQuery({
    queryKey: "getCategories",
    queryFn: getCategories,
    refetchOnWindowFocus: false,
  });

  if (isMusicsLoading || isCategoriesLoading) return <Splash />;

  return (
    <>
      <Musics musics={musics} handlePlay={handlePlay} />
      <Categories categories={categories} />
    </>
  );
};

export default HomePage;

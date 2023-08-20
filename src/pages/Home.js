import { useQuery } from "react-query";
import getMusics from "../utils/getMusics";
import Splash from "../components/ui/Splash";
import getCategories from "../utils/getCategories";
import Musics from "../components/musics/Musics";
import Categories from "../components/categories/Categories";
import Recommended from "../components/recommended/Recommended";
import CreatePlaylist from "../components/playlist/CreatePlaylist";
import BrowseSongs from "../components/musics/BrowseSongs";
import getRecommendedMusics from "../utils/getRecommendedMusics";

const HomePage = () => {
  const { data: musics, isLoading: isMusicsLoading } = useQuery({
    queryKey: "getMusics",
    queryFn: getMusics,
  });

  const { data: categories, isLoading: isCategoriesLoading } = useQuery({
    queryKey: "getCategories",
    queryFn: getCategories,
    refetchOnWindowFocus: false,
  });

  const { data: recommendedMusics, isLoading: isRecommendedMusicsLoading } =
    useQuery({
      queryKey: "getRecommendedMusics",
      queryFn: getRecommendedMusics,
    });

  if (isMusicsLoading || isCategoriesLoading || isRecommendedMusicsLoading)
    return <Splash />;

  return (
    <>
      <Musics musics={musics} />
      <Categories categories={categories} />
      <section className="block lg:hidden mb-10">
        <CreatePlaylist musics={recommendedMusics} />
      </section>
      <Recommended musics={recommendedMusics} />
      <section className="block lg:hidden mb-10">
        <BrowseSongs />
      </section>
    </>
  );
};

export default HomePage;
